import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDescriptionComponent } from './stat-description.component';

describe('StatDescriptionComponent', () => {
  let component: StatDescriptionComponent;
  let fixture: ComponentFixture<StatDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatDescriptionComponent]
    });
    fixture = TestBed.createComponent(StatDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
