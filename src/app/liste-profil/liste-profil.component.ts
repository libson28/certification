import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-profil',
  templateUrl: './liste-profil.component.html',
  styleUrls: ['./liste-profil.component.css']
})
export class ListeProfilComponent implements OnInit {
  // Déclaration des variables
  isUrbaine:boolean = true;
  isBanlieue:boolean = false;
  isAIBD:boolean = false;

  // Déclaration des méthodes
  // Voir les lignes urbaines
  showUrbaine(){
    this.isUrbaine = true;
    this.isBanlieue = false;
    this.isAIBD = false;
  }

  // Voir les lignes de banlieue
  showBanlieue(){
    this.isUrbaine = false;
    this.isBanlieue = true;
    this.isAIBD = false;
  }

  // Voir les lignes AIBD
  showAIBD(){
    this.isUrbaine = false;
    this.isBanlieue = false;
    this.isAIBD = true;
  }
  ngOnInit(): void {

  }
}
