import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-login',
  templateUrl: './btn-login.component.html',
  styleUrls: ['./btn-login.component.css'],
})
export class BtnLoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  isUserLoggedIn(): boolean {
    const userOnline = JSON.parse(localStorage.getItem('userOnline') || '{}');
    return !!userOnline && !!userOnline.authorization;
  }

  redirectEspacePerso(): void {
    const userOnline = JSON.parse(localStorage.getItem('userOnline') || '{}');

    if (userOnline.user.role === 'client') {
      this.router.navigate(['/client']); // Utilisez un chemin relatif
    } else if (userOnline.user.role === 'prestataire') {
      this.router.navigate(['/prestataire']); // Utilisez un chemin relatif
    }
  }

  logout(): void {
    localStorage.removeItem('userOnline');
    localStorage.setItem('isAdmin', JSON.stringify(false));
    localStorage.setItem('isClient', JSON.stringify(false));
    localStorage.setItem('isPrestataire', JSON.stringify(false));
    this.router.navigate(['/']);
  }
}
