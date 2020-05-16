import { TestBed } from '@angular/core/testing';

import { GetApiServiceService } from './get-api-service.service';

describe('GetApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetApiServiceService = TestBed.get(GetApiServiceService);
    expect(service).toBeTruthy();
  });
});
