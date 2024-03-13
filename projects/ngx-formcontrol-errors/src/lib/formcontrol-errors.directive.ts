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

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  validataStatus(status: string): void {
    if (!this.errorInfoComponent) {
      throw new Error('No error info component found');
    }

    if (!this.errorParser) {
      throw new Error('No error parser found');
    }

    if (['INVALID', 'DISABLED'].includes(status) && this.control?.touched) {
      this.errorInfoComponent.instance.message = this.errorParser.parse(
        this.control.errors as ValidationErrors
      );
    } else if (status === 'VALID' || this.control?.untouched) {
      this.errorInfoComponent.instance.message = '';
      this.errorInfoComponent.changeDetectorRef.detectChanges();
    }
  }
}
