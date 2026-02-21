import { Component, Input } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-alert-error-template',
  imports: [],
  templateUrl: './alert-error-template.html',
  styleUrl: './alert-error-template.scss',
})
export class AlertErrorTemplate {
  @Input() title!: string;
  @Input() control!: NgModel | NgForm;

  getErrorMessages(title: string, control: NgModel | NgForm): { id: number; message: string }[] {
    //const nameControl = control.name;
    let count = 0;

    if (control.errors) {
      const listErrors = [];

      for (const error of Object.keys(control.errors)) {
        switch (error) {
          case 'required':
            listErrors.push({ id: count++, message: `${title} is required.` });
            break;
          case 'minlength':
            const requiredLength = control.errors['minlength'].requiredLength;
            const actualLength = control.errors['minlength'].actualLength;
            listErrors.push({
              id: count++,
              message: `${title} must be at least ${requiredLength} characters long. Current length: ${actualLength}.`,
            });
            break;
          case 'email':
            listErrors.push({ id: count++, message: `${title} must be a valid email address.` });
            break;
          case 'emailDomain':
            const allowedDomains = control.errors['emailDomain'];
            listErrors.push({
              id: count++,
              message: `${title} must have a valid domain. Allowed domains are: ${allowedDomains.join(', ')}.`,
            });
            break;

          case 'pattern':
            const actualValue = control.value;
            const requiredPattern = control.errors['pattern'].requiredPattern;
            listErrors.push({
              id: count++,
              message: `${title} has an invalid format. Expected pattern: ${requiredPattern}, but got: ${actualValue}.`,
            });
            break;

          case 'passwordMismatch':
            listErrors.push({ id: count++, message: `${title} passwords do not match.` });
            break;

          default:
            listErrors.push({ id: count++, message: `${title} has an error: ${error}` });
            break;
        }
      }

      return listErrors.length > 0 ? listErrors : [];
    }

    return [];
  }
}
