import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterNameInputComponent } from './character-name-input.component';

describe('CharacterNameInputComponent', () => {
  let component: CharacterNameInputComponent;
  let fixture: ComponentFixture<CharacterNameInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterNameInputComponent]
    });
    fixture = TestBed.createComponent(CharacterNameInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
