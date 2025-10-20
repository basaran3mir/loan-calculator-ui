import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyAppsComponent } from './components/myApps-page/my-apps.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './components/about-page/about.component';
import { BanksComponent } from './components/banks-page/banks.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoanCalComponent } from './components/calApp-page/loan-cal.component';
import { LoginComponent } from './components/login-page/login.component';
import { DataService } from './services/cc-data-service';
import { CustomerService } from './services/customer-service';
import { LoanAppService } from './services/loan-app.service';
import { NotificationService } from './services/notification.service';
import { RegisterComponent } from './components/register-page/register.component';
import { ErrorComponent } from './components/error-page/error.component';
import { AppDetailsPageComponent } from './components/app-details-page/app-details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoanAppComponent } from './components/addApp-page/loan-app.component';

@NgModule({
  declarations: [
    AppComponent,
    MyAppsComponent,
    AboutComponent,
    BanksComponent,
    TopBarComponent,
    LoanCalComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    AppDetailsPageComponent,
    HomePageComponent,
    LoanAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    DataService,
    CustomerService,
    LoanAppService,
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
