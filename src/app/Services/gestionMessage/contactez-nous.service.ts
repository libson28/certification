import { contact } from './../../MODELS/contactez-nous.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactezNousService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  // ajout de message
  addMails(contact: contact): Observable<contact> {
    return this.http.post<contact>(`${this.apiUrl}ajoutMail`, contact);
  }

  envoyerMail(contact: contact): Observable<contact> {
    return this.http.post<contact>(`${this.apiUrl}ajoutMail`, contact);
  }



  // recuperation des message
  get(path: string, onSuccess: Function) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization:
          'Bearer' +
          JSON.parse(localStorage.getItem('onlineUser') ?? '{}').token,
      }),
    };
    this.http
      .get(this.apiUrl + path, httpOptions)
      .subscribe((reponse: any) => onSuccess(reponse));
  }
}

;
