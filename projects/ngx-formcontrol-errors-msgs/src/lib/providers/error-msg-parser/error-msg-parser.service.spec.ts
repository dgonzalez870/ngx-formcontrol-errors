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

  it('should parse error message for the `required` validation error', () => {
    const result = service.parse({ required: true });
    expect(result).toEqual([
      {
        message: 'This field is required',
        value: true,
      },
    ]);
  });

  it('should parse error message for the `min` validation error', () => {
    const result = service.parse({
      min: { min: 10, actual: 8 },
    });
    expect(result).toEqual([
      {
        message: 'The minimun allowed values is 10',
        value: { min: 10, actual: 8 },
      },
    ]);
  });
});
