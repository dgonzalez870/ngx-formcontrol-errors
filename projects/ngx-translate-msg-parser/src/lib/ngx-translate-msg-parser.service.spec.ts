import { TestBed } from '@angular/core/testing';

import { ErrorMsgParserService } from 'ngx-formcontrol-errors';

import { TranslateService } from '@ngx-translate/core';

import {
  NgxTranslateMsgParserService,
} from './ngx-translate-msg-parser.service';

describe('NgxTranslateMsgParserService', () => {
  let service: NgxTranslateMsgParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useValue: {},
        },
        {
          provide: ErrorMsgParserService,
          useValue: {},
        },
      ],
    });
    service = TestBed.inject(NgxTranslateMsgParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
