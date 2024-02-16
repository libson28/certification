import { ContactezNousService } from './../../../Services/gestionMessage/contactez-nous.service';
import { Component } from '@angular/core';
import { contact } from 'src/app/MODELS/contactez-nous.model';
// import { ContactezNousService } from 'src/app/Services/gestionMessage/contactez-nous.service';

@Component({
  selector: 'app-gestion-message',
  templateUrl: './gestion-message.component.html',
  styleUrls: ['./gestion-message.component.css'],
})
export class GestionMessageComponent {
  public informations: any[] = [];

  constructor(private contacteznous: ContactezNousService) {}
  // constructor(private informationsService: InformationsService) {}

  ngOnInit(): void {
    this.getMails();
  }

  getMails() {
    this.contacteznous.get('listeMail', (reponse: any) => {
      this.informations = reponse;
      console.log(reponse);
    });
  }

  itemsParPage = 4;
  pageActuelle = 1;

  // Pagination

  getItemsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.itemsParPage;
    const indexFin = indexDebut + this.itemsParPage;
    return this.informations.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.informations.length / this.itemsParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.informations.length / this.itemsParPage);
  }
}
