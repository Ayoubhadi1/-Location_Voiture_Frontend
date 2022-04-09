import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { HomeComponent } from './home/home.component';
import { StepsAgencyComponent } from './steps-agency/steps-agency.component';
import { LoginComponent } from './login/login.component';

import { PricingComponent } from './pricing/pricing.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TestComponent } from './test/test.component';
import { DemanderCompteAgencierComponent } from './demander-compte-agencier/demander-compte-agencier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepsAgencyComponent,
    LoginComponent,
    PricingComponent,
    SignupComponent,
    NavbarComponent,
    TestComponent,
    DemanderCompteAgencierComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
