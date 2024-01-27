import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceOuvrierComponent } from './espace-ouvrier.component';

describe('EspaceOuvrierComponent', () => {
  let component: EspaceOuvrierComponent;
  let fixture: ComponentFixture<EspaceOuvrierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspaceOuvrierComponent]
    });
    fixture = TestBed.createComponent(EspaceOuvrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
