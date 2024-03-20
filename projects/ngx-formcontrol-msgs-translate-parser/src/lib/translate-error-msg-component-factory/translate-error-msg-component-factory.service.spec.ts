import { TestBed } from '@angular/core/testing';

import {
  TranslateErrorMsgComponentFactoryService,
} from './translate-error-msg-component-factory.service';

describe('ErrorMsgComponentFactoryService', () => {
  let service: TranslateErrorMsgComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslateErrorMsgComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
