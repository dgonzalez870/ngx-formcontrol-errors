import {
  Component,
  DebugElement,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { By } from '@angular/platform-browser';

import { Messages } from './data';
import { FormcontrolErrorsDirective } from './formcontrol-errors.directive';

// Dummy component for testing the directive
@Component({
  template: `
    <form [formGroup]="form">
      <div>
        <label for="name">Name</label>
        <input
          id="name"
          type="text"
          ngxFormcontrolErrors
          formControlName="name"
        />
      </div>
    </form>
  `,
})
class FormControlTestComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
    });
  }
}

describe('FormcontrolErrorsDirective', () => {
  let fixture: ComponentFixture<FormControlTestComponent>;
  let controls: DebugElement[];

  beforeEach(async () => {
    // Configure testing environment
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormcontrolErrorsDirective],
      declarations: [FormControlTestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormControlTestComponent);
    fixture.detectChanges();
    controls = fixture.debugElement.queryAll(
      By.directive(FormcontrolErrorsDirective)
    );
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have one control', () => {
    expect(controls.length).toBe(1);
  });

  it('should create a `ngx-formcontrol-errors`', () => {
    const errorComponent = fixture.debugElement.query(
      By.css('ngx-formcontrol-errors')
    );

    expect(errorComponent).toBeTruthy();
  });

  it('should trigger `blur` event', () => {
    const input = controls[0];
    const control = controls[0].injector.get(FormcontrolErrorsDirective, null, {
      optional: false,
    });

    spyOn<FormcontrolErrorsDirective>(
      control as FormcontrolErrorsDirective,
      'onBlur'
    );
    input.triggerEventHandler('blur', null);
    fixture.detectChanges();

    expect(control?.onBlur).toHaveBeenCalled();
  });

  it('should have a `required` error displayed', () => {
    const input = controls[0];
    input.triggerEventHandler('blur', null);

    fixture.detectChanges();

    const errorComponent = fixture.debugElement.query(
      By.css('ngx-formcontrol-errors')
    ).nativeElement;

    expect(errorComponent.innerText).toBe(Messages['required']);
  });

  it('should not display any error if all validations are passed successfully', () => {
    const debugElement = controls[0];

    const testComponent = fixture.componentInstance;
    testComponent.form.setValue({
      name: 'Joe Doe',
    });

    debugElement.triggerEventHandler('blur', null);
    fixture.detectChanges();

    const errorComponent = fixture.debugElement.query(
      By.css('ngx-formcontrol-errors')
    ).nativeElement as HTMLElement;

    expect(errorComponent.innerText).toBe('');
  });
});
