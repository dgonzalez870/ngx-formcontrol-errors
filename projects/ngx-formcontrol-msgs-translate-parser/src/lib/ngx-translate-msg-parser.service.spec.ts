import { TestBed } from '@angular/core/testing';

import { ErrorMsgParserService } from 'ngx-formcontrol-errors-msgs';

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
          useValue: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            instant: (key: string, interpolateParams?: any): string => {
              const translations: { [key: string]: string } = {
                'error.required': 'Required property',
                'error.min': 'Min allowed values is {{value}}',
              };

              return translations[key].replace(
                '{{value}}',
                interpolateParams?.value
              );
            },
          },
        },
        {
          provide: ErrorMsgParserService,
          useValue: {
            getMessageByKey: (key: string): string => {
              const Messages: { [key: string]: string } = {
                required: 'error.required',
                min: 'error.min',
              };

              return Messages[key];
            },
          },
        },
      ],
    });
    service = TestBed.inject(NgxTranslateMsgParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should parse error message', () => {
    const message = service.parse({
      min: {
        min: 10,
        actualValue: 5,
      },
    });

    expect(message).toEqual('Min allowed values is 10');
  });
});
