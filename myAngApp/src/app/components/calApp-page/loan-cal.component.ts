import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankDynamic } from 'src/app/models/bank-dynamic';
import { LoanTypeDynamic } from 'src/app/models/loan-type-dynamic';
import { BankService } from 'src/app/services/bank-service';
import { DataService } from 'src/app/services/cc-data-service';
import { LoanAppService } from 'src/app/services/loan-app.service';
import { LoanTypeService } from 'src/app/services/loan-type-service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-loan-cal',
  templateUrl: './loan-cal.component.html',
  styleUrls: ['./loan-cal.component.css']
})

export class LoanCalComponent {

  constructor(private dataService: DataService, private router: Router, private notifyService: NotificationService, private loanAppService: LoanAppService, private bankService: BankService, private loanTypeService: LoanTypeService) { }

  //loan app info / left side
  selBankName: string = '';
  selType: string = '';
  selAmount: string = ''; //num
  selTerm: string = ''; //num

  //static rate
  interestRate: number = 0.03; //num

  //for cal result
  resInstallment = 0;
  resTotalPayment = 0;

  //for Banks(Redis)
  Banks: BankDynamic[] = [];
  Types: LoanTypeDynamic[] = [];

  //for Popular Searchs
  Populars: string[] = [];

  ngOnInit(): void {
    this.showBankOptions();
    this.showTypeOptions();
    this.showPopularSearchs();
  }

  showBankOptions() {
    this.bankService.getAllBanks().subscribe((banks: BankDynamic[]) => {
      this.Banks = banks;
    });
  }

  showTypeOptions() {
    this.loanTypeService.getAllLoanTypes().subscribe((types: LoanTypeDynamic[]) => {
      this.Types = types;
    });
  }

  showPopularSearchs() {
    this.loanAppService.GetPopularLoanApps().subscribe((popular: string[]) => {
      this.Populars = popular;
    });
  }

  select(variable: any, event: any) {
    variable = event.target[event.target.selectedIndex].text;
  }

  calculateAndGoApp() {
    if (this.isLeftSideControlsDone() == true) {

      //calculate
      const intSelTerm = parseInt(this.selTerm)
      const intSelAmount = parseInt(this.selAmount)

      // Aylık Taksit = (Kredi Tutarı * Aylık Faiz Oranı) / (1 - (1 + Aylık Faiz Oranı)^(-Kredi Vadesi)) 
      const aylikTaksit = (intSelAmount * this.interestRate) / (1 - (1 + this.interestRate) ** (intSelTerm * (-1)));
      // Toplam Ödeme = Aylık Taksit * Kredi Vadesi 
      const toplamOdeme = aylikTaksit * intSelTerm;

      // , .. formatting
      const formattedAT = parseFloat(aylikTaksit.toFixed(2));
      const formattedTO = parseFloat(toplamOdeme.toFixed(2));

      this.resInstallment = formattedAT;
      this.resTotalPayment = formattedTO;

      // move selected options and result to app-page
      this.dataService.selectedBank = this.selBankName;
      this.dataService.selectedLoanType = this.selType;
      this.dataService.selectedLoanAmount = this.selAmount;
      this.dataService.selectedLoanTerm = this.selTerm;
      this.dataService.interestRate = this.interestRate;

      this.dataService.resInstallment = this.resInstallment;
      this.dataService.resTotalPayment = this.resTotalPayment;

      //navigate to app-page
      this.router.navigateByUrl('/kredibasvur/onay');
    }
  }


  isLeftSideControlsDone() {
    if (this.isLeftSideFilled() == true) {
      if (this.checkAmount() == true && this.checkTerm() == true) {
        return (true)
      }
    }
    return (false)
  }

  isLeftSideFilled() {
    const lines = [this.selBankName, this.selType, this.selAmount, this.selTerm];
    for (let i = 0; i < 4; i++) {
      if (lines[i] == null || lines[i] == '') {
        this.notifyService.showError("Lütfen sol taraftaki tüm alanları doldurunuz.", "Hata");
        return (false)
      }
    }
    return (true)
  }

  checkAmount() {
    const intSelAmount = parseInt(this.selAmount)
    if (Number.isInteger(intSelAmount) && intSelAmount >= 1000 && intSelAmount <= 1000000) {
      return (true)
    }
    this.notifyService.showError("Lütfen geçerli " + "kredi tutarı" + " giriniz.(1000-1000000)", "Hata");
    this.selAmount = '';
    return (false)
  }

  checkTerm() {
    const intSelTerm = parseInt(this.selTerm)
    console.log(this.selTerm)
    if (Number.isInteger(intSelTerm) && intSelTerm >= 1 && intSelTerm <= 36) {
      return (true)
    }
    this.notifyService.showError("Lütfen geçerli " + "kredi vadesi" + " giriniz.(1-36)", "Hata");
    this.selTerm = '';
    return (false)
  }

}
