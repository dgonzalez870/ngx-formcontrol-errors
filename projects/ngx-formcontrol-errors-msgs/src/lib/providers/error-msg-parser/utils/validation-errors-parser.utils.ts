import { ValidationErrors } from '@angular/forms';

export function validationErrors2KeyValue(
  error: ValidationErrors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
): { key: string; value: any }[] {
  const errorKeys = Object.keys(error);
  return errorKeys.map((keyError) => {
    const errorData = error[keyError];
    return { key: keyError, value: errorData };
  });
}
