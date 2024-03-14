import hljs from 'highlight.js/lib/core';

const code = `
  <form [formGroup]="form">
  <div class="form-row">
    <label for="name">Name</label>
    <input
      type="text"
      formControlName="name"
      ngxFormcontrolErrors
    />
  </div>
  <div class="form-row">
    <label for="name">Email</label>
    <input
      type="email"
      formControlName="email"
      ngxFormcontrolErrors />
  </div>
  </form>
`;

export function getTemplateCode(): string {
  return hljs.highlight(code, { language: 'html' }).value;
}
