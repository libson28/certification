import { Component } from '@angular/core';
import { ContactezNousService } from './../Services/gestionMessage/contactez-nous.service';
import { contact } from '../MODELS/contactez-nous.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  email: string = '';
  message: string = '';

  constructor(private ContactezNousService: ContactezNousService) {}

  onSubmit() {
    if (!this.isValidEmail()) {
      Swal.fire('Erreur', 'Veuillez entrer une adresse e-mail valide', 'error');
      return;
    }

    const newMessage: contact = {
      email: this.email,
      message: this.message,
    };

    this.ContactezNousService.addMails(newMessage).subscribe(
      (response) => {
        console.log('Message envoyé avec succès :', response);
        Swal.fire('Succès', 'Message envoyé avec succès', 'success');
         this.email = '';
         this.message = '';
      },
      (error) => {
        console.error("Erreur dans l'envoi du message:", error);
        Swal.fire('Erreur', "Erreur dans l'envoi du message", 'error');
      }
    );

  }

  private isValidEmail(): boolean {
    // Utilisation d'une expression régulière simple pour la validation de l'e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
