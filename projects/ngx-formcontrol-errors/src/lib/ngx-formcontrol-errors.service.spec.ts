import { TestBed } from '@angular/core/testing';

import { NgxFormcontrolErrorsService } from './ngx-formcontrol-errors.service';

describe('NgxFormcontrolErrorsService', () => {
  let service: NgxFormcontrolErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFormcontrolErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
