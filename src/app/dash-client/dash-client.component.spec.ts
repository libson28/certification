import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashClientComponent } from './dash-client.component';
import { EnteteComponent } from '../entete/entete.component';
import { HttpClientModule } from '@angular/common/http';
import { BtnLoginComponent } from '../btn-login/btn-login.component';

describe('DashClientComponent', () => {
  let component: DashClientComponent;
  let fixture: ComponentFixture<DashClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashClientComponent, EnteteComponent,BtnLoginComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(DashClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
