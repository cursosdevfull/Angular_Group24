import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[matchPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MatchPassword,
      multi: true,
    },
  ],
})
export class MatchPassword implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: 'Passwords do not match.' };
    }
    return null;
  }
}
