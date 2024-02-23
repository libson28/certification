import { AuthserviceService } from './../Services/ServicesAuth/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
})
export class EnteteComponent {
  // isMenuOpen: boolean = false;

  // toggleMenu() {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }
  // boutonActif = 1;
  constructor(private authService: AuthserviceService) {}
  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
