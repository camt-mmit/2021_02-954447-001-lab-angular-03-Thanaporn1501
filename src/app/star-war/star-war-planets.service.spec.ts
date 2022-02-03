import { TestBed } from '@angular/core/testing';

import { StarWarPlanetsService } from './star-war-planets.service';

describe('StarWarPlanetsService', () => {
  let service: StarWarPlanetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarPlanetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
