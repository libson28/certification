import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageErreurComponent } from './page-erreur.component';

describe('PageErreurComponent', () => {
  let component: PageErreurComponent;
  let fixture: ComponentFixture<PageErreurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageErreurComponent]
    });
    fixture = TestBed.createComponent(PageErreurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
