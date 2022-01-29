import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8082/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials : any): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user :any): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password,
      nom: user.nom,
      prenom: user.prenom,
      telephone:user.telephone,
      image:user.image,
      adresse:user.adresse,
      ville:user.ville,
      pays:user.pays
    }, httpOptions);
  }

  uploadFile( file: File , id : number ) : Observable<any>
  {
    let url = AUTH_API + "uploadImage/" + id ;

    const formdata: FormData = new FormData();
  
    formdata.append('file', file);
 
    return this.http.post(url , formdata);
  }
}
