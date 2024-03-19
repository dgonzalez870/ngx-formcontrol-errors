import { ComponentRef, ViewContainerRef } from '@angular/core';

export interface ErrorMessageComponentFactory<T> {
  createComponent: (viewContainerRef: ViewContainerRef) => ComponentRef<T>;
}
