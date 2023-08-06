import { TestBed } from '@angular/core/testing';

import { StatDescriptionModalService } from './stat-description-modal.service';

describe('StatDescriptionModalService', () => {
  let service: StatDescriptionModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatDescriptionModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
