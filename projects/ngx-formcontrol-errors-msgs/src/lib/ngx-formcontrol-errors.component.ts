import {
  Component,
  ElementRef,
  Input,
} from '@angular/core';

import {
  ErrorMsgComponent,
} from './providers/error-msg-component-factory/error-msg-component';

@Component({
  selector: 'ngx-formcontrol-errors',
  standalone: true,
  template: ``,
})
export class NgxFormcontrolErrorsComponent implements ErrorMsgComponent {
  @Input()
  set message(msg: string) {
    this.elementRef.nativeElement.innerHTML = msg;
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}
}
