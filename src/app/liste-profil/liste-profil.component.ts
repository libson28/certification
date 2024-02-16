import { CategorieService } from './../Services/catégorieService/categorie.service';
import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.css'],
})
export class ListeProfilComponent implements OnInit {
  public categories: any[] = [];
  public profiles: any[] = [];

  boutonActif = 0;

  constructor(private auth: AuthserviceService, private route: Router) {}
  ngOnInit(): void {
    this.getCategories();
    this.getlistePrestaService();
    this.tabProfileFilter = this.profiles;
  }

  getCategories() {
    this.auth.get('listeCategorie', (reponse: any) => {
      this.categories = reponse;
      // console.log(reponse);
    });
  }

  getlistePrestaService() {
    this.auth.get('listePrestaService', (reponse: any) => {
      this.profiles = reponse;
      // console.log('reponse prestataire', reponse);
    });
  }

  filterValue: any;
  userfound: any;
  detailPrestataire(id: any) {
    // console.log('detailprestaire', id);

    let founduser = this.profiles.find((prestataire) => prestataire.id === id);
    if (founduser) {
      this.userfound = founduser;
      // console.log('utilisateur trouve', this.userfound);
    } else {
      // console.log('utilisateur non trouver');
    }
  }

  getProfileByCategorie(id: any) {
    if (id == 'tout') {
      this.auth.get('listePrestaService', (reponse: any) => {
        console.warn(reponse);
        this.profiles = reponse;
        this.tabProfileFilter = this.profiles;
      });
    } else {
      this.auth.get('affichPrestaire/' + id, (reponse: any) => {
        console.warn(reponse);
        this.profiles = reponse;
      });
    }
  }

  itemsParPage = 8;
  pageActuelle = 1;

  // Pagination

  getItemsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.itemsParPage;
    const indexFin = indexDebut + this.itemsParPage;
    return this.profiles.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.profiles.length / this.itemsParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.profiles.length / this.itemsParPage);
  }

  tabProfileFilter: any[] = [];
  // Methode de recherche automatique pour professeur
  onSearch() {
    // Recherche se fait selon le nom ou le prenom
    this.tabProfileFilter = this.profiles.filter((elt: any) =>
      elt?.prenom
        .toLowerCase()
        .includes(
          this.filterValue.toLowerCase() ||
            elt?.nom.toLowerCase().includes(this.filterValue.toLowerCase())
        )
    );
  }

  afficherDetailsPrestataire(): void {
    const utilisateurConnecte = localStorage.getItem('userOnline');
    if (!utilisateurConnecte) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: "Vous devez vous connecter d'abord!",
      });

      this.route.navigate(['/login']);
    } else {

    }
  }
}
