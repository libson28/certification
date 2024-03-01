import { TestBed } from '@angular/core/testing';

import { AjoutProfilService } from '../../Services/Ajout/ajout-profil.service';
import { HttpClientModule } from '@angular/common/http';

describe('AjoutProfilService', () => {
  let service: AjoutProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(AjoutProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
