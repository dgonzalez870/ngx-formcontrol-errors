import {
  ComponentRef,
  Directive,
  HostListener,
  Inject,
  OnDestroy,
  OnInit,
  Optional,
  ViewContainerRef,
} from '@angular/core';
import {
  AbstractControl,
  FormControlName,
  NgControl,
  ValidationErrors,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import {
  NgxFormcontrolErrorsComponent,
} from './ngx-formcontrol-errors.component';
import {
  ERROR_MSG_PARSER,
  ErrorMsgParser,
  ErrorMsgParserService,
} from './providers/error-msg-parser';

/**
 * Allows ease way to display `ValidationErrors` in a form.
 *
 * @example
 *
 * ```typescript
 * @Component({
 *  selector: 'app-form',
 *  standalone: true,
 *  imports: [FormcontrolErrorsDirective, ReactiveFormsModule],
 *  template: `
 *    <form [formGroup]="form">
 *     <div class="form-row">
 *       <label for="name">Name</label>
 *       <input id="name" type="text" formControlName="name" ngxFormcontrolErrors>
 *     </div>
 *     <div class="form-row">
 *       <label for="email">Email</label>
 *       <input id="email" type="email" formControlName="email" ngxFormcontrolErrors>
 *     </div>
 *    </form>
 *  `
 * })
 * export class AppComponent {
 *
 *  form = this.formBuilder.group({
 *    name: ['', [Validators.required, Validators.maxLength(10)]],
 *    email: ['', [Validators.required, Validators.email]],
 *  });
 *
 * }
 * ```
 *
 */
@Directive({
  selector: '[ngxFormcontrolErrors]',
  standalone: true,
})
export class FormcontrolErrorsDirective implements OnInit, OnDestroy {
  private errorInfoComponent: ComponentRef<NgxFormcontrolErrorsComponent> | null =
    null;
  private control: AbstractControl | null = null;
  private sub$ = new Subscription();
  private errorParser?: ErrorMsgParser;

  /**
   * @internal
   */
  @HostListener('blur')
  onBlur(): void {
    if (this.control) {
      this.control.markAsTouched();
      this.validataStatus(this.control.status);
    }
  }
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly errorMsgParser: ErrorMsgParserService,
    @Optional() private readonly formControlName: FormControlName,
    @Optional() private readonly formControl: NgControl,
    @Optional()
    @Inject(ERROR_MSG_PARSER)
    private readonly customErrorMsgParser: ErrorMsgParser
  ) {}

  /**
   * @internal
   */
  ngOnInit(): void {
    this.control = this.formControlName?.control || this.formControl?.control;

    if (!this.control) {
      throw new Error(
        'No control found, `ngxFormControlErrors` must be used with `formControlName` or `formControl`'
      );
    }

    this.errorParser = this.customErrorMsgParser || this.errorMsgParser;

    this.errorInfoComponent = this.viewContainerRef.createComponent(
      NgxFormcontrolErrorsComponent
    );

    this.sub$.add(
      this.control.statusChanges?.subscribe((status) => {
        this.validataStatus(status);
      })
    );
  }

  /**
   * @internal
   */
  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  /**
   * @internal
   */
  validataStatus(status: string): void {
    if (!this.errorInfoComponent) {
      throw new Error('No error info component found');
    }

    if (!this.errorParser) {
      throw new Error('No error parser found');
    }

    if ('INVALID' === status && this.control?.touched) {
      this.errorInfoComponent.instance.message = this.errorParser.parse(
        this.control.errors as ValidationErrors
      );
    } else if (
      'DISABLED' === status ||
      status === 'VALID' ||
      this.control?.untouched
    ) {
      this.errorInfoComponent.instance.message = '';
      this.errorInfoComponent.changeDetectorRef.detectChanges();
    }
  }
}
