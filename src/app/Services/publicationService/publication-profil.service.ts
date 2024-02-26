// import { publication } from '../../MODELS/publier.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PublicationProfilService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  ajoutProfil(publier: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}ajoutPrestaService`, publier);
  }

  modifyProfil(publicationId: any, publier: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}modifPrestaService/${publicationId}`,
      publier
    );
  }
}
