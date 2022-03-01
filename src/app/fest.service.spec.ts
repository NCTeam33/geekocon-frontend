import { TestBed } from '@angular/core/testing';

import { FestService } from './fest.service';

describe('FestService', () => {
  let service: FestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
