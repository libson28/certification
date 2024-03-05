import { Component } from '@angular/core';
import { CategorieService } from '../../../Services/catégorieService/categorie.service'; // Adjust the import
import { Category } from '../../../MODELS/categorie.model';
import { AuthserviceService } from 'src/app/Services/ServicesAuth/auth-service.service';
import { url } from 'src/app/Services/ServicesAuth/url';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css'],
})
export class GestionCategorieComponent {
  libelleCategorie: string = '';
  description: string = '';
  selectedCategorie: any;

  constructor(
    private categorieService: CategorieService,
    private auth: AuthserviceService,
    private deleteCategpry: CategorieService,
  ) {}

  onSubmit() {
    const newCategory: Category = {
      libelleCategorie: this.libelleCategorie,
      description: this.description,
    };

    this.categorieService.addCategory(newCategory).subscribe(
      (response: any) => {
        console.log('Categorie ajoutée avec succes:', response);
        Swal.fire({
          icon: 'success',
          title: '',
          text: response.message,
        });
        this.getCategories();
      },
      (error) => {
        console.error('Error adding category:', error);
      }
    );
  }

  // Methode pour supprimer une categorie
  supprimerTrajet(categoryId: any) {
    Swal.fire({
      title: 'Etes vous sur',
      text: 'voulez vous supprimer!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#FA7436',
      cancelButtonColor: '#FA0436',
      confirmButtonText: 'OUI !!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteCategpry
          .deleteCategory(categoryId)
          .subscribe((resp: any) => {
            console.log(resp);
            this.getCategories();
          });
      }
    });
  }

  public categories: any[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.auth.get('listeCategorie', (reponse: any) => {
      this.categories = reponse;
      console.log(reponse);
    });
  }

  // Charger les informations d'une catégorie
  categorieObject: any;
  getInfoCategorie(item: any) {
    this.libelleCategorie = item.libelleCategorie;
    this.description = item.description;

    this.categorieObject = item;

    console.log(this.categorieObject);
  }

  updateCategorie() {
    this.categorieObject.libelleCategorie = this.libelleCategorie;
    this.categorieObject.description = this.description;

    console.log(this.categorieObject);

    this.categorieService
      .updateCategory(this.categorieObject.id, this.categorieObject)
      .subscribe((response: any) => {
        console.log(response);
        Swal.fire({
          icon: 'success',
          title: '',
          text: response.message,
        });
        this.getCategories();
      });
  }
  itemsParPage = 4;
  pageActuelle = 1;

  // Pagination

  getItemsPage(): any[] {
    const indexDebut = (this.pageActuelle - 1) * this.itemsParPage;
    const indexFin = indexDebut + this.itemsParPage;
    return this.categories.slice(indexDebut, indexFin);
  }

  // Méthode pour générer la liste des pages
  get pages(): number[] {
    const totalPages = Math.ceil(this.categories.length / this.itemsParPage);
    return Array(totalPages)
      .fill(0)
      .map((_, index) => index + 1);
  }

  // Méthode pour obtenir le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.categories.length / this.itemsParPage);
  }


}
