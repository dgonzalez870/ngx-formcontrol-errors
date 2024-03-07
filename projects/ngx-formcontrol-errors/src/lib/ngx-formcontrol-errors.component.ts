import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ngx-formcontrol-errors',
  standalone: true,
  template: `{{ message }}`,
})
export class NgxFormcontrolErrorsComponent {
  @Input()
  message = '';
}
