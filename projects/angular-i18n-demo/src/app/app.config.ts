import { ApplicationConfig } from '@angular/core';

import { FORM_ERROR_MESSAGES_PROVIDER } from 'ngx-formcontrol-errors-msgs';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        required: $localize `This field is required`,
        min: $localize `The minimun allowed values is {{value}}`,
        max: $localize `The max allowed value is {{value}}`,
        minlength: $localize `The minimun allowed length is {{value}}`,
        maxlength: $localize `The max allowed length is {{value}}`,
        email: $localize `Invalid email`,
        pattern: $localize `Invalid pattern`,
      },
    },
  ]
};
