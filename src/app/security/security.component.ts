import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../Services/ServicesAuth/auth-service.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css'],
})
export class SecurityComponent implements OnInit {
  emailLogin: any = '';
  PasswordLogin: any = '';
  AuthService: any;

  constructor(private auth: AuthserviceService) { }

  ngOnInit(): void {
  }
}
