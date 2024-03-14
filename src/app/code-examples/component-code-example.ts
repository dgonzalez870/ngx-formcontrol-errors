import hljs from 'highlight.js/lib/core';

const code = `
  import { Component } from '@angular/core';
  import {
    FormBuilder,
    ReactiveFormsModule,
    Validators,
  } from '@angular/forms';

  import {
    FormcontrolErrorsDirective
  } from 'ngx-formcontrol-errors-msgs';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      FormcontrolErrorsDirective,
      ReactiveFormsModule,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
  })
  export class AppComponent {
    title = 'ngx-form-control-errors';

    form = this.formBuilder.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(10),
        ]
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
        ]
      ],
    });

    constructor(
      private readonly formBuilder: FormBuilder
    ) {}
  }
`;

export function getComponentCode(): string {
  return hljs.highlight(code, { language: 'typescript' }).value;
}
