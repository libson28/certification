import { TestBed } from '@angular/core/testing';

import { ContactezNousService } from '../../Services/gestionMessage/contactez-nous.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContactezNousService', () => {
  let service: ContactezNousService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ContactezNousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
