import { Component } from '@angular/core';
import { LoanApp } from 'src/app/models/loan-app';
import { LoanAppService } from 'src/app/services/loan-app.service';
import { DataService } from 'src/app/services/cc-data-service';
import { NotificationService } from 'src/app/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.css']
})
export class MyAppsComponent {

  constructor(private loanAppService: LoanAppService, private dataService: DataService, private notifyService: NotificationService, private router: Router) {}
  
  title = 'Angular';
  loanApps: LoanApp[] = [];
  selectedLoanApp!: LoanApp;

  ngOnInit(): void {
    this.showMyLoanApps();
  }

  showMyLoanApps() {
    this.loanAppService.getLoanAppsByCustomerId(this.dataService.customerID).subscribe((loanapps: LoanApp[]) => {
      this.loanApps = loanapps;
    });
  }

  showDetails(loanAppId: number) {

    let waitstatus = "Onay bekliyor."
    let yesstatus = "Onaylandı."
    let nostatus = "Reddedildi."

    this.loanAppService.getLoanAppById(loanAppId).subscribe((loanapp: LoanApp) => {
      if(loanapp.isItApproved == waitstatus) {
        this.notifyService.showInfo("Başvurunuz onay bekliyor. Detayları henüz göremezsiniz.","Durum");
      }
    });
  }

}