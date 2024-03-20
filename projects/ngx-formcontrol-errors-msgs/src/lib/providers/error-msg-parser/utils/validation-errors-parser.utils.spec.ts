import { validationErrors2KeyValue } from './validation-errors-parser.utils';

describe('validationErrors2KeyValue', () => {
  it('should transform into array a `ValidationErrors` object', () => {
    const result = validationErrors2KeyValue({
      required: true,
      min: {
        min: 5,
        actual: 3,
      },
      max: {
        max: 5,
        actual: 7,
      },
      email: true,
      minLength: {
        requiredLength: 5,
        actualLength: 3,
      },
      maxLength: {
        requiredLength: 5,
        actualLength: 10,
      },
    });

    expect(result).toEqual([
      {
        key: 'required',
        value: true,
      },
      {
        key: 'min',
        value: {
          min: 5,
          actual: 3,
        },
      },
      {
        key: 'max',
        value: {
          max: 5,
          actual: 7,
        },
      },
      {
        key: 'email',
        value: true,
      },
      {
        key: 'minLength',
        value: {
          requiredLength: 5,
          actualLength: 3,
        },
      },
      {
        key: 'maxLength',
        value: {
          requiredLength: 5,
          actualLength: 10,
        },
      },
    ]);
  });
});
