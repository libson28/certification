import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueConfiComponent } from './politique-confi.component';

describe('PolitiqueConfiComponent', () => {
  let component: PolitiqueConfiComponent;
  let fixture: ComponentFixture<PolitiqueConfiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiqueConfiComponent]
    });
    fixture = TestBed.createComponent(PolitiqueConfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
