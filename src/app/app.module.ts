import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
