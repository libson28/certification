import { GestionUserComponent } from './DASHBOARD-ADMIN/CONTENU/gestion-user/gestion-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ListeProfilComponent } from './liste-profil/liste-profil.component';
import { GuideComponent } from './guide/guide.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PolitiqueConfiComponent } from './politique-confi/politique-confi.component';
import { ConditionUseComponent } from './condition-use/condition-use.component';
import { FAQComponent } from './faq/faq.component';
import { GestionCategorieComponent } from './DASHBOARD-ADMIN/CONTENU/gestion-categorie/gestion-categorie.component';
import { StatistiqueComponent } from './DASHBOARD-ADMIN/CONTENU/statistique/statistique.component';
import { GestionMessageComponent } from './DASHBOARD-ADMIN/CONTENU/gestion-message/gestion-message.component';
import { DashClientComponent } from './dash-client/dash-client.component';
import { DashPrestataireComponent } from './dash-prestataire/dash-prestataire.component';
// import { StatistiqueComponent } from './statistique/statistique.component'

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'profils', component: ListeProfilComponent },
  { path: 'about', component: AproposComponent },
  { path: 'client', component: DashClientComponent },
  { path: 'prestataire', component: DashPrestataireComponent },
  { path: 'comment-ça-marche', component: GuideComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'signUp', component: InscriptionComponent },
  { path: 'politique', component: PolitiqueConfiComponent },
  { path: 'conditionDeUse', component: ConditionUseComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'category', component: GestionCategorieComponent },
  { path: 'statistique', component: StatistiqueComponent },
  { path: 'utilisateur', component: GestionUserComponent },
  { path: 'messages', component: GestionMessageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
