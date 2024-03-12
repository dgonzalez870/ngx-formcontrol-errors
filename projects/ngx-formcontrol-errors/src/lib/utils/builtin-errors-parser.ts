import { ValidationErrors } from '@angular/forms';

export interface ParsedError {
  message: string;
  args?: { [key: string]: string | number };
}

/**
 * Parses the Angular built-in validation errors to be displayed
 */
export function parseError(error: ValidationErrors): ParsedError {
  const keyError = Object.keys(error)[0];
  let args: { [key: string]: string | number } = {};
  switch (keyError) {
    case 'min':
      args = { min: error[keyError].min };
      break;
    case 'max':
      args = { max: error[keyError].max };
      break;
    case 'minlength':
      args = { minlength: error[keyError].requiredLength };
      break;
    case 'maxlength':
      args = { maxlength: error[keyError].requiredLength };
      break;
    default:
      break;
  }

  return {
    message: keyError,
    args,
  };
}
