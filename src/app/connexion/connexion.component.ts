import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent implements OnInit {
  emailLogin: any = '';
  PasswordLogin: any = '';
  isEmailDirty: boolean = false;
  isPasswordDirty: boolean = false;

  constructor(private serviceAuth: AuthserviceService, private route: Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isAdmin')) {
      localStorage.setItem('isAdmin', JSON.stringify(false));
    }

    if (!localStorage.getItem('isPrestataire')) {
      localStorage.setItem('isPrestataire', JSON.stringify(false));
    }

    if (!localStorage.getItem('isClient')) {
      localStorage.setItem('isClient', JSON.stringify(false));
    }

    if (!localStorage.getItem('userOnline')) {
      localStorage.setItem('userOnline', JSON.stringify(''));
    }
  }

  // validation automatique des champs

  isEmailValid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.emailLogin);
  }

  isPasswordValid(): boolean {
    // Vérification de la longueur du mot de passe et l'absence d'espaces
    return this.PasswordLogin.length >= 6 && !/\s/.test(this.PasswordLogin);
  }

  setEmailDirty() {
    this.isEmailDirty = true;
    if (this.emailLogin === '') {
      this.isEmailDirty = false;
    }
  }

  setPasswordDirty() {
    this.isPasswordDirty = true;
    if (this.PasswordLogin === '') {
      this.isPasswordDirty = false;
    }
  }

  isFormValid(): boolean {
    return this.isEmailValid() && this.isPasswordValid();
  }

  login() {
    console.log('ça marche');
    if (this.emailLogin == '' || this.PasswordLogin == '') {
      Swal.fire({
        icon: 'error',
        title: 'Veuillez remplir tous les champs',
        position: 'center',
        showConfirmButton: true,
      });
    } else {
      // Validation du format de l'email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.emailLogin)) {
        // Swal.fire({
        //   icon: 'error',
        //   title: "Format d'email invalide",
        //   position: 'center',
        //   showConfirmButton: true,
        // });
        return;
      }

      // Validation de l'espacement du mot de passe
      if (this.PasswordLogin.length < 6) {
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Le mot de passe doit contenir au moins 6 caractères',
        //   position: 'center',
        //   showConfirmButton: true,
        // });
        return;
      }

      let email = this.emailLogin;
      let Password = this.PasswordLogin;

      this.serviceAuth.login(
        { email: email, password: Password },
        (reponse: any) => {
          console.log(reponse);
          console.log(reponse.authorization.token);

          if (
            reponse.user.role === 'admin' ||
            reponse.user.role === 'client' ||
            reponse.user.role === 'prestataire'
          ) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Bienvenue Connecté avec succès',
              showConfirmButton: false,
              timer: 1500,
            });

            // stocker nos infos de la requête dans notre localstorage
            localStorage.setItem('userOnline', JSON.stringify(reponse));

            // récupérer le userConnecté
            const userOnline = JSON.parse(
              localStorage.getItem('userOnline') || ''
            );

            if (reponse.user.role === 'admin') {
              localStorage.setItem('isAdmin', JSON.stringify(true));
              localStorage.setItem('isClient', JSON.stringify(false));
              localStorage.setItem('isPrestataire', JSON.stringify(false));
              this.route.navigate(['/statistique']);
            } else if (reponse.user.role === 'prestataire') {
              localStorage.setItem('isAdmin', JSON.stringify(false));
              localStorage.setItem('isClient', JSON.stringify(false));
              localStorage.setItem('isPrestataire', JSON.stringify(true));
              this.route.navigate(['/prestataire']);
            } else {
              localStorage.setItem('isAdmin', JSON.stringify(false));
              localStorage.setItem('isClient', JSON.stringify(true));
              localStorage.setItem('isPrestataire', JSON.stringify(false));
              this.route.navigate(['/']);
            }
          }
        }
      );
    }
  }
}
