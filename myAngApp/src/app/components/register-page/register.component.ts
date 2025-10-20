import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { DataService } from 'src/app/services/cc-data-service';
import { CustomerService } from 'src/app/services/customer-service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserAgentService } from 'src/app/services/user-agent-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private customerService: CustomerService, private notifyService: NotificationService, private dataService: DataService, private userAgentService: UserAgentService, private router: Router) { }

  nameSurname: string = '';
  phoneNum: string = '';
  email: string = '';
  password: string = '';
  passwordAgain: string = '';
  date!: Date;
  place: string = '';

  checkRegPlace() {
    const userAgent = this.userAgentService.getUserAgent();
    if (userAgent.indexOf('Mobi') > -1) {
      this.place = 'mobil'
    }
    else {
      this.place = "web"
    }
    return this.place
  }

  register() {

    this.date = new Date();
    this.date.setHours(this.date.getHours() + 3);

    this.checkRegPlace();

    let newCustomer: Customer = {
      nameSurname: this.nameSurname,
      phoneNum: this.phoneNum,
      email: this.email,
      password: this.password,
      regDate: this.date,
      regPlace: this.place
    };

    if (this.isAllControlsDone() == true) {
      this.customerService.addCustomer(newCustomer).subscribe((customer: Customer) => {
        newCustomer = customer;
      });
      this.clearForm();
      this.notifyService.showSuccess("Kayıt başarılı.", "Başarılı");
      this.router.navigateByUrl('/giris');
    }
  };

  clearForm() {
    this.nameSurname = ''
    this.phoneNum = ''
    this.email = ''
    this.password = ''
    this.passwordAgain = ''
  }

  isAllControlsDone() {
    if (this.isAllLinesFilled() == true && this.isPhoneNumCorrect() == true) {
      if (this.dataService.checkEmailFormat(this.email) == true) {
        if (this.isCustomerAlreadyMember() == true) {
          if (this.isPasswordCorrect() == true) {
            return (true)
          }
        }
      }
      else {
        this.email = '';
      }
    }
    return (false)
  }

  isAllLinesFilled() {
    const lines = [this.nameSurname, this.phoneNum, this.email, this.password, this.passwordAgain];
    for (let i = 0; i < 5; i++) {
      if (lines[i] == null || lines[i] == '') {
        this.notifyService.showError("Lütfen tüm alanları doldurunuz.", "Hata");
        return (false)
      }
    }
    return (true)
  }

  isPhoneNumCorrect() {
    if (Number.isInteger(parseInt(this.phoneNum))) {
      if (this.phoneNum.length == 10) {
        return (true)
      }
      else {
        this.notifyService.showError("Telefon numaranız 10 haneli olmalıdır. Lütfen başında 0 olmadan ve arada boşluk bırakmadan tekrar deneyiniz.", "Hata")
      }
    }
    else {
      this.notifyService.showError("Telefon numaranız sayılardan oluşmalıdır.", "Hata")
    }

    this.phoneNum = '';
    return (false)
  }

  isPasswordCorrect() {
    if (this.password.length >= 8) {
      if (this.password == this.passwordAgain) {
        return (true)
      }
      else {
        this.notifyService.showError("Girdiğiniz şifreler uyuşmuyor.", "Hata")
      }
    }
    else {
      this.notifyService.showError("Şifreniz en az 8 haneli olmalıdır.", "Hata")
    }
    return (false)
  }

  isCustomerAlreadyMember() {
    this.customerService.getCustomerByEmail(this.email).subscribe((customer: Customer) => {
      if (customer) {
        this.notifyService.showError("Bu e-mail adresi zaten kullanılıyor.", "Hata");
        this.email = '';
        return (false)
      }
      else {
        return (true)
      }
    });

    return (true)
  }

}
