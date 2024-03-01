import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent } from './accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { EnteteComponent } from '../entete/entete.component';
import { FooterComponent } from '../footer/footer.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { BtnLoginComponent } from '../btn-login/btn-login.component';
describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccueilComponent,
        EnteteComponent,
        FooterComponent,
        ConnexionComponent,
        BtnLoginComponent
      ],
      imports: [FormsModule,HttpClientModule],
    });
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
