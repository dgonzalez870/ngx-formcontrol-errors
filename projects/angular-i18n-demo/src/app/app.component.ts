import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormcontrolErrorsDirective } from 'ngx-formcontrol-errors-msgs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormcontrolErrorsDirective, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Ngx-formcontrol-errors-msgs Angular I18N demo';
  description = $localize`This example shows the results of integrating
    <b>ngx-form-control-errors-msgs</b> with <b>ngx-translate</b>.
     Choose a language.
  `;

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  reset(): void {
    this.form.reset();
  }

  changeLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    console.log({
      lang,
      href: location.href,
    });
  }
}
