import { ValidationErrors } from '@angular/forms';

export interface ErrorMsgParser {
  parse(error: ValidationErrors): string;
}
