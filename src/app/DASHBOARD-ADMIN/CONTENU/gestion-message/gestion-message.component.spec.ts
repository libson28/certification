import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMessageComponent } from './gestion-message.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';
import { SidebarComponent } from '../../Sidebar/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';

describe('GestionMessageComponent', () => {
  let component: GestionMessageComponent;
  let fixture: ComponentFixture<GestionMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionMessageComponent, NavbarComponent, SidebarComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(GestionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
