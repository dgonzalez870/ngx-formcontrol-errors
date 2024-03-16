import { InjectionToken } from '@angular/core';

import { KeyValueObject } from '../../types';

/**
 * InjectionToken to allow customization of messages by injecting new ones
 */
export const FORM_ERROR_MESSAGES_PROVIDER = new InjectionToken<KeyValueObject>(
  'FORM_ERROR_MESSAGES_PROVIDER'
);
