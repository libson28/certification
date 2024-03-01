import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionUseComponent } from './condition-use.component';
import { EnteteComponent } from '../entete/entete.component';
import { FooterComponent } from '../footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BtnLoginComponent } from './../btn-login/btn-login.component';

describe('ConditionUseComponent', () => {
  let component: ConditionUseComponent;
  let fixture: ComponentFixture<ConditionUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConditionUseComponent,
        EnteteComponent,
        FooterComponent,
        BtnLoginComponent,
      ],
      imports: [HttpClientModule],
    });
    fixture = TestBed.createComponent(ConditionUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
