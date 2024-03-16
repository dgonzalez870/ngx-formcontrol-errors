import { ValidationErrors } from '@angular/forms';

export function validationErrors2KeyValue(
  error: ValidationErrors
): { key: string; value: string }[] {
  const errorKeys = Object.keys(error);
  return errorKeys.map((keyError) => {
    let val = null;
    const errorData = error[keyError];

    if (typeof errorData !== 'object') {
      return { key: keyError, value: errorData };
    }
    switch (keyError) {
      case 'minlength':
        val = errorData.requiredLength;
        break;
      case 'maxlength':
        val = errorData.requiredLength;
        break;
      default:
        val = errorData[keyError];
        break;
    }
    return { key: keyError, value: val };
  });
}
