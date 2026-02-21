import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AlertErrorTemplate } from '../shared/components/alert-error-template/alert-error-template';
import { EmailValidateDirective } from './resources/directives/email-validate';
import { MatchPassword } from './resources/directives/match-password';

@Component({
  selector: 'app-template-forms',
  imports: [FormsModule, EmailValidateDirective, MatchPassword, AlertErrorTemplate],
  templateUrl: './template-forms.html',
  styleUrl: './template-forms.scss',
})
export class TemplateForms {
  @ViewChild('userForm') userForm!: NgForm;

  formData = {
    name: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsConditions: false,
  };

  allowedDomains = ['company.com', 'pe.company.com', 'company.pe'];

  validateEmailDomain(email: string): boolean {
    const domain = email.split('@')[1];
    return this.allowedDomains.includes(domain);
  }

  passwordsMatch(): boolean {
    return this.formData.password === this.formData.confirmPassword;
  }

  save(form: NgForm) {
    if (
      //this.userForm.valid &&
      form.valid //&&
      //this.validateEmailDomain(this.formData.email) &&
      //this.passwordsMatch()
    ) {
      console.log('Form is valid');
    } else {
      console.log('Form is invalid');
      form.form.markAllAsTouched();
    }

    //console.log(this.userForm);
    //console.log(form.controls['name']);}
    /*     console.log('required', form.controls['name'].hasError('required'));
    console.log('minlength', form.controls['name'].hasError('minlength'));
    console.log(form); */
  }

  resetForm(form: NgForm) {
    form.resetForm();

    /*     this.formData = {
      name: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      termsConditions: false,
    }; */
  }
}
