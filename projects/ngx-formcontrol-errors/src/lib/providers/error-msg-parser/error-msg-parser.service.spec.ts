import { TestBed } from '@angular/core/testing';

import { ErrorMsgParserService } from './error-msg-parser.service';

describe('ErrorMsgParserService', () => {
  let service: ErrorMsgParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorMsgParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
