import { TestBed } from '@angular/core/testing';

import { PromoServiceService } from './promo-service.service';

describe('PromoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromoServiceService = TestBed.get(PromoServiceService);
    expect(service).toBeTruthy();
  });
});
