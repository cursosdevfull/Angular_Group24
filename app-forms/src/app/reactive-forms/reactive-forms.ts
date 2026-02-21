import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertErrorReactive } from '../shared/components/alert-error-reactive/alert-error-reactive';
import { EmailValidator } from './resources/validators/email';
import { passwordMatchValidator } from './resources/validators/match';

@Component({
  selector: 'app-reactive-forms',
  imports: [ReactiveFormsModule, JsonPipe, AlertErrorReactive],
  templateUrl: './reactive-forms.html',
  styleUrl: './reactive-forms.scss',
})
export class ReactiveForms {
  formData = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsConditions: false,
  };

  fg!: FormGroup;

  constructor() {
    this.createForm();
  }

  createForm() {
    this.fg = new FormGroup(
      {
        name: new FormControl(this.formData.name, [Validators.required, Validators.minLength(3)]),
        lastname: new FormControl(this.formData.lastname, [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl(this.formData.email, [
          Validators.required,
          Validators.email,
          EmailValidator,
        ]),
        password: new FormControl(this.formData.password, [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/),
        ]),
        confirmPassword: new FormControl(this.formData.confirmPassword, [
          Validators.required,
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/),
        ]),
        termsConditions: new FormControl(this.formData.termsConditions, [Validators.requiredTrue]),
      },
      passwordMatchValidator,
    );
  }

  save() {
    console.log(this.fg);
    if (this.fg.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
      this.fg.markAllAsTouched();
    }
  }

  resetForm() {
    this.fg.reset();
  }
}
