import { TestBed } from '@angular/core/testing';

import { SpecServicesService } from './spec-services.service';

describe('SpecServicesService', () => {
  let service: SpecServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
