import { TestBed } from '@angular/core/testing';

import { ProjdetailsService } from './projdetails.service';

describe('ProjdetailsService', () => {
  let service: ProjdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
