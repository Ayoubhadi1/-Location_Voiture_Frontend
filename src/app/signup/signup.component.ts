import { HttpHeaders } from '@angular/common/http';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import * as Collections from 'typescript-collections';

const httpOptions = {
  headers: new HttpHeaders().set("typeImage", "profilImage")
};
const httpOptions2 = {
  headers: new HttpHeaders().set("typeImage", "cinRecto")
};
const httpOptions3 = {
  headers: new HttpHeaders().set("typeImage", "cinVerso")
};

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = true;
  errorMessage = '';

  selectedImage!: FileList;
  currentImageUpload!: File;

  selectedCinRecto!: FileList;
  currentRectoUpload!: File;

  selectedCinVerso!: FileList;
  currentVersoUpload!: File;
  

  constructor(private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
    const navb = document.querySelector('nav')
    if(window.location.pathname == '/signup') navb!.style.background = 'transparent';
  }

  selectImageProfil(event : any) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedImage = event.target.files;
    } else {
      alert('invalid format!');
    }
  }   

  selectCinRecto(event : any) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedCinRecto = event.target.files;
    } else {
      alert('invalid format!');
    }
  }  

  selectCinVerso(event : any) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedCinVerso = event.target.files;
    } else {
      alert('invalid format!');
    }
  }  
  onSubmit() {
    console.log(this.isSignUpFailed);
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;

           
              this.currentImageUpload = this.selectedImage.item(0) as File;
              this.currentRectoUpload = this.selectedCinRecto.item(0) as File;
              this.currentVersoUpload = this.selectedCinVerso.item(0) as File;
             
                this.authService.uploadFile(this.currentImageUpload , data.id , httpOptions).subscribe(
                  res => {

                    console.log("file upload successfully ");
                  },
                  err => {
                      console.log("error while uploading fie details");
                  }
              );

              this.authService.uploadFile(this.currentRectoUpload , data.id , httpOptions2).subscribe(
                res => {

                  console.log("file upload successfully ");
                },
                err => {
                    console.log("error while uploading fie details");
                }
            );

            this.authService.uploadFile(this.currentVersoUpload , data.id , httpOptions3).subscribe(
              res => {

                console.log("file upload successfully ");
              },
              err => {
                  console.log("error while uploading fie details");
              }
          );
          
        this.alertWithSuccess()
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  simpleAlert(){
    Swal.fire('Hello world!');
  }
  
  alertWithSuccess(){
    Swal.fire(
    {
      title: 'Inscription effectuée',
      text: 'You submitted succesfully!',
      icon: 'success',
      html: '<div class="text-center">Connectez-vous ici : <a href="/login">Page de connexion</a></div>'
      
    }
    )
  }
  
  confirmBox(){
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
