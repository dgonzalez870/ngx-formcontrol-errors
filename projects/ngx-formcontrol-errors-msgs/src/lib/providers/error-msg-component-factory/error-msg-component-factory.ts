import {
  ComponentRef,
  ViewContainerRef,
} from '@angular/core';

import { ErrorMsgComponent } from './error-msg-component';

export interface ErrorMessageComponentFactory {
  createComponent(
    viewContainerRef: ViewContainerRef
  ): ComponentRef<ErrorMsgComponent>;
}
