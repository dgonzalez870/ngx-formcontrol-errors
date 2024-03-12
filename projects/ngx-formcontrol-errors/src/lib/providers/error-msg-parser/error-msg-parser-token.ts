import { InjectionToken } from '@angular/core';

import { ErrorMsgParser } from './error-msg-parser';

export const ERROR_MSG_PARSER = new InjectionToken<ErrorMsgParser>(
  'ERROR_MSG_PARSER'
);
