import { TokenStorageService } from './../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import * as $ from 'jquery'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoggedIn : any;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    const navb = document.querySelector('nav')
    if(window.location.pathname == '/home') navb!.style.background = 'radial-gradient(#fff, #c8c5ff)';
    

      if(this.isLoggedIn == false){
        
        var isshow = sessionStorage.getItem('isshow');
        if (isshow== null) {
            sessionStorage.setItem('isshow', String(1));
    
            this.simpleAlert();
        }
      }else{
        //sessionStorage.removeItem("isshow");
        var isshow = sessionStorage.getItem('isshow');
        if (isshow== null) {
            sessionStorage.setItem('isshow', String(1));
    
            this.simpleAlert();
        }
      }
      
  
  }

  simpleAlert(){
    Swal.fire({
      html:
    '<img src="../../assets/popup.png" alt="Pray" style="height:500px;"/>',
    width: '570px'

    });
  }

}
