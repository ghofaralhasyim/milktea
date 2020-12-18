import { TestBed } from '@angular/core/testing';

import { PostioService } from './postio.service';

describe('PostioService', () => {
  let service: PostioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
