import hljs from 'highlight.js/lib/core';

const code = `
  .form-row {
    display: block;

    label {
      display: inline-block;
      margin-bottom: 0.5rem;
    }

    input {
      display: block;
      width: 100%;
      line-height: 1.5;
      box-sizing: border-box;
      border-width: 2px;
      border-style: solid;

      &.ng-invalid.ng-touched {
        border-color: var(--error-color);
        outline: var(--error-color);
      }
    }
  }

  ::ng-deep ngx-formcontrol-errors {
    display: block;
    font-size: 0.75rem;
    color: var(--error-color);
    text-align: right;
    min-height: 1rem;
  }
`;

export function getStyleCode(): string {
  return hljs.highlight(code, { language: 'scss' }).value;
}
