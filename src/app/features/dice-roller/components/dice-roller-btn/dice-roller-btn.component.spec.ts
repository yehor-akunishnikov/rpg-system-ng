import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollerBtnComponent } from './dice-roller-btn.component';

describe('DiceRollerBtnComponent', () => {
  let component: DiceRollerBtnComponent;
  let fixture: ComponentFixture<DiceRollerBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiceRollerBtnComponent]
    });
    fixture = TestBed.createComponent(DiceRollerBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
