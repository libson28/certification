import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPrestataireComponent } from './dash-prestataire.component';
import { EnteteComponent } from '../entete/entete.component';
import { BtnLoginComponent } from '../btn-login/btn-login.component';
import { HttpClientModule } from '@angular/common/http';

describe('DashPrestataireComponent', () => {
  let component: DashPrestataireComponent;
  let fixture: ComponentFixture<DashPrestataireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPrestataireComponent, EnteteComponent, BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(DashPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
