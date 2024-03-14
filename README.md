# NgxFormControlErrorsMsgs

This is a directive that provides an uncomplicated way to show [Angular ValidationErrors](https://angular.io/api/forms/ValidationErrors) in [Reactive Forms](https://angular.io/guide/reactive-forms)

See It working on this [Demo](https://dgonzalez870.github.io/ngx-formcontrol-errors/).

You can also try it in your browser [here](https://stackblitz.com/edit/stackblitz-starters-xmrsdr?file=src%2Fapp%2Fapp.component.ts).

## Installation

`npm install --save ngx-formcontrol-errors-msgs`

## Usage

1. Import `FormcontrolErrorsDirective` in the component or module (You must import [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) too)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { FormcontrolErrorsDirective } from "ngx-formcontrol-errors-msgs";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormcontrolErrorsDirective, ReactiveFormsModule],
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.scss',
})
export class AppForm {

  constructor(private readonly formBuilder: FormBuilder) {}

  ...
}
```

2. Create a form as usual for Reactive Forms

```typescript
form = this.formBuilder.group({
  name: ["", [Validators.required, Validators.maxLength(10)]],
  email: ["", [Validators.required, Validators.email]],
});
```

3. Place the directive in the template along with [FormControlName](https://angular.io/api/forms/FormControlName)

```html
<form [formGroup]="form">
  <div class="form-row">
    <label for="name">Name</label>
    <input type="text" formControlName="name" ngxFormcontrolErrors />
  </div>
  <div class="form-row">
    <label for="name">Email</label>
    <input type="email" formControlName="email" ngxFormcontrolErrors />
  </div>
</form>
```

**Note:** :warning: This module does not provide any CSS stylesheet, see [Styling](#styling). CSS classes in the previous code are only for example purposes and are not required.

## Customize Messages

By default this module provides the following messages for
[Angular built-in Validators](https://angular.io/api/forms/Validators):

```typescript
export const Messages: KeyValueObject = {
  required: "This field is required",
  min: "The minimun allowed values is {{value}}",
  max: "The max allowed value is {{value}}",
  minlength: "The minimun allowed length is {{value}}",
  maxlength: "The max allowed length is {{value}}",
  email: "Invalid email",
  pattern: "Invalid pattern",
};
```

`{{value}}` is a string to be replaced at runtime by the actual validation reference value.
Those messages can be overrided or extended by injecting new ones using
`FORM_ERROR_MESSAGES_PROVIDER` in the [ApplicationConfig](https://angular.io/api/core/ApplicationConfig) object.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        // This message will override the default message
        required: "This is a required field",
        // This is a message for a custom validator and will extend the default
        // messages
        myCustomValidation: "There is an error",
      },
    },
    ...
  ],
};
```

## Styling

This module does not provice any CSS stylesheet or configuration,
so a custom style must be applied to fit the Look and feel of the application.

This directive attaches a `ngx-formcontrol-errors` component as siblings of the `input` elements,
styles to those components can be applied globally in the `styles.scss` of the application

```css
:root {
  --error-color: #ff0000;
}

ngx-formcontrol-errors {
  display: block;
  font-size: 0.75rem;
  color: var(--error-color);
  text-align: right;
  min-height: 1rem;
}
```

Styles can also be applied at component level using `ng-deep`

```css
::ng-deep ngx-formcontrol-errors {
  display: block;
  font-size: 0.75rem;
  color: var(--error-color);
  text-align: right;
  min-height: 1rem;
}
```
