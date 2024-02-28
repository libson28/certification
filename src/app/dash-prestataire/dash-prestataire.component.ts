import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import { publication } from '../MODELS/publier.model';
import Swal from 'sweetalert2';
import { PublicationProfilService } from '../Services/publicationService/publication-profil.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/userServices/user.service';
import { ClientService } from '../Services/User/client.service';

@Component({
  selector: 'app-dash-prestataire',
  templateUrl: './dash-prestataire.component.html',
  styleUrls: ['./dash-prestataire.component.css'],
})
export class DashPrestataireComponent {
  public categories: any[] = [];
  metier: string = '';
  presentation: string = '';
  motivation: string = '';
  experience: string = '';
  competence: string = '';
  image: any;
  categorie: string = '';
  public profiles: any[] = [];
  listePrestataire: any;
  userConnect: any;
  selectedPublication: any;
  nomClient: string = '';
  prenomClient: string = '';
  emailClient: string = '';

  constructor(
    private auth: AuthserviceService,
    private publicationProfil: PublicationProfilService,
    private route: Router,
    private userService: UserService,
    private clientService: ClientService
  ) {}

  userid: any;
  ngOnInit(): void {
    this.getCategories();
    this.getlistePrestaService();
    this.getListePrestataire();

    let useronline = JSON.parse(localStorage.getItem('userOnline') || '');
    this.userid = useronline.user.id;
    this.userConnect = useronline.user;
    console.log('voici le user connecter', useronline);
    console.log('voici lid du user connecter', this.userid);

    this.clientService.clientInfo$.subscribe((clientInfo) => {
      if (clientInfo) {
        this.nomClient = clientInfo.nom;
        this.prenomClient = clientInfo.prenom;
        this.emailClient = clientInfo.email;
      }
    });
  }

  getCategories() {
    this.auth.get('listeCategorie', (reponse: any) => {
      this.categories = reponse;
      console.log(reponse);
    });
  }

  // charger  les informations dans le formulaire
  PublicationObject: any;
  loadPublicationInfo(publication: any) {
    // alert(publication.metier);
    this.metier = publication.metier;
    this.presentation = publication.presentation;
    this.categorie = publication.categorie_id;
    this.motivation = publication.motivation;
    this.experience = publication.experience;
    this.competence = publication.competence;
    this.PublicationObject = publication;
    console.log('bonjour:', this.PublicationObject);
  }

  //modification
  updateProfil() {
    const formData = new FormData();
    formData.append('nomService', this.metier);
    formData.append('presentation', this.presentation);
    formData.append('categorie_id', this.categorie);
    formData.append('motivation', this.motivation);
    formData.append('experience', this.experience);
    formData.append('competence', this.competence);
    formData.append('image', this.image);
    // if (this.image) {
    // }

    const profilId = this.tabPrestataireFilter[0].$prestataire_service_id;
    console.log('profil id :', profilId);

    this.publicationProfil.modifyProfil(profilId, formData).subscribe(
      (response) => {
        Swal.fire('Succès', 'Profil mis à jour avec succès.', 'success');
        console.log('Profil mis à jour avec succès:', response);
        this.getListePrestataire();
        // Réinitialiser les valeurs des champs après la mise à jour réussie
        this.metier = '';
        this.presentation = '';
        this.categorie = '';
        this.motivation = '';
        this.experience = '';
        this.competence = '';
        this.image = null;
      },
      (error) => {
        Swal.fire(
          'Erreur',
          'Erreur lors de la mise à jour du profil. Veuillez réessayer.',
          'error'
        );
        console.error('Erreur de mise à jour du profil:', error);
      }
    );
  }

  // fin modification

  // upload de l'image de profil
  getFile(event: any) {
    console.warn(event.target.files[0]);
    this.image = event.target.files[0] as File;
  }

  ajoutProfil() {
    alert(this.categorie);
    let formData = new FormData();
    formData.append('image', this.image);
    formData.append('nomService', this.metier);
    formData.append('presentation', this.presentation);
    formData.append('categorie_id', this.categorie);
    formData.append('motivation', this.motivation);
    formData.append('experience', this.experience);
    formData.append('competence', this.competence);

    const publicationId = this.selectedPublication.id;

    this.publicationProfil.ajoutProfil(formData).subscribe(
      (response) => {
        Swal.fire('Succès', 'Profil publié avec succès.', 'success');
        console.log('profil ajoutée avec succes:', response);

        // Réinitialiser les valeurs des champs après l'ajout réussi
        this.metier = '';
        this.presentation = '';
        this.categorie = '';
        this.motivation = '';
        this.experience = '';
        this.competence = '';
        this.image = null;
      },
      (error) => {
        Swal.fire(
          'Erreur',
          'Erreur lors de la publication. Veuillez réessayer.',
          'error'
        );
        console.error("Erreur d'ajout:", error);
      }
    );
  }

  getlistePrestaService() {
    this.auth.get('listePrestaService', (reponse: any) => {
      this.profiles = reponse;
      this.listePrestataire = reponse;
      console.log(
        'voici la publication des prestataires',
        this.listePrestataire
      );
    });
  }

  listeprestataire: any;
  tabPrestataireFilter: any;

  getListePrestataire() {
    this.auth.get('listePrestaService', (reponse: any) => {
      this.listeprestataire = reponse;
      this.tabPrestataireFilter = this.listePrestataire.filter(
        (prestataire: any) => prestataire.id === this.userid
      );
      console.log(
        'la liste de tous les prestataire',
        this.tabPrestataireFilter[0].$prestataire_service_id
      );
    });
  }

  // deconnexion
  logout(): void {
    localStorage.removeItem('userOnline');
    localStorage.setItem('isAdmin', JSON.stringify(false));
    localStorage.setItem('isClient', JSON.stringify(false));
    localStorage.setItem('isPrestataire', JSON.stringify(false));
    this.route.navigate(['/']);
  }
}
