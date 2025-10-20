import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BankDynamic } from 'src/app/models/bank-dynamic';
import { LoanApp } from 'src/app/models/loan-app';
import { BankService } from 'src/app/services/bank-service';
import { DataService } from 'src/app/services/cc-data-service';
import { LoanAppService } from 'src/app/services/loan-app.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-add-app-page',
  templateUrl: './loan-app.component.html',
  styleUrls: ['./loan-app.component.css']
})
export class LoanAppComponent {
  
  constructor(private dataService: DataService, private router: Router, private notifyService: NotificationService, private loanAppService: LoanAppService, private bankService: BankService) { }

  customerID?: number;

  //selected options from calculation-page
  selBankName = this.dataService.selectedBank;
  selType = this.dataService.selectedLoanType;
  selAmount = this.dataService.selectedLoanAmount;
  selTerm = this.dataService.selectedLoanTerm;
  resInterest = this.dataService.interestRate;

  //result from calculation-page
  resInstallment = this.dataService.resInstallment;
  resTotalPayment = this.dataService.resTotalPayment;

  confirm: string = '';

  select(variable: any, event: any) {
    variable = event.target[event.target.selectedIndex].text;
  }

  clearForm() {
    this.selBankName = ''
    this.selType = ''
    this.selAmount = ''
    this.selTerm = ''
    this.resInterest = 0;
    this.resInstallment = 0;
    this.resTotalPayment = 0;
    this.confirm = '';
  }

  goBack() {
    this.router.navigateByUrl('/kredibasvur');
  }

  isConfirmed() {
    if (this.confirm == 'Onaylıyorum.') {
      return (true)
    }
    this.confirm = '';
    this.notifyService.showError("Lütfen onaylama işlemini gerçekleştiriniz.", "Hata");
    return (false)
  }

  addLoanApp() {
    if(this.isConfirmed() == true) {
      let current = new Date();
      let cDate = current.getDate() + '/' + (current.getMonth() + 1) + '/' + current.getFullYear();
      let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      let dateTime = cTime + ' ' + cDate;

      let isItApproved = "Onay bekliyor."
  
      let newLoanApp: LoanApp = {
        customerID: this.dataService.customerID,
        bankName: this.selBankName,
        type: this.selType,
        amount: parseInt(this.selAmount),
        term: parseInt(this.selTerm),
        isItApproved: isItApproved,
        appDate: dateTime
      };
  
      this.loanAppService.addLoanApp(newLoanApp).subscribe((loanapp: LoanApp) => {
        newLoanApp = loanapp;
        this.clearForm();
        this.notifyService.showSuccess("Kredi başvurunuz onaylanmak için sıraya alınmıştır.", "Başarılı");
        this.router.navigateByUrl('/kredibasvurularim');
      });
    };
  }
  
}
