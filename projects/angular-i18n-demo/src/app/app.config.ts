import { ApplicationConfig } from '@angular/core';

import { FORM_ERROR_MESSAGES_PROVIDER } from 'ngx-formcontrol-errors-msgs';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        required: $localize `This field is required`,
        min: $localize `The minimun allowed values is {{min}}`,
        max: $localize `The max allowed value is {{max}}`,
        minlength: $localize `The minimun allowed length is {{requiredLength}}`,
        maxlength: $localize `The max allowed length is {{requiredLength}}`,
        email: $localize `Invalid email`,
        pattern: $localize `Invalid pattern`,
      },
    },
  ]
};
