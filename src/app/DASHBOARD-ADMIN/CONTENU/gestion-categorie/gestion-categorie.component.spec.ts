import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCategorieComponent } from './gestion-categorie.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import { SidebarComponent } from '../../Sidebar/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

describe('GestionCategorieComponent', () => {
  let component: GestionCategorieComponent;
  let fixture: ComponentFixture<GestionCategorieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GestionCategorieComponent,
        NavbarComponent,
        SidebarComponent,
      ],
      imports:[HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(GestionCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
