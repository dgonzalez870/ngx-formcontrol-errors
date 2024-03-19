# NgxFormControlErrorsMsgs

This is a directive that provides an uncomplicated way to display [Angular ValidationErrors](https://angular.io/api/forms/ValidationErrors) in [Reactive Forms](https://angular.io/guide/reactive-forms)

See It working on this [demo](https://dgonzalez870.github.io/ngx-formcontrol-errors/).

You can also try it in your browser [here](https://stackblitz.com/edit/stackblitz-starters-xmrsdr?file=src%2Fapp%2Fapp.component.ts).

## Installation

`npm install --save ngx-formcontrol-errors-msgs`

## Usage

1. Import `FormcontrolErrorsDirective` in the component (You must import [ReactiveFormsModule](https://angular.io/api/forms/ReactiveFormsModule) too)

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
  min: "The minimun allowed values is {{min}}",
  max: "The max allowed value is {{max}}",
  minlength: "The minimun allowed length is {{requiredLength}}",
  maxlength: "The max allowed length is {{requiredLength}}",
  email: "Invalid email",
  pattern: "Invalid pattern",
};
```

Strings enclosed in double brackets, like `{{min}}`, `{{max}}`, `{{requiredLength}}`, are replaced at runtime by the actual validation reference value.
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
        required: "This is a <b>required</b> field",
        // This is a message for a custom validator and will extend the default
        // messages
        myCustomValidation: "There is an error",
      },
    },
    ...
  ],
};
```

HTML tags are allowed.

## Internationalization (I18N)

### 1. Angular I18N

If the application uses [Angular Internationalization](https://angular.io/guide/i18n-overview),
`FORM_ERROR_MESSAGES_PROVIDER` could be provided using `$localize` after adding all necessary settings for
**Angular I18N**

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        required: $localize `This field is required`,
        min: $localize `The minimun allowed values is {{min}}`,
        max: $localize `The max allowed value is {{max}}`,
        minlength: $localize `The minimun allowed length is {{requiredLength}}`,
        maxlength: $localize `The max allowed length is {{requiredLength}}`,
        email: $localize `Invalid email`,
        pattern: $localize `Invalid pattern`,
      },
    },
    ...
  ],
};
```

### 2. NGX-TRANSLATE

If the application uses [ngx-translate](https://github.com/ngx-translate/core), the following settings are required:

1. Install the [message parser service for `ngx-translate`](https://www.npmjs.com/package/ngx-formcontrol-msgs-translate-parser)

```sh
npm install --save ngx-formcontrol-msgs-translate-parser
```

2. Provide `ERROR_MSG_COMPONENT_FACTORY` in `ApplicationConfig` using class `TranslateErrorMsgComponentFactoryService`

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: ERROR_MSG_COMPONENT_FACTORY,
      useClass: TranslateErrorMsgComponentFactoryService,
    },
    ...
  ],
};
```

3. Add the messages in the locale file of each language (as usual for `ngx-translate`)

**English (en.json)**

```json
{
  ...
  "FORM_ERROR_MESSAGES": {
    "REQUIRED": "This field is required",
    "MIN": "The minimun allowed values is {{min}}",
    "MAX": "The max allowed value is {{max}}",
    "MINLENGTH": "The minimun allowed length is {{requiredLength}}",
    "MAXLENGTH": "The max allowed length is {{requiredLength}}",
    "EMAIL": "Invalid email",
    "PATTERN": "Invalid pattern",
    "CUSTOM": "Ups, something went wrong",
    ...
  }
  ...
}
```

**Spanish (es.json)**

```json
{
  ...
  "FORM_ERROR_MESSAGES": {
    "REQUIRED": "Este campo es obligatorio",
    "MIN": "El mínimo valor permitido es {{min}}",
    "MAX": "El máximo valor permitido es {{max}}",
    "MINLENGTH": "El mínimo número de caracteres es {{requiredLength}}",
    "MAXLENGTH": "El máximo número de caracteres es {{requiredLength}}",
    "EMAIL": "Email inválido",
    "PATTERN": "Entrada inválida",
    "CUSTOM": "Ups, Algo salió mal",
    ...
  }
  ...
}
```

4. Provide `FORM_ERROR_MESSAGES_PROVIDER` referencing the values in the locale files

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: FORM_ERROR_MESSAGES_PROVIDER,
      useValue: {
        required: "FORM_ERROR_MESSAGES.REQUIRED",
        min: "FORM_ERROR_MESSAGES.MIN",
        max: "FORM_ERROR_MESSAGES.MAX",
        minlength: "FORM_ERROR_MESSAGES.MINLENGTH",
        maxlength: "FORM_ERROR_MESSAGES.MAXLENGTH",
        email: "FORM_ERROR_MESSAGES.EMAIL",
        pattern: "FORM_ERROR_MESSAGES.PATTERN",
        custom: "FORM_ERROR_MESSAGES.CUSTOM",
        ...
      },
    },
    ...
  ],
};
```

### 3. Other I18N methods

If the application uses I18N methods other than [NGX-TRANSLATE](#2-ngx-translate) or [Angular I18N](#1-angular-i18n), there are two posible aproaches: [service driven](#31-service-driven), [component driven](#32-component-driven)

#### 3.1 Service driven

1. Create a class or service that implements `ErrorMsgParser` and override the method `parse` to return customized translations that could reliy on a custom I18N service

```typescript

@Injectable({
  ...
})
export class CustomMsgParserService implements ErrorMsgParser {
  constructor(
    private readonly i18nService: CustomI18NService,
    @Inject(FORM_ERROR_MESSAGES_PROVIDER)
    private customErrorMessages: KeyValueObject
  ) {}

  parse(error: ValidationErrors): string {
    ...
    // Develop the logic to translate `customErrorMessages` using `CustomI18NService`
    ...
  }
}

```

2. Provide `ERROR_MSG_PARSER` in `ApplicationConfig` using the custom class created in the previous step.

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: ERROR_MSG_PARSER,
      useClass: CustomMsgParserService,
    },
    ...
  ],
};
```

#### 3.2 Component Driven

Select component driven aproach whenever you want to use any existing `pipe`, like the `translate` pipe available in `ngx-translate`, this way you can provide a custom component that uses the already available pipes.

1. Create a component class that implements `ErrorMsgComponent`

```typescript

@Component({
  ...
})
export class CustomErrorMsgComponent implements ErrorMsgComponent {

  @Input()
  messages: ErrorMessage[];

  ...
}
```

`ErrorMessage` is an **interface** with two properties:

```typescript
export interface ErrorMessage {
  /**
   * String to be displayed, customized or translated
   */
  message: string;

  /**
   * ValidationError content to be replaced in the `message` string
   */
  value?: unknown;
}
```

2. Create a service that implements `ErrorMessageComponentFactory`, the `createComponent` method should return a `ComponentRef` of the component created in the previous step

```typescript
@Injectable({
  ...
})
export class CustomMsgComponentFactoryService
  implements ErrorMessageComponentFactory
{
  constructor() {}

  createComponent(viewContainerRef: ViewContainerRef): ComponentRef<CustomErrorMsgComponent> {
    return viewContainerRef.createComponent(CustomErrorMsgComponent);
  }

}

```

3. Provide `ERROR_MSG_COMPONENT_FACTORY` in `ApplicationConfig` using class `CustomMsgComponentFactoryService` (created in the previous step)

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    ...
    {
      provide: ERROR_MSG_COMPONENT_FACTORY,
      useClass: CustomMsgComponentFactoryService,
    },
    ...
  ],
};
```

## Styling

This module does not provide any CSS stylesheet or settings,
so a custom style must be applied to fit the look and feel of the application.

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

If you create a Custom error component like in [Component driven](#32-component-driven), you have to replace `ngx-formcontrol-errors` for your custom component selector.
