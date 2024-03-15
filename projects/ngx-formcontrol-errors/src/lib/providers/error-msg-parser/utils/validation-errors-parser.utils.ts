import { ValidationErrors } from '@angular/forms';

export function validationErrors2KeyValue(
  error: ValidationErrors
): { key: string; value: string }[] {
  const errorKeys = Object.keys(error);
  return errorKeys.map((keyError) => {
    let val = null;
    switch (keyError) {
      case 'minlength':
        val = error[keyError].requiredLength;
        break;
      case 'maxlength':
        val = error[keyError].requiredLength;
        break;
      default:
        val = error[keyError][keyError];
        break;
    }
    return { key: keyError, value: val };
  });
}
