import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'ngx-formcontrol-errors',
  standalone: true,
  template: `
    <p>
      {{ message }}
    </p>
  `,
})
export class NgxFormcontrolErrorsComponent {
  @Input()
  message = '';
}
