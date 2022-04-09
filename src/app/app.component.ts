import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { TokenStorageService } from './services/token-storage.service';

//export var agrementUploaded : boolean;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  isLoggedIn = false;
  currentUser: any;
  agrementUploaded : any;

  constructor(private userService : UserService , private tokenStorageService : TokenStorageService){}

  ngOnInit(): void {
  //  const btn = document.querySelector('#d')
  //  const header = document.querySelector('h4')
  //  header?.setAttribute('class' , 'abc')
  this.isLoggedIn = !!this.tokenStorageService.getToken();
  this.currentUser = this.tokenStorageService.getUser();
  if(this.isLoggedIn){
    //console.log(this.currentUser.images)
    this.agrementEnvoye2(this.currentUser.id)
  }

  $(document).ready(function(){
    $(".wish-icon i").click(function(){
      $(this).toggleClass("fa-heart fa-heart-o");
    });
  });	
   
  }
  
  title = 'LocationVoitureFrontend';

  // agrementEnvoye(id:number){
  //   this.userService.agrementEnvoye(id).subscribe(
  //     data=>{
  //       data._embedded.images.forEach((element:any) => {
  //         if(element.typeImage == "AGREMENT"){
  //           this.agrementUploaded = true;
  //           console.log("intérieur sub ",this.agrementUploaded);
  //           return;
  //         }
  //       });
  //     }
  //   )
  //   if(this.agrementUploaded === true) {return;}
  //   this.agrementUploaded = false
  // }

  agrementEnvoye2(id:number){
    // var v! : boolean ;
    this.userService.agrementEnvoye2(id).subscribe(
      data=>{
        sessionStorage.setItem('agrementEnvovoye', data);
      }
    );
    
  }
}
