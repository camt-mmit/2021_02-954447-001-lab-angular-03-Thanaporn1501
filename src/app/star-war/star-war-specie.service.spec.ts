import { TestBed } from '@angular/core/testing';

import { StarWarSpecieService } from './star-war-specie.service';

describe('StarWarSpecieService', () => {
  let service: StarWarSpecieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarSpecieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
