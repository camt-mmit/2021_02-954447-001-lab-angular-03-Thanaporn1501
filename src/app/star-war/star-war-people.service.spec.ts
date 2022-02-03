import { TestBed } from '@angular/core/testing';

import { StarWarPeopleService } from './star-war-people.service';

describe('StarWarPeopleService', () => {
  let service: StarWarPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
