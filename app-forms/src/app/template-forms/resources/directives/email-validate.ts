import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[emailValidate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidateDirective,
      multi: true,
    },
  ],
})
export class EmailValidateDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value) {
      const allowedDomains = ['company.com', 'pe.company.com', 'company.pe'];
      const domain = value.split('@')[1];
      if (!allowedDomains.includes(domain)) {
        return { emailDomain: allowedDomains };
      }
      return null;
    }
    return null;
  }
}
