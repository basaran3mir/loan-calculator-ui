import { Component } from '@angular/core'; 
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { DataService } from 'src/app/services/cc-data-service';
import { CustomerService } from 'src/app/services/customer-service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private customerService: CustomerService, private notifyService: NotificationService, private router: Router, private dataService: DataService) {}

  nameSurname: string = '';
  phoneNum: string = '';
  email: string = '';
  password: string = '';
  
  login() {

    if (this.isAllControlsDone() == true) {
      this.customerService.getCustomerByEmail(this.email).subscribe((customer: Customer) => {
        if (customer) {
          if (customer.password == this.password) {

            this.nameSurname = customer.nameSurname;
            this.dataService.customerNameSurname = customer.nameSurname;
            this.phoneNum = customer.phoneNum;
            this.dataService.customerID = customer.customerID;
            
            this.notifyService.showSuccess("Giriş başarılı.", "Başarılı");
            this.router.navigateByUrl('/anasayfa');
          }
          else {
            this.notifyService.showError("Yanlış şifre.", "Hata");
            this.password = '';
          }
        }
        else {
          this.notifyService.showError("Bu e-mail adresine kayıtlı bir müşteri bulunamadı.", "Hata");
        }
      });

    }

  }

  isAllControlsDone() {
    if (this.isAllLinesFilled() == true) {
      if (this.dataService.checkEmailFormat(this.email) == true) {
        return (true)
      }
      else {
        this.email = '';
      }
    }
    return (false)
  }

  isAllLinesFilled() {
    const lines = [this.email, this.password];
    for (let i = 0; i < 2; i++) {
      if (lines[i] == null || lines[i] == '') {
        this.notifyService.showError("Lütfen tüm alanları doldurunuz.", "Hata");
        return (false)
      }
    }
    return (true)
  }

  clearForm() {
    this.email = ''
    this.password = ''
  }

}

