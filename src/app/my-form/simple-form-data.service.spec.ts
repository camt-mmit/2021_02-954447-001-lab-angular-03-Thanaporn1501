import { TestBed } from '@angular/core/testing';

import { SimpleFormDataService } from './simple-form-data.service';

describe('SimpleFormDataService', () => {
  let service: SimpleFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
