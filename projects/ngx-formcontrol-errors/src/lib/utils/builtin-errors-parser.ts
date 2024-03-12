import { ValidationErrors } from '@angular/forms';

import { Messages } from '../data';

export interface ParsedError {
  message: string;
  args?: any;
}

export function errorMessageParser(
  errorKey: string,
  value: string | number | null
): string {
  const message = Messages[errorKey];
  if (!message) {
    throw new Error(`Error message for ${errorKey} not found`);
  }

  return message.trim().replace('{{value}}', (value ?? '').toString());
}

/**
 * Parses the Angular built-in validation errors to be displayed
 */
export function parseError(error: ValidationErrors): string {
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

  msg = errorMessageParser(keyError, val);

  return msg;
}
