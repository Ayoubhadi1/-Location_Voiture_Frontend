import { Router } from '@angular/router';
import {  AppComponent } from './../app.component';
import { UserService } from './../services/user.service';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import Swal from 'sweetalert2';

const httpOptions = {
  headers: new HttpHeaders().set("typeImage", "agrement")
};

@Component({
  selector: 'app-demander-compte-agencier',
  templateUrl: './demander-compte-agencier.component.html',
  styleUrls: ['./demander-compte-agencier.component.css']
})
export class DemanderCompteAgencierComponent implements OnInit {
  selectedImage!: FileList;
  currentImageUpload!: File;
  agrement : any ;
  agrementUploaded : any;
  currentUser: any;

  constructor( private authService : AuthService , private tokenStorageService : TokenStorageService , private userService : UserService , private router : Router) { 
    
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    if(sessionStorage.getItem('agrementEnvovoye') === 'true') this.agrementUploaded = true ;
    else if(sessionStorage.getItem('agrementEnvovoye') === 'false') this.agrementUploaded = false;
    const navb = document.querySelector('nav')
    if(window.location.pathname == '/demanderCompteAgencier') navb!.style.background = '#f0eded';

    //File Upload 
function ekUpload(){
  function Init() {

    console.log("Upload Initialised");

    var fileSelect:any    = document.getElementById('file-upload'),
        fileDrag:any      = document.getElementById('file-drag'),
        submitButton:any  = document.getElementById('submit-button');

    

    if(fileSelect)fileSelect.addEventListener('change', fileSelectHandler, false);

    // Is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
      // File Drop
      if(fileDrag){
        fileDrag.addEventListener('dragover', fileDragHover, false);
        fileDrag.addEventListener('dragleave', fileDragHover, false);
        fileDrag.addEventListener('drop', fileSelectHandler, false);
      }
    }
  }

  function fileDragHover(e:any) {
    var fileDrag : any = document.getElementById('file-drag');

    e.stopPropagation();
    e.preventDefault();

    fileDrag.className = (e.type === 'dragover' ? 'hover' : 'modal-body file-upload');
  }

  function fileSelectHandler(e:any) {
    // Fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    // Cancel event and hover styling
    fileDragHover(e);

    // Process all File objects
    for (var i = 0, f; f = files[i]; i++) {
      parseFile(f);
      uploadFile(f);
    }
  }

  // Output
  function output(msg:any) {
    // Response
    var m:any = document.getElementById('messages');
    m.innerHTML = msg;
  }

  function parseFile(file:any) {

    console.log(file.name);
    output(
      '<strong>' + encodeURI(file.name) + '</strong>'
    );
    
    // var fileType = file.type;
    // console.log(fileType);
    var imageName = file.name;

    var isGood = (/\.(?=gif|jpg|png|jpeg)/gi).test(imageName);
    if (isGood) {
      document.getElementById('start')!.classList.add("hidden");
      document.getElementById('response')!.classList.remove("hidden");
      document.getElementById('notimage')!.classList.add("hidden");
      // Thumbnail Preview
      document.getElementById('file-image')!.classList.remove("hidden");
      (<HTMLInputElement>document.getElementById('file-image'))!.src = URL.createObjectURL(file);
    }
    else {
      document.getElementById('file-image')!.classList.add("hidden");
      document.getElementById('notimage')!.classList.remove("hidden");
      document.getElementById('start')!.classList.remove("hidden");
      document.getElementById('response')!.classList.add("hidden");
      //(<HTMLInputElement>document.getElementById("file-upload-form"))!.reset();
    }
  }

  function setProgressMaxValue(e:any) {
    var pBar : any = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.max = e.total;
    }
  }

  function updateFileProgress(e : any) {
    var pBar: any = document.getElementById('file-progress');

    if (e.lengthComputable) {
      pBar.value = e.loaded;
    }
  }

  function uploadFile(file : any) {

    var xhr = new XMLHttpRequest(),
      fileInput = document.getElementById('class-roster-file'),
      pBar : any = document.getElementById('file-progress'),
      fileSizeLimit = 1024; // In MB
      
  }

  // Check for the various File API support.
  if (window.File && window.FileList && window.FileReader) {
    Init();
  } else {
    document.getElementById('file-drag')!.style.display = 'none';
  }
    
  }
  ekUpload();
  // END File Upload
}

selectAgrement(event : any) {
  const file = event.target.files.item(0);

  if (file.type.match('image.*')) {
    this.selectedImage = event.target.files;
  } else {
    alert('invalid format!');
  }
}

onSubmit(){
  this.currentImageUpload = this.selectedImage.item(0) as File;
                this.authService.uploadFile(this.currentImageUpload , this.currentUser.id , httpOptions).subscribe(
                  res => {
                    console.log("file upload successfully ");
                    this.alertWithSuccess();
                  },
                  err => {
                      console.log("error while uploading fie details");
                  }
              );
}



alertWithSuccess(){
  Swal.fire(
  {
    title: 'Agrement envoyé avec succès',
    text: 'You submitted succesfully!',
    icon: 'success'    
  }
  ).then(function() {
    //window.location.reload();
    window.location.href = '/home';
});
}

agrementEnvoye(){
  let files = this.currentUser.files;
  files.forEach((file : any) => {
    if(file!.typeImage === "AGREMENT"){
      this.agrementUploaded = true;
      sessionStorage.setItem('agrementEnvovoye', this.agrementUploaded);
      return;
    }
  });
  if(this.agrementUploaded == true)return;
  this.agrementUploaded = false;
  sessionStorage.setItem('agrementEnvovoye', this.agrementUploaded);

}


}
