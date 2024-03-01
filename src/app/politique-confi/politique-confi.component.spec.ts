import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfiComponent } from './politique-confi.component';
import { EnteteComponent } from '../entete/entete.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';
import { BtnLoginComponent } from '../btn-login/btn-login.component';

describe('PolitiqueConfiComponent', () => {
  let component: PolitiqueConfiComponent;
  let fixture: ComponentFixture<PolitiqueConfiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueConfiComponent, EnteteComponent,FooterComponent,BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(PolitiqueConfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
