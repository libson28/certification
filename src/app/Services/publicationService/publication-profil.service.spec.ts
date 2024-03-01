import { TestBed } from '@angular/core/testing';

import { PublicationProfilService } from './publication-profil.service';
import { HttpClientModule } from '@angular/common/http';

describe('PublicationProfilService', () => {
  let service: PublicationProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PublicationProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
