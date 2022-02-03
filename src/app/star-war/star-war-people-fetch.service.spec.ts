import { TestBed } from '@angular/core/testing';

import { StarWarPeopleFetchService } from './star-war-people-fetch.service';

describe('StarWarPeopleFetchService', () => {
  let service: StarWarPeopleFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarPeopleFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
