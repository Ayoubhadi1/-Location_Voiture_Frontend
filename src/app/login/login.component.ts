import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const navb = document.querySelector('nav')
    const list = document.querySelector('.si')
    if(window.location.pathname == '/login') navb!.style.background = 'transparent';
  }

}
