import { TestBed } from '@angular/core/testing';

import { AuthserviceService } from './auth-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthServiceService', () => {
  let service: AuthserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AuthserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
