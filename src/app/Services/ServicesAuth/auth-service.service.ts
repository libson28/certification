import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { url } from './url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  isLoggedIn(): boolean {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  public urlBase = 'http://127.0.0.1:8000/api/';

  login(user: any, onSuccess: Function) {
    return this.http
      .post(`${url}login`, user)
      .subscribe((reponse: any) => onSuccess(reponse));
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.urlBase}register`, user);
  }

  addCategorie(PublierProfil: any): Observable<any> {
    return this.http.post(`${this.urlBase}ajouterCategorie`, PublierProfil);
  }


  get(path: string, onSuccess: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer' +
          JSON.parse(localStorage.getItem('onlineUser') ?? '{}').token,
      }),
    };
    this.http
      .get(this.urlBase + path, httpOptions)
      .subscribe((reponse: any) => onSuccess(reponse));
  }
}

