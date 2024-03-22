import { TestBed } from '@angular/core/testing';

import { ReviewsServicesService } from './reviews-services.service';

describe('ReviewsServicesService', () => {
  let service: ReviewsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
