import { InjectionToken } from '@angular/core';

import { KeyValueObject } from '../../types';

export const FORM_ERROR_MESSAGES_PROVIDER = new InjectionToken<KeyValueObject>(
  'FORM_ERROR_MESSAGES_PROVIDER'
);
