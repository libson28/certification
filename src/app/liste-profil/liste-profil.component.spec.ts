import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProfilComponent } from './liste-profil.component';
import { HttpClientModule } from '@angular/common/http';
import { EnteteComponent } from '../entete/entete.component';
import { BtnLoginComponent } from '../btn-login/btn-login.component';
import { FooterComponent } from '../footer/footer.component';

describe('ListeProfilComponent', () => {
  let component: ListeProfilComponent;
  let fixture: ComponentFixture<ListeProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeProfilComponent,EnteteComponent,BtnLoginComponent,FooterComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(ListeProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
