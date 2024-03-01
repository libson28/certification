import { TestBed } from '@angular/core/testing';

import { CategorieService } from '../../Services/catégorieService/categorie.service';
import { HttpClientModule } from '@angular/common/http';

describe('CategorieService', () => {
  let service: CategorieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CategorieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
