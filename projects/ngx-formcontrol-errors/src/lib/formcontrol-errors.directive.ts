import {
  ComponentRef,
  Directive,
  HostListener,
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

import { Messages } from './data';
import {
  NgxFormcontrolErrorsComponent,
} from './ngx-formcontrol-errors.component';
import { parseError } from './utils';

@Directive({
  selector: '[ngxFormcontrolErrors]',
  standalone: true,
})
export class FormcontrolErrorsDirective implements OnInit, OnDestroy {
  private errorInfoComponent: ComponentRef<NgxFormcontrolErrorsComponent> | null =
    null;
  private control: AbstractControl | null = null;
  private sub$ = new Subscription();

  @HostListener('blur')
  onBlur(): void {
    if (this.control) {
      this.control.markAsTouched();
      this.validataStatus(this.control.status);
    }
  }
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    @Optional() private readonly formControlName: FormControlName,
    @Optional() private readonly formControl: NgControl
  ) {}

  ngOnInit(): void {
    this.control = this.formControlName?.control || this.formControl?.control;

    if (!this.control) {
      throw new Error(
        'No control found, `ngxFormControlErrors` must be used with `formControlName` or `formControl`'
      );
    }

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
    console.table({
      status: this.control?.status,
      touched: this.control?.touched,
      untouched: this.control?.untouched,
      dirty: this.control?.dirty,
      pristine: this.control?.pristine,
    });
    if (['INVALID', 'DISABLED'].includes(status) && this.control?.touched) {
      this.errorInfoComponent.instance.message = this.getMessage(
        this.control.errors as ValidationErrors
      );
    } else if (status === 'VALID' || this.control?.untouched) {
      this.errorInfoComponent.instance.message = '';
      this.errorInfoComponent.changeDetectorRef.detectChanges();
    }
  }

  getMessage(errors: ValidationErrors) {
    const parsedErrors = parseError(errors);
    return Messages[parsedErrors.message];
  }
}
