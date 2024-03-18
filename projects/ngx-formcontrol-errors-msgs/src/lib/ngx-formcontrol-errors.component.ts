import {
  Component,
  ElementRef,
  Input,
} from '@angular/core';

@Component({
  selector: 'ngx-formcontrol-errors',
  standalone: true,
  template: ``,
})
export class NgxFormcontrolErrorsComponent {
  @Input()
  set message(msg: string) {
    this.elementRef.nativeElement.innerHTML = msg;
  }

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}
}
