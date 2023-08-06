import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDescriptionModalComponent } from './stat-description-modal.component';

describe('StatDescriptionModalComponent', () => {
  let component: StatDescriptionModalComponent;
  let fixture: ComponentFixture<StatDescriptionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatDescriptionModalComponent]
    });
    fixture = TestBed.createComponent(StatDescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
