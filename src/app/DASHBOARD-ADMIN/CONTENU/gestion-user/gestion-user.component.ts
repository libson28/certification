import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css'],
})
export class GestionUserComponent {
  pageActuelle: number | any;
  itemsParPage:number |any;
  // Pagination
  // Méthode pour déterminer les articles à afficher sur la page actuelle
  getItemsPage(): any[] {
    if (Array.isArray(this.tabMessagesFilter)) {
      const indexDebut = (this.pageActuelle - 1) * this.itemsParPage;
      const indexFin = indexDebut + this.itemsParPage;
      return this.tabMessagesFilter.slice(indexDebut, indexFin);
    } else {
      return [];
    }
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(
      this.tabMessagesFilter.length / this.itemsParPage
    );
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.tabMessagesFilter.length / this.itemsParPage);
  }

  tabMessages: any[] = [];
  tabMessagesFilter: any[] = [];
  filterValue: string = '';

  // Methode de recherche automatique pour professeur
  onSearch() {
    // Recherche se fait selon le nom ou le prenom
    this.tabMessagesFilter = this.tabMessages.filter((elt: any) =>
      elt?.nomComplet.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }
}
