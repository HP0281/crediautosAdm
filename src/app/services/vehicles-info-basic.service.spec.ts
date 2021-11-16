import { TestBed } from '@angular/core/testing';

import { VehiclesInfoBasicService } from './vehicles-info-basic.service';

describe('VehiclesInfoBasicService', () => {
  let service: VehiclesInfoBasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehiclesInfoBasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
