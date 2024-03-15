import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import {
  ErrorMsgParser,
  ErrorMsgParserService,
  validationErrors2KeyValue,
} from 'ngx-formcontrol-errors';

import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class NgxTranslateMsgParserService implements ErrorMsgParser {
  constructor(
    private readonly translateService: TranslateService,
    private readonly errorMessageParserService: ErrorMsgParserService
  ) {}

  parse(error: ValidationErrors): string {
    const { key, value } = validationErrors2KeyValue(error)[0];
    const message = this.errorMessageParserService.errorMessageParser(
      key,
      null
    );
    const translatedMessage = this.translateService.instant(message);
    return translatedMessage
      .trim()
      .replace('{{value}}', (value ?? '').toString());
  }
}
