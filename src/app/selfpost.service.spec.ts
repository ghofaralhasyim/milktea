import { TestBed } from '@angular/core/testing';

import { SelfpostService } from './selfpost.service';

describe('SelfpostService', () => {
  let service: SelfpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelfpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
