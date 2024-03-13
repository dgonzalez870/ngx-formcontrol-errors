# NgxFormControlErrors

This is a directive that provides an uncomplicated way to show [Angular ValidationErrors](https://angular.io/api/forms/ValidationErrors) in [Reactive Forms](https://angular.io/guide/reactive-forms)

See It working on this [Demo](https://dgonzalez870.github.io/ngx-formcontrol-errors/)

## Installation

`npm install --save ngx-formcontrol-errors`

## Usage

1. Import it in the component or module (You must import [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) too)

```typescript
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";

import { FormcontrolErrorsDirective } from "ngx-formcontrol-errors";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, FormcontrolErrorsDirective, ReactiveFormsModule],
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

**Note:** CSS classes in the previous code are only for example purposes and are not required.

## Customize Messages

By default this module provides the following messages for [Angular built-in Validators](https://angular.io/api/forms/Validators):

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

`{{value}}` is a string to be replaced at runtime by the actual validation reference value. Those messages can be overrided or extended by injecting new ones using `FORM_ERROR_MESSAGES_PROVIDER` in a module or component.


```typescript
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [RouterOutlet, FormcontrolErrorsDirective, ReactiveFormsModule],
  templateUrl: './app-form.component.html',
  styleUrl: './app-form.component.scss',
  providers: [
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        // This message will override the default message
        required: "This is a required field",
        // This is a message for a custom validator and will extend the default
        // messages
        myCustomValidation: 'There is an error',
      }
    }
  ]
})
export class AppForm {

  constructor(private readonly formBuilder: FormBuilder) {}

  ...
}
```
