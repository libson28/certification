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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { SidebarComponent } from './DASHBOARD-ADMIN/Sidebar/sidebar/sidebar.component';
import { NavbarComponent } from './DASHBOARD-ADMIN/Navbar/navbar/navbar.component';
import { GestionUserComponent } from './DASHBOARD-ADMIN/CONTENU/gestion-user/gestion-user.component';
import { GestionCategorieComponent } from './DASHBOARD-ADMIN/CONTENU/gestion-categorie/gestion-categorie.component';
import { GestionMessageComponent } from './DASHBOARD-ADMIN/CONTENU/gestion-message/gestion-message.component';
import { StatistiqueComponent } from './DASHBOARD-ADMIN/CONTENU/statistique/statistique.component';
import { BtnLoginComponent } from './btn-login/btn-login.component';
import { AuthInterceptor } from './interceptors/interceptor';
import { AuthserviceService } from './Services/ServicesAuth/auth-service.service';
import { PageErreurComponent } from './page-erreur/page-erreur.component';

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
    SidebarComponent,
    NavbarComponent,
    GestionUserComponent,
    GestionCategorieComponent,
    GestionMessageComponent,
    StatistiqueComponent,
    BtnLoginComponent,
    PageErreurComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    AuthserviceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
