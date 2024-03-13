import { KeyValueObject } from '../types';

/**
 * Readable messages for the built-in valitators
 */
export const Messages: KeyValueObject = {
  required: 'This field is required',
  min: 'The minimun allowed values is {{value}}',
  max: 'The max allowed value is {{value}}',
  minlength: 'The minimun allowed length is {{value}}',
  maxlength: 'The max allowed length is {{value}}',
  email: 'Invalid email',
  pattern: 'Invalid pattern',
};
