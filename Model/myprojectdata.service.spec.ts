import { TestBed } from '@angular/core/testing';

import { MyprojectdataService } from './myprojectdata.service';

describe('MyprojectdataService', () => {
  let service: MyprojectdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyprojectdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
