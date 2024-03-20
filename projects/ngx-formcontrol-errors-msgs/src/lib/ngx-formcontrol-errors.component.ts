import {
  Component,
  ElementRef,
  Input,
} from '@angular/core';

import {
  ErrorMessage,
  ErrorMsgComponent,
} from './providers/error-msg-component-factory/error-msg-component';

@Component({
  selector: 'ngx-formcontrol-errors',
  standalone: true,
  template: ``,
})
export class NgxFormcontrolErrorsComponent implements ErrorMsgComponent {
  @Input()
  set messages(msgs: ErrorMessage[]) {
    if (!msgs?.length) {
      this.elementRef.nativeElement.innerHTML = '';
      return;
    }
    const msg = msgs[0].message;
    this.elementRef.nativeElement.innerHTML = msg;
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}
}
