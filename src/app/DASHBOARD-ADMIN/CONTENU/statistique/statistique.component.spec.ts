import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiqueComponent } from './statistique.component';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from '../../Sidebar/sidebar/sidebar.component';
import { NavbarComponent } from '../../Navbar/navbar/navbar.component';


describe('StatistiqueComponent', () => {
  let component: StatistiqueComponent;
  let fixture: ComponentFixture<StatistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatistiqueComponent, SidebarComponent, NavbarComponent],
      imports:[HttpClientModule]
    });
    fixture = TestBed.createComponent(StatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
