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
  AuthService: any;

  constructor(private serviceAuth: AuthserviceService, private route: Router) {}

  ngOnInit(): void {}

  login() {
    console.log('ça marche');
    if (this.emailLogin == '' || this.PasswordLogin == '') {
      console.log('veuillez remplir les champs');
    } else {
      let email = this.emailLogin;
      let Password = this.PasswordLogin;

      this.serviceAuth.login(
        { email: email, password: Password },
        (reponse: any) => {
          console.log(reponse);
          console.log(reponse.authorization.token);

          if (reponse.user.role === 'admin') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: true,
            });

            // stocker notre les info de la requete dans notre localstorage
            localStorage.setItem('userOnline', JSON.stringify(reponse));


            //recuperer le userConnecter
            const userOnline = JSON.parse(
              localStorage.getItem('userOnline') || ''
            );
            this.route.navigate(['/statistique']);
          } else if (reponse.user.role === 'client') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Bienvenue Connecté avec succès',
              showConfirmButton: true,
            });
            //stocker notre les info de la requete dans notre localstorage
            localStorage.setItem('userOnline', JSON.stringify(reponse));

            //recuperer le userConnecter
            const userOnline = JSON.parse(
              localStorage.getItem('userOnline') || ''
            );
            this.route.navigate(['/']);
            console.log('vous êtes prestataire');
          } else if (reponse.user.role === 'prestataire') {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Bienvenue Connecté avec succès',
              showConfirmButton: true,
            });
            // stocker notre les info de la requete dans notre localstorage
            localStorage.setItem('userOnline', JSON.stringify(reponse));

            //recuperer le userConnecter
            const userOnline = JSON.parse(
              localStorage.getItem('userOnline') || ''
            );
            this.route.navigate(['/']);
          }
        }
      );
    }
  }
}
