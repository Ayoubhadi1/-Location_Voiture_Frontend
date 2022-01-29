import { TestComponent } from './test/test.component';

import { PricingComponent } from './pricing/pricing.component';
import { StepsAgencyComponent } from './steps-agency/steps-agency.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'steps', component: StepsAgencyComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'test', component: TestComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
