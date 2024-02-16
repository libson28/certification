import { TestBed } from '@angular/core/testing';

import { PublicationProfilService } from './publication-profil.service';

describe('PublicationProfilService', () => {
  let service: PublicationProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicationProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
