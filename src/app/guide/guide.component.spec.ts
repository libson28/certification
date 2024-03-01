import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideComponent } from './guide.component';
import { HttpClientModule } from '@angular/common/http';
import { EnteteComponent } from '../entete/entete.component';
import { FooterComponent } from '../footer/footer.component';
import { BtnLoginComponent } from '../btn-login/btn-login.component';

describe('GuideComponent', () => {
  let component: GuideComponent;
  let fixture: ComponentFixture<GuideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuideComponent, EnteteComponent, FooterComponent, BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(GuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
