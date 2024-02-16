import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userServices/user.service';

interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  role: string;
  tel: number;
  adress: string;
  // Ajoutez d'autres propriétés si nécessaire
}

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.component.html',
  styleUrls: ['./gestion-user.component.css'],
})
export class GestionUserComponent implements OnInit {
  public users: User[] = [];
  tabUserFilter: any[] = [];
  tabUser: any;
  filterValue: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.get('getAllUsers', (response: User[]) => {
      this.users = response;
      console.log(response);
      this.tabUserFilter=this.users
    });
  }

  itemsParPage = 8;
  pageActuelle = 1;

  // Pagination

  getItemsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.itemsParPage;
    const indexFin = indexDebut + this.itemsParPage;
    return this.tabUserFilter.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.tabUserFilter.length / this.itemsParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.tabUserFilter.length / this.itemsParPage);
  }

  // Methode de recherche automatique pour professeur
  onSearch() {
    // Recherche se fait selon le nom ou le prenom
    this.tabUserFilter = this.users.filter((elt: any) =>
      elt?.prenom.toLowerCase().includes(this.filterValue.toLowerCase() || elt?.nom.toLowerCase().includes(this.filterValue.toLowerCase()))
    );
  }
}
