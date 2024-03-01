import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnteteComponent } from './entete.component';
import { HttpClientModule } from '@angular/common/http';
import { BtnLoginComponent } from '../btn-login/btn-login.component';

describe('EnteteComponent', () => {
  let component: EnteteComponent;
  let fixture: ComponentFixture<EnteteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnteteComponent,BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(EnteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
