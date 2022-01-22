import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-steps-agency',
  templateUrl: './steps-agency.component.html',
  styleUrls: ['./steps-agency.component.css']
})
export class StepsAgencyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navb = document.querySelector('nav')
    if(window.location.pathname == '/steps') navb!.style.background = '#f0eded';
  }

}
