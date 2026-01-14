import { TestBed } from '@angular/core/testing';

import { FindByIngredientsService } from './find-by-ingredients-service';

describe('FindByIngredientsService', () => {
  let service: FindByIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindByIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
