import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceOuvrierComponent } from './espace-ouvrier.component';
import { EnteteComponent } from '../entete/entete.component';
import { BtnLoginComponent } from '../btn-login/btn-login.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EspaceOuvrierComponent', () => {
  let component: EspaceOuvrierComponent;
  let fixture: ComponentFixture<EspaceOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceOuvrierComponent, EnteteComponent, BtnLoginComponent, FooterComponent],
      imports:[HttpClientModule,RouterTestingModule]
    });
    fixture = TestBed.createComponent(EspaceOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
