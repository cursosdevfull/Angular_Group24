import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { email, form, FormField, minLength, pattern, required } from '@angular/forms/signals';

type UserFormModel = {
  name: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsConditions: boolean;
};

@Component({
  selector: 'app-forms-signal',
  imports: [FormField, ReactiveFormsModule],
  templateUrl: './forms-signal.html',
  styleUrl: './forms-signal.scss',
})
export class FormsSignal {
  formModel = signal<UserFormModel>({
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsConditions: false,
  });

  userForm = form(this.formModel, (f) => {
    required(f.name, { message: 'Name is required.' });
    minLength(f.name, 3, { message: 'Name must be at least 3 characters long.' });
    required(f.lastname, { message: 'Lastname is required.' });
    minLength(f.lastname, 3, { message: 'Lastname must be at least 3 characters long.' });
    required(f.email, { message: 'Email is required.' });
    email(f.email, { message: 'Email must be a valid email address.' });
    required(f.password, { message: 'Password is required.' });
    pattern(f.password, /^(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message:
        'Password must be at least 8 characters long and contain at least one uppercase letter and one number.',
    });
    required(f.confirmPassword, { message: 'Confirm Password is required.' });
    pattern(f.confirmPassword, /^(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message:
        'Confirm Password must be at least 8 characters long and contain at least one uppercase letter and one number.',
    });
  });
}
