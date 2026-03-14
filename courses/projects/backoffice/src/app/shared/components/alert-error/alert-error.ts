import { Component, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { FieldState, ValidationError } from '@angular/forms/signals';
import { MAT_ERROR } from '@angular/material/form-field';

@Component({
  selector: 'cdev-alert-error',
  imports: [],
  templateUrl: './alert-error.html',
  styleUrl: './alert-error.scss',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'mat-mdc-form-field-error mat-mdc-form-field-bottom-align' },
  providers: [{ provide: MAT_ERROR, useExisting: forwardRef(() => AlertError) }],
})
export class AlertError {
  @Input() title!: string;
  @Input() control!: FieldState<any, string>;

  getErrorMessages(
    title: string,
    control: FieldState<any, string>,
  ): { id: number; message: string }[] {
    let count = 0;

    if (control.errors() && control.errors().length > 0 && control.touched()) {
      const listErrors = [];

      for (const error of control.errors()) {
        switch (error.kind) {
          case 'required':
            listErrors.push({ id: count++, message: error.message || '' });
            break;
          case 'minLength':
            const requiredLength = (error as ValidationError.WithField & { minLength: number })
              .minLength;
            const actualLength = control.value().length;
            listErrors.push({
              id: count++,
              message: `${error.message}. Current length: ${actualLength}. Required minimum length: ${requiredLength}.`,
            });
            break;
          case 'email':
            listErrors.push({ id: count++, message: error.message || '' });
            break;
          case 'pattern':
            const actualValue = control.value();
            const requiredPattern = error.fieldTree().pattern()[0];
            listErrors.push({
              id: count++,
              message: `${error.message}. Expected pattern: ${requiredPattern}, but got: ${actualValue}.`,
            });
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
