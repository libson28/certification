import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import { publication } from '../MODELS/publier.model';
import Swal from 'sweetalert2';
import { PublicationProfilService } from '../Services/publicationService/publication-profil.service';
import { Router } from '@angular/router';

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
  userConnect:any;

  constructor(
    private auth: AuthserviceService,
    private publicationProfil: PublicationProfilService,
    private route: Router // private get
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
  }

  getCategories() {
    this.auth.get('listeCategorie', (reponse: any) => {
      this.categories = reponse;
      console.log(reponse);
    });
  }

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
      console.log('la liste de tous les prestataire', reponse);
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
