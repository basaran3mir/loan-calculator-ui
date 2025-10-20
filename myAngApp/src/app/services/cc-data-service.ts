import { Injectable } from '@angular/core';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  customerID?: number;
  customerNameSurname: string = '';
  selectedAppID?: number;

  //for show selected values in LoanApp Page
  selectedBank: string = '';
  selectedLoanType: string = '';
  selectedLoanAmount: string = '';
  selectedLoanTerm: string = '';
  interestRate!: number;

  //for show results in LoanApp Page
  resInstallment!: number;
  resTotalPayment!: number;

  constructor(private notifyService: NotificationService, private router: Router) { }

  checkEmailFormat(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return (true)
    }
    this.notifyService.showError("Lütfen geçerli bir mail adresi giriniz.", "Hata");
    return (false)
  }

  public checkPage() {
    if (this.router.url != "/giris" && this.router.url != "/kayitol" && 
    this.router.url != "/" && this.router.url != "") {
      if (this.customerID == null || this.customerID == undefined) {
        console.log("hata")
        this.router.navigateByUrl('hata');
      }
    }
  }

}