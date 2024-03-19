import {
  Inject,
  Injectable,
  Optional,
} from '@angular/core';
import { ValidationErrors } from '@angular/forms';

import { Messages } from '../../data';
import { KeyValueObject } from '../../types';
import {
  ErrorMessage,
} from '../error-msg-component-factory/error-msg-component';
import { FORM_ERROR_MESSAGES_PROVIDER } from '../messages';
import { ErrorMsgParser } from './error-msg-parser';
import {
  validationErrors2KeyValue,
} from './utils/validation-errors-parser.utils';

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

  errorMessageParser(
    errorKey: string,
    valueKey: string,
    value: string | number | null
  ): string {
    const message = this.getMessageByKey(errorKey);
    if (!message) {
      throw new Error(`Error message for ${errorKey} not found`);
    }

    return message.trim().replace(`{{${valueKey}}}`, (value ?? '').toString());
  }

  parse(error: ValidationErrors): ErrorMessage[] {
    return validationErrors2KeyValue(error).map(({ key, value }) => {
      let valueKey = key;

      if (valueKey === 'minlength' || valueKey === 'maxlength') {
        valueKey = 'requiredLength';
      }

      return {
        message: this.errorMessageParser(key, valueKey, value[valueKey]),
        value,
      };
    });
  }
}
