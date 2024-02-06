// categorie.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../MODELS/categorie.model';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) {}

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(
      `${this.apiUrl}ajouterCategorie`,
      category
    );
  }
}
