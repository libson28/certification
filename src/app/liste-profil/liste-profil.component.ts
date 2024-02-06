import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.css'],
})
export class ListeProfilComponent implements OnInit {
  public categories:any[] = [];
  constructor(private auth: AuthserviceService) {}
  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.auth.get('listeCategorie', (reponse: any) => {
      this.categories = reponse;
      console.log(reponse);
    });
  }
}
