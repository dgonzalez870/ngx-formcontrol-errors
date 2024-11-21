import {
  Component,
  Input,
} from '@angular/core';

import {
  ErrorMessage,
  ErrorMsgComponent,
} from 'ngx-formcontrol-errors-msgs';

import { TranslateModule } from '@ngx-translate/core';

@Component({
    // Use the same name as the default component to avoid changes to the style sheet of existing applications
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'ngx-formcontrol-errors',
    imports: [TranslateModule],
    templateUrl: './error-msg-translate.component.html'
})
export class ErrorMsgTranslateComponent implements ErrorMsgComponent {
  @Input()
  set messages(errorMessages: ErrorMessage[] | null) {
    if (!errorMessages?.length) {
      this.displayMessage = { message: '' };
      return;
    }
    this.displayMessage = errorMessages[0];
  }

  displayMessage: ErrorMessage = { message: '' };
}
