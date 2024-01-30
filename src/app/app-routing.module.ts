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
import { StatistiqueComponent } from './statistique/statistique.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'profils', component: ListeProfilComponent },
  { path: 'about', component: AproposComponent },
  { path: 'comment-ça-marche', component: GuideComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'signUp', component: InscriptionComponent },
  { path: 'politique', component: PolitiqueConfiComponent },
  { path: 'conditionDeUse', component: ConditionUseComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'statistique', component: StatistiqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
