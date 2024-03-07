import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

import { FormcontrolErrorsDirective } from 'ngx-formcontrol-errors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormcontrolErrorsDirective, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-form-control-errors';

  form = this.formBuilder.group({
    name: [
      '',
      [Validators.required, Validators.maxLength(5), Validators.email],
    ],
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}
