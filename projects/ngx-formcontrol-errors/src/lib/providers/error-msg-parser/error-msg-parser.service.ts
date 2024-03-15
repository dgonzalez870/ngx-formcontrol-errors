import {
  Inject,
  Injectable,
  Optional,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { Messages } from '../../data';
import { KeyValueObject } from '../../types';
import { FORM_ERROR_MESSAGES_PROVIDER } from '../messages';
import { ErrorMsgParser } from './error-msg-parser';

@Injectable({
  providedIn: 'root',
})
export class ErrorMsgParserService implements ErrorMsgParser {
  private errorMessages: KeyValueObject = { ...Messages };

  constructor(
    @Optional()
    @Inject(FORM_ERROR_MESSAGES_PROVIDER)
    private customErrorMessages: KeyValueObject
  ) {
    this.errorMessages = {
      ...this.errorMessages,
      ...(this.customErrorMessages || {}),
    };
  }

  getMessageByKey(key: string): string {
    return this.errorMessages[key];
  }

  errorMessageParser(errorKey: string, value: string | number | null): string {
    const message = this.getMessageByKey(errorKey);
    if (!message) {
      throw new Error(`Error message for ${errorKey} not found`);
    }

    return message.trim().replace('{{value}}', (value ?? '').toString());
  }

  parse(error: ValidationErrors): string {
    const keyError = Object.keys(error)[0];
    let msg: string = '';
    let val = null;
    switch (keyError) {
      case 'min':
        val = error[keyError].min;
        break;
      case 'max':
        val = error[keyError].max;
        break;
      case 'minlength':
        val = error[keyError].requiredLength;
        break;
      case 'maxlength':
        val = error[keyError].requiredLength;
        break;
      default:
        break;
    }

    msg = this.errorMessageParser(keyError, val);

    return msg;
  }
}
