import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { FORM_ERROR_MESSAGES_PROVIDER } from 'ngx-formcontrol-errors';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        required: 'This is a required field',
      },
    },
  ],
};
