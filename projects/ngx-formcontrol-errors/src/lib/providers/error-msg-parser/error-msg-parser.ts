import { ValidationErrors } from '@angular/forms';

export interface ErrorMsgParser {
  /**
   * Method to parse ValidationErrors into a readable string
   * to be displayed to the user.
   *
   * @param error - Validation error to parse
   */
  parse(error: ValidationErrors): string;
}
