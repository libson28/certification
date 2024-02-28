import { Component } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/User/user.service'

@Component({
  selector: 'app-espace-ouvrier',
  templateUrl: './espace-ouvrier.component.html',
  styleUrls: ['./espace-ouvrier.component.css'],
})
export class EspaceOuvrierComponent {
  public profiles: any[] = [];
  listePrestataire: any[] = [];
  UserOnline: any;
  ouvrier: any;

  constructor(
    private auth: AuthserviceService,
    private route: ActivatedRoute,
    private userService: UserService,
    
  ) {}

  prestataire_id: any;
  userfound: any;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.prestataire_id = id;
    this.getlistePrestaService();
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
