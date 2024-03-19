import {
  Component,
  Input,
} from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

@Component({
  // Use the same name as the default component to avoid changes to the style sheet of existing applications
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ngx-formcontrol-errors',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './error-msg-translate.component.html',
})
export class ErrorMsgTranslateComponent {
  @Input()
  message!: string;
}
