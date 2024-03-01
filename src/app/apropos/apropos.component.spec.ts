import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AproposComponent } from './apropos.component';
import { EnteteComponent } from '../entete/entete.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BtnLoginComponent } from '../btn-login/btn-login.component';

describe('AproposComponent', () => {
  let component: AproposComponent;
  let fixture: ComponentFixture<AproposComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AproposComponent, EnteteComponent, FooterComponent,BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(AproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
