import { TestBed } from '@angular/core/testing';

import { NgxTranslateMsgParserService } from './ngx-translate-msg-parser.service';

describe('NgxTranslateMsgParserService', () => {
  let service: NgxTranslateMsgParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTranslateMsgParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
