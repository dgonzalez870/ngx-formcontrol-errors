import { ValidationErrors } from '@angular/forms';

import {
  ErrorMessage,
} from '../error-msg-component-factory/error-msg-component';

export interface ErrorMsgParser {
  /**
   * Method to parse ValidationErrors into a readable string
   * to be displayed to the user.
   *
   * @param error - Validation error to parse
   */
  parse(error: ValidationErrors): ErrorMessage[];
}
