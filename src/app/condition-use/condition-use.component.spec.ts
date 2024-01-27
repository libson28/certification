import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionUseComponent } from './condition-use.component';

describe('ConditionUseComponent', () => {
  let component: ConditionUseComponent;
  let fixture: ComponentFixture<ConditionUseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionUseComponent]
    });
    fixture = TestBed.createComponent(ConditionUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
