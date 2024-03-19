import {
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';

import {
  ERROR_MSG_COMPONENT_FACTORY,
  FORM_ERROR_MESSAGES_PROVIDER,
} from 'ngx-formcontrol-errors-msgs';
import {
  ErrorMsgComponentFactoryService,
} from 'ngx-formcontrol-msgs-translate-parser';

import {
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        required: 'FORM_ERROR_MESSAGES.REQUIRED',
        min: 'FORM_ERROR_MESSAGES.MIN',
        max: 'FORM_ERROR_MESSAGES.MAX',
        minlength: 'FORM_ERROR_MESSAGES.MINLENGTH',
        maxlength: 'FORM_ERROR_MESSAGES.MAXLENGTH',
        email: 'FORM_ERROR_MESSAGES.EMAIL',
        pattern: 'FORM_ERROR_MESSAGES.PATTERN',
        custom: 'FORM_ERROR_MESSAGES.CUSTOM',
      },
    },
    {
      provide: ERROR_MSG_COMPONENT_FACTORY,
      useClass: ErrorMsgComponentFactoryService,
    },
    importProvidersFrom([
      HttpClientModule,
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        useDefaultLang: true,
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
  ],
};
