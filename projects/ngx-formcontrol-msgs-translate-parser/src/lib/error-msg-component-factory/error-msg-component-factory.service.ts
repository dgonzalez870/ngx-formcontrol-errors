import {
  ComponentRef,
  Injectable,
  ViewContainerRef,
} from '@angular/core';

import {
  ErrorMsgTranslateComponent,
} from '../error-msg-translate/error-msg-translate.component';
import { ErrorMessageComponentFactory } from './error-msg-component-factory';

@Injectable({
  providedIn: 'root',
})
export class ErrorMsgComponentFactoryService
  implements ErrorMessageComponentFactory<ErrorMsgTranslateComponent>
{
  constructor() {}

  createComponent(
    viewContainerRef: ViewContainerRef
  ): ComponentRef<ErrorMsgTranslateComponent> {
    return viewContainerRef.createComponent(ErrorMsgTranslateComponent);
  }
}
