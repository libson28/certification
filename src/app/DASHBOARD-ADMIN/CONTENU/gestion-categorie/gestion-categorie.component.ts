import { Component } from '@angular/core';
import { CategorieService } from '../../../Services/catégorieService/categorie.service'; // Adjust the import
import { Category } from '../../../MODELS/categorie.model';
@Component({
  selector: 'app-gestion-categorie',
  templateUrl: './gestion-categorie.component.html',
  styleUrls: ['./gestion-categorie.component.css'],
})
export class GestionCategorieComponent {
  libelleCategorie: string = '';
  description: string = '';

  constructor(private categorieService: CategorieService) {}

  onSubmit() {
    const newCategory: Category = {
      libelleCategorie: this.libelleCategorie,
      description: this.description,
    };

    this.categorieService.addCategory(newCategory).subscribe(
      (response) => {
        console.log('Category added successfully:', response);
        // You can add further logic or redirect the user as needed
      },
      (error) => {
        console.error('Error adding category:', error);
        // Handle the error appropriately, e.g., show a user-friendly message
      }
    );
  }
}
