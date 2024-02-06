import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  prenom: string = '';
  nom: string = '';
  email: string = '';
  password: string = '';
  profil: string = '';
  tel: string = '';
  adress: string = '';

  constructor(private serviceAuth: AuthserviceService) {}

  register() {
    // Vérification des champs vides
    if (
      this.prenom === '' ||
      this.nom === '' ||
      this.email === '' ||
      this.password === '' ||
      this.tel === '' ||
      this.adress === '' ||
      this.profil === ''
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Champs vides',
        text: 'Veuillez remplir tous les champs du formulaire.',
      });
      return; // Arrêter l'exécution si les champs sont vides
    }

    // Vérification de l'email valide
    if (!this.validateEmail(this.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Email non valide',
        text: 'Veuillez saisir une adresse email valide.',
      });
      return; // Arrêter l'exécution si l'email n'est pas valide
    }

    const user = {
      prenom: this.prenom,
      nom: this.nom,
      email: this.email,
      password: this.password,
      tel: this.tel,
      role: this.profil,
      adress: this.adress,
    };

    // Appeler la méthode d'inscription du service
    this.serviceAuth.register(user).subscribe((response: any) => {
      // Gérer la réponse du backend (par exemple, afficher un message de succès)
      console.log(response);
      Swal.fire({
        icon: 'success',
        title: 'Inscription réussie',
        text: 'Votre compte a été créé avec succès.',
      });
    });
  }

  // Fonction pour valider l'email
  private validateEmail(email: string): boolean {
    // Vous pouvez utiliser une expression régulière ou une autre méthode de validation
    // Cela est un exemple simple pour vérifier s'il contient un "@" et au moins un "."
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
