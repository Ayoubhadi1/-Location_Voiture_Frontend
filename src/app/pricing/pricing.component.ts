import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navb = document.querySelector('nav')
    if(window.location.pathname == '/pricing') navb!.style.background = '#f0eded';
  }

}
