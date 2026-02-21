import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordMatchValidator = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  if (password && confirmPassword && password !== confirmPassword) {
    return { passwordMismatch: 'Passwords do not match.' };
  }
  return null;
};
