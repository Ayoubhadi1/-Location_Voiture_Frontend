import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const AUTH_API = 'http://localhost:8082/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  uploadAgrement( file: File , idUser : number , httpOption:any ) : Observable<any>
  {
    let url = AUTH_API + "uploadAgrement/" + idUser ;

    const formdata: FormData = new FormData();
  
    formdata.append('image', file);
 
    return this.http.post(url , formdata , httpOption);
  }

  agrementEnvoye(idUser:number) : Observable<any>{
    return this.http.get("http://localhost:8082/users/"+idUser+"/images")
  }
  agrementEnvoye2(idUser:number) : Observable<any>{
    return this.http.get(AUTH_API+"agrementEnvoye/"+idUser);
  }
}
