import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FormcontrolErrorsDirective } from 'ngx-formcontrol-errors-msgs';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormcontrolErrorsDirective, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Ngx-formcontrol-errors-msgs Angular I18N demo';
  description = $localize`This example shows the results of integrating
    <b><a href="https://github.com/dgonzalez870/ngx-formcontrol-errors#readme">ngx-form-control-errors-msgs</a></b> 
     with <b><a href="https://angular.io/guide/i18n-overview">Angular I18N</a></b>.
     Choose a language.
  `;

  readCode = $localize`Read the source code <b><a href="https://github.com/dgonzalez870/ngx-formcontrol-errors/tree/main/projects/angular-i18n-demo">here</a></b>`;

  readDocs = $localize`Read the docs <b><a href="https://github.com/dgonzalez870/ngx-formcontrol-errors#readme">here</a></b>`;

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.email]],
  });

  languageControl = new FormControl('en');

  private sub$ = new Subscription();

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    const langRegex = /(.*)\/(\w{2})\/?$/;
    const match = langRegex.exec(location.href);

    if (match?.length) {
      this.languageControl.setValue(match[2]);
    }

    this.sub$.add(
      this.languageControl.valueChanges.subscribe((val) => {
        location.href = location.href.replace(langRegex, `$1/${val}/`);
      })
    );
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  reset(): void {
    this.form.reset();
  }
}
