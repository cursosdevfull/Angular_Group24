import { AbstractControl, ValidationErrors } from '@angular/forms';

export const EmailValidator = (control: AbstractControl): ValidationErrors | null => {
  const allowedDomains = ['company.com', 'pe.company.com', 'company.pe'];

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
};
