import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navb = document.querySelector('nav')
    if(window.location.pathname == '/home') navb!.style.background = 'radial-gradient(#fff, #c8c5ff)';
    
  }

}
