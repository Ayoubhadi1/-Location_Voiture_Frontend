
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent , EMPTY, throwError} from 'rxjs';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

//@Injectable({ providedIn: 'root'})

export class DataService {

  constructor(private url : string , private http : HttpClient) { }

  getAll(){
    return this.http.get(this.url)
                .pipe( catchError(this.handleError) );
  }

  create(resource: any){
    return this.http.post( this.url , resource)
                .pipe( catchError(this.handleError) );
  }

  update(resource: any){
    return this.http.put(this.url+'/'+ resource.id , resource)
                .pipe( catchError(this.handleError) );
  }

  delete(resource: any){
    return this.http.delete(this.url+'/'+ resource.id)
                .pipe( catchError(this.handleError) );      //c'est pas la penne de mettre les parametres de handleError

  }

  private handleError(error : HttpErrorResponse){
    switch (error.status) {
      case 404: {
          return `Not Found: ${error.message}`;
      }
      case 403: {
          return `Access Denied: ${error.message}`;
      }
      case 500: {
          return `Internal Server Error: ${error.message}`;
      }
      default: {
          return `Unknown Server Error: ${error.message}`;
      }

  }
  }
}
