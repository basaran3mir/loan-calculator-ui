import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyAppsComponent } from './components/myApps-page/my-apps.component';
import { AboutComponent } from './components/about-page/about.component';
import { BanksComponent } from './components/banks-page/banks.component';
import { LoanCalComponent } from './components/calApp-page/loan-cal.component';
import { LoginComponent } from './components/login-page/login.component';
import { RegisterComponent } from './components/register-page/register.component';
import { ErrorComponent } from './components/error-page/error.component';
import { AppDetailsPageComponent } from './components/app-details-page/app-details-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoanAppComponent } from './components/addApp-page/loan-app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'giris',
    pathMatch: 'full'
  },
  {
    path: "anasayfa",
    component: HomePageComponent
  },
  {
    path: "giris",
    component: LoginComponent
  },
  {
    path: "kayitol",
    component: RegisterComponent
  },
  {
    path: "kredibasvurularim",
    component: MyAppsComponent
  },
  {
    path: "kredibasvur/onay",
    component: LoanAppComponent
  },
  {
    path: "kredibasvur",
    component: LoanCalComponent
  },
  {
    path: "bankalar",
    component: BanksComponent
  },
  {
    path: "hakkimizda",
    component: AboutComponent
  },
  {
    path: "hata",
    component: ErrorComponent
  },
  {
    path: '**',
    redirectTo: 'hata',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {


}
