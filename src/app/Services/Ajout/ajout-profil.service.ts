import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AjoutProfilService {
  // Remplacez 'BASE_API_URL' par l'URL de votre API Laravel
  public urlBase = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}
  AddProfil(id: any, newData: any): Observable<any> {
    const url = `${this.urlBase}/modifP/${id}`;
    return this.http.post(id, newData);
  }
}
