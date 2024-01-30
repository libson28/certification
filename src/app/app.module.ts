import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { FAQComponent } from './faq/faq.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FooterComponent } from './footer/footer.component';
import { EnteteComponent } from './entete/entete.component';
import { ListeProfilComponent } from './liste-profil/liste-profil.component';
import { EspaceOuvrierComponent } from './espace-ouvrier/espace-ouvrier.component';
import { GuideComponent } from './guide/guide.component';
import { ConditionUseComponent } from './condition-use/condition-use.component';
import { PolitiqueConfiComponent } from './politique-confi/politique-confi.component';
import { DashClientComponent } from './dash-client/dash-client.component';
import { DashPrestataireComponent } from './dash-prestataire/dash-prestataire.component';

import { FormsModule } from '@angular/forms';
import { MainAdminComponent } from './main-admin/main-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { StatistiqueComponent } from './statistique/statistique.component';
import { SecurityComponent } from './security/security.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AproposComponent,
    FAQComponent,
    ConnexionComponent,
    InscriptionComponent,
    FooterComponent,
    EnteteComponent,
    ListeProfilComponent,
    EspaceOuvrierComponent,
    GuideComponent,
    ConditionUseComponent,
    PolitiqueConfiComponent,
    DashClientComponent,
    DashPrestataireComponent,
    MainAdminComponent,
    SidebarAdminComponent,
    NavbarAdminComponent,
    StatistiqueComponent,
    SecurityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
