import { TestBed } from '@angular/core/testing';

import { FetchTweetsService } from './fetch-tweets.service';

describe('FetchTweetsService', () => {
  let service: FetchTweetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchTweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
