import { TestBed } from '@angular/core/testing';

import { GeneralStatsStateService } from './general-stats-state.service';

describe('GeneralStatsStateService', () => {
  let service: GeneralStatsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralStatsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
