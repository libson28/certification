import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';

@Component({
  selector: 'app-dash-prestataire',
  templateUrl: './dash-prestataire.component.html',
  styleUrls: ['./dash-prestataire.component.css'],
})
export class DashPrestataireComponent {
  public categories: any[] = [];
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
