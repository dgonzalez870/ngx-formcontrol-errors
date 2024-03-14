import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormcontrolErrorsDirective } from 'ngx-formcontrol-errors';

import {
  SourceCodeContainerComponent,
} from './source-code-container/source-code-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FormcontrolErrorsDirective,
    ReactiveFormsModule,
    SourceCodeContainerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-form-control-errors';

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  reset(): void {
    this.form.reset();
  }
}
