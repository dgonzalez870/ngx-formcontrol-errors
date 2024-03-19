import { InjectionToken } from '@angular/core';

import { ErrorMessageComponentFactory } from './error-msg-component-factory';

export const ERROR_MSG_COMPONENT_FACTORY = new InjectionToken<
  ErrorMessageComponentFactory
>('ERROR_MSG_COMPONENT_FACTORY');
