import { TestBed } from '@angular/core/testing';

import { DiceRollerModalService } from './dice-roller-modal.service';

describe('DiceRollerModalService', () => {
  let service: DiceRollerModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiceRollerModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
