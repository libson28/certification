import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-espace-ouvrier',
  templateUrl: './espace-ouvrier.component.html',
  styleUrls: ['./espace-ouvrier.component.css'],
})
export class EspaceOuvrierComponent {
  public profiles: any[] = [];
  listePrestataire: any[] = [];
  UserOnline: any;
  connectedClient: any;

  constructor(
    private auth: AuthserviceService,
    private route: ActivatedRoute,
  ) {}

  prestataire_id: any;
  userfound: any;

  ngOnInit(): void {
    const userOnline = JSON.parse(localStorage.getItem('userOnline') || '{}');

    // Verifier si le role est client
    if (userOnline && userOnline.user && userOnline.user.role === 'client') {
      this.connectedClient = {
        nom: userOnline.user.nom,
        prenom: userOnline.user.prenom,
        email: userOnline.user.email,
      };
      console.log('connectedClient');
    }

    const id = this.route.snapshot.paramMap.get('id');
    this.prestataire_id = id;
    this.getlistePrestaService();
  }

  onContactUsClick(): void {
    // Access this.connectedClient to get the client information
    if (this.connectedClient) {
      // Call a function or service to handle the "Contactez-nous" action
      this.handleContactUsAction(this.connectedClient);
    } else {
      console.log('Client information not available.');
    }
  }

  handleContactUsAction(clientDetails: any): void {
    // Retrieve existing contactedClients array from localStorage
    const contactedClientsString = localStorage.getItem('contactedClients');
    let contactedClients: any[] = [];

    if (contactedClientsString) {
      contactedClients = JSON.parse(contactedClientsString);
    }

    const currentDate = new Date();
    clientDetails.date = currentDate.toLocaleDateString(); // Add the date property

    // Append the new clientDetails to the array
    contactedClients.push(clientDetails);

    // Store the updated array in localStorage
    localStorage.setItem('contactedClients', JSON.stringify(contactedClients));

    // Add your logic here to handle the "Contactez-nous" action
  }

  // userfound: any;

  getlistePrestaService() {
    this.auth.get('listePrestaService', (reponse: any) => {
      this.profiles = reponse;
      this.listePrestataire = reponse;
      console.log('voici la réponse des prestataires', this.listePrestataire);

      let founduser = this.listePrestataire.find(
        (prestataire) => prestataire.id == this.prestataire_id
      );
      if (founduser) {
        this.userfound = founduser;
        console.log('utilisateur trouvé', this.userfound);
      } else {
        console.log('utilisateur non trouvé');
      }
    });
  }

  // detailPrestataire() {
  //   let id = this.prestataire_id;
  //   let founduser = this.listePrestataire.find((prestataire) => prestataire.id === id);
  //   if (founduser) {
  //     this.userfound = founduser;
  //     console.log('utilisateur trouve', this.userfound);
  //   } else {
  //     console.log('utilisateur non trouver');
  //   }
  // }
}
