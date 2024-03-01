import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQComponent } from './faq.component';
import { EnteteComponent } from '../entete/entete.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnLoginComponent } from '../btn-login/btn-login.component';
import { HttpClientModule } from '@angular/common/http';

describe('FAQComponent', () => {
  let component: FAQComponent;
  let fixture: ComponentFixture<FAQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FAQComponent, EnteteComponent, FooterComponent, BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(FAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
