import { KeyValueObject } from '../types';

/**
 * Readable messages for the built-in valitators
 */
export const Messages: KeyValueObject = {
  required: 'This field is required',
  min: 'The minimun allowed values is {{min}}',
  max: 'The max allowed value is {{max}}',
  minlength: 'The minimun allowed length is {{requiredLength}}',
  maxlength: 'The max allowed length is {{requiredLength}}',
  email: 'Invalid email',
  pattern: 'Invalid pattern',
};
