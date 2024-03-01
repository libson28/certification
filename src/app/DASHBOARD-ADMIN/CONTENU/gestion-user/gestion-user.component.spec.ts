import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUserComponent } from './gestion-user.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from '../../Sidebar/sidebar/sidebar.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import { FormsModule } from '@angular/forms';

describe('GestionUserComponent', () => {
  let component: GestionUserComponent;
  let fixture: ComponentFixture<GestionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionUserComponent,SidebarComponent,NavbarComponent],
      imports:[HttpClientModule,FormsModule]
    });
    fixture = TestBed.createComponent(GestionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
