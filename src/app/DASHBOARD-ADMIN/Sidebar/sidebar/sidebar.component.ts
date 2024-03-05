import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  activeLink: string = '';

  constructor(private router: Router) {}

  setActiveLink(link: string, event: Event): void {
    event.preventDefault(); // Annule la navigation par défaut du lien
    this.activeLink = link;
  }

  logout(): void {
    localStorage.removeItem('userOnline');
    localStorage.setItem('isAdmin', JSON.stringify(false));
    localStorage.setItem('isClient', JSON.stringify(false));
    localStorage.setItem('isPrestataire', JSON.stringify(false));
    this.router.navigate(['/']);
  }

  deconnecte() {
    localStorage.removeItem('userOnline');
    this.router.navigate(['/']);
  }

  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}

