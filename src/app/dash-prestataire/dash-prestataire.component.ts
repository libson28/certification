import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import { publication } from '../MODELS/publier.model';
import Swal from 'sweetalert2';
import { PublicationProfilService } from '../Services/publicationService/publication-profil.service';
import { Router } from '@angular/router';
import { UserService } from '../Services/userServices/user.service';

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
  contactedClients: any[] = [];

  prenom: string = '';
  nom: string = '';
  tel: string = '';

  profilPublie: boolean = false;

  constructor(
    private auth: AuthserviceService,
    private publicationProfil: PublicationProfilService,
    private route: Router,
    private userService: AuthserviceService,
    private userInfos: PublicationProfilService
  ) {}

  userid: any;
  ngOnInit(): void {

    const contactedClientsString = localStorage.getItem('contactedClients');

    if (contactedClientsString) {
      this.contactedClients = JSON.parse(contactedClientsString);
    }

    this.getCategories();
    this.getlistePrestaService();
    this.getListePrestataire();

    let useronline = JSON.parse(localStorage.getItem('userOnline') || '');
    this.userid = useronline.user.id;
    // this.userConnect = useronline.user;
    console.log('voici le user connecter', useronline);
    console.log('voici lid du user connecter', this.userid);

    this.getUser();
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
    // le user connecté
    this.getUser();
    console.log('utilisateur connecté:', this.userConnect);
    // alert(this.categorie);
    let formData = new FormData();
    formData.set('image', this.image);
    formData.set('nomService', this.metier);
    formData.set('presentation', this.presentation);
    formData.set('categorie_id', this.categorie);
    formData.set('motivation', this.motivation);
    formData.set('experience', this.experience);
    formData.set('competence', this.competence);
    formData.set('prestataire_id', this.userConnect.id);
    // console.log(this.image);
    // console.log(this.metier);
    // console.log(this.presentation);
    // console.log(this.competence);
    // console.log(this.experience);
    // console.log(this.motivation);
    // console.log(this.categorie);
    // console.log(this.userConnect.id);
    // console.log(formData);

    // const publicationId = this.selectedPublication.id;

    this.publicationProfil.testAjout(formData).subscribe(
      (reponse) => {
        Swal.fire('Succès', 'Profil publié avec succès.', 'success');
        console.warn('profil ajoutée avec succes:', reponse);

        // Réinitialiser les valeurs des champs après l'ajout réussi
        this.metier = '';
        this.presentation = '';
        this.categorie = '';
        this.motivation = '';
        this.experience = '';
        this.competence = '';
        this.image = null;
        this.profilPublie = true;
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

  getUser() {
    this.userService.profilUser().subscribe(
      (response) => {
        // console.log(response);
        this.userConnect = response;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  modifUser() {
    const user = {
      prenom: this.prenom,
      nom: this.nom,
      telephone: this.tel,
    };
    this.userInfos.modifUserConnect(this.userConnect.id, user).subscribe(
      (reponse) => {
        console.log(reponse);
      },
      (err) => {
        console.log(err);
      }
    );
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
