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
  emailLogin: any = "";
  PasswordLogin: any = "";
  AuthService: any;

  constructor (private serviceAuth: AuthserviceService){}

  ngOnInit(): void {

  }

}
