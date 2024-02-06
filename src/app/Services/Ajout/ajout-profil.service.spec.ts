import { TestBed } from '@angular/core/testing';

import { AjoutProfilService } from '../../ajout-profil.service';

describe('AjoutProfilService', () => {
  let service: AjoutProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
