import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashPrestataireComponent } from './dash-prestataire.component';

describe('DashPrestataireComponent', () => {
  let component: DashPrestataireComponent;
  let fixture: ComponentFixture<DashPrestataireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashPrestataireComponent]
    });
    fixture = TestBed.createComponent(DashPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
