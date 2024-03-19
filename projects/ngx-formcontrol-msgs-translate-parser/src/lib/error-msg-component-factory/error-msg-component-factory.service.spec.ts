import { TestBed } from '@angular/core/testing';

import { ErrorMsgComponentFactoryService } from './error-msg-component-factory.service';

describe('ErrorMsgComponentFactoryService', () => {
  let service: ErrorMsgComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMsgComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
