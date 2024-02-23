import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  ConfPassword: string = '';
  profil: string = '';
  tel: string = '';
  adress: string = '';
  fieldDirty: { [key: string]: boolean } = {};

  constructor(
    private serviceAuth: AuthserviceService,
    private router: Router
  ) {}

  // Validation des champs au saisi
  isFieldDirty(fieldName: string): boolean {
    return this.fieldDirty[fieldName] || false;
  }

  setFieldDirty(fieldName: string): void {
    this.fieldDirty[fieldName] = true;

    // Reset fieldDirty flag when the corresponding field is empty
    if ((this as any)[fieldName] === '') {
      this.fieldDirty[fieldName] = false;
    }
  }

  isFieldDirtyz(fieldName: string): boolean {
    if (fieldName === 'ConfPassword') {
      return this.fieldDirty[fieldName] || false;
    }

    return this.fieldDirty[fieldName] || false;
  }

  SetFieldDirty(fieldName: string): void {
    if (fieldName === 'ConfPassword') {
      this.fieldDirty[fieldName] = true;
    } else {
      this.fieldDirty[fieldName] = true;

      // Reset fieldDirty flag when the corresponding field is empty
      if ((this as any)[fieldName] === '') {
        this.fieldDirty[fieldName] = false;
      }
    }
  }

  // ------------

  // ----------

  isFieldValid(fieldName: string): boolean {
    switch (fieldName) {
      case 'prenom':
        return this.prenom.trim().length >= 2;
      case 'nom':
        return this.nom.trim().length >= 2;
      case 'email':
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(this.email);
      case 'password':
        return this.password.length >= 6 && !/\s/.test(this.password);
      case 'ConfPassword':
        return this.password === this.ConfPassword;
      case 'profil':
        return this.profil.trim().length > 0;
      case 'tel':
        const validPrefixes = ['77', '78', '75', '76', '70'];
        const isValidPrefix = validPrefixes.some((prefix) =>
          this.tel.trim().startsWith(prefix)
        );
        return /^\d{9}$/.test(this.tel.trim()) && isValidPrefix;
      case 'adress':
        return this.adress.trim().length > 0;
      default:
        return true;
    }
  }

  isFormValid(): boolean {
    return Object.keys(this.fieldDirty).every((fieldName) =>
      this.isFieldValid(fieldName)
    );
  }

  // fin validation
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
      return; // Arrêter l'exécution si les champs sont vides
    }

    // Vérification de l'email valide
    if (!this.validateEmail(this.email)) {
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
      console.log(response);
      this.showSuccessAlert(
        'Inscription réussie',
        'Votre compte a été créé avec succès.'
      );
      this.router.navigate(['/login']);
    });
  }

  // Fonction pour valider l'email
  private validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // Afficher une alerte de succès avec SweetAlert
  private showSuccessAlert(title: string, text: string): void {
    Swal.fire({
      icon: 'success',
      title: title,
      text: text,
    });
  }
}
