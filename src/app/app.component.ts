import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  //  const btn = document.querySelector('#d')
  //  const header = document.querySelector('h4')
  //  header?.setAttribute('class' , 'abc')

  $(document).ready(function(){
    $(".wish-icon i").click(function(){
      $(this).toggleClass("fa-heart fa-heart-o");
    });
  });	
   
  }
  title = 'LocationVoitureFrontend';
}
