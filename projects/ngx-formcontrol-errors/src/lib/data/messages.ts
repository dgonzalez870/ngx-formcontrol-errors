export const Messages: { [key: string]: string } = {
  required: 'This field is required',
  min: 'The minimun allowed values is {{value}}',
  max: 'The max allowed value is {{value}}',
  minlength: 'The minimun allowed length is {{value}}',
  maxlength: 'The max allowed length is {{value}}',
  email: 'Invalid email',
  pattern: 'Invalid pattern',
};


/**
 * formato de errores
 *
 * maxlength: { actualLength: number, requiredLength: number }
 * minlength: { actualLength: number, requiredLength: number }
 * min: { actual: number, min: number }
 * max: { actual: number, max: number }
 * pattern: { actualValue: string, requiredPattern: string }
 */