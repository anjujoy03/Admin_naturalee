import { TestBed } from '@angular/core/testing';

import { AuthgurdServiceService } from './authgurd-service.service';

describe('AuthgurdServiceService', () => {
  let service: AuthgurdServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthgurdServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
