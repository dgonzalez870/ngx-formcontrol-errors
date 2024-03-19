import {
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

import { ErrorMessageComponentFactory } from 'ngx-formcontrol-errors-msgs';

import {
  ErrorMsgTranslateComponent,
} from '../error-msg-translate/error-msg-translate.component';

@Injectable({
  providedIn: 'root',
})
export class TranslateErrorMsgComponentFactoryService
  implements ErrorMessageComponentFactory
{
  constructor() {}

  createComponent(viewContainerRef: ViewContainerRef): ComponentRef<ErrorMsgTranslateComponent> {
    return viewContainerRef.createComponent(ErrorMsgTranslateComponent);
  }

}
