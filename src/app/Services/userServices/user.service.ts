import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public urlBase = 'http://127.0.0.1:8000/api/';
  userData$: any;

  constructor(private http: HttpClient) {}

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
