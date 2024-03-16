import { Component } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormcontrolErrorsDirective } from 'ngx-formcontrol-errors';

import {
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormcontrolErrorsDirective, ReactiveFormsModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngx-translate-demo-app';

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly translateService: TranslateService
  ) {}

  reset(): void {
    this.form.reset();
  }

  changeLang(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const lang = target.value;
    this.translateService.use(lang);
  }
}
