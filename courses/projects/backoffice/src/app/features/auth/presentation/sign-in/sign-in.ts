import { Component, inject, signal } from '@angular/core';
import {
  email,
  form,
  FormField,
  minLength,
  pattern,
  required,
  SchemaPathTree,
} from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AlertError } from '@shared/components';
import { AuthApplication } from '../../application/auth.application';
import { Auth } from '../../domain/auth';

type IAuth = {
  email: string;
  password: string;
};

@Component({
  selector: 'cdev-sign-in',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormField,
    AlertError,
  ],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.scss',
})
export class SignIn {
  application = inject(AuthApplication);
  visibility = false;

  signInModel = signal<IAuth>({
    email: '',
    password: '',
  });

  signInSchema = (schema: SchemaPathTree<IAuth>) => {
    required(schema.email, { message: 'El correo electrónico es requerido' });
    pattern(schema.email, /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'El correo electrónico no es válido',
    });
    required(schema.password, { message: 'La contraseña es requerida' });
    minLength(schema.password, 6, { message: 'La contraseña debe tener al menos 6 caracteres' });
  };

  signInForm = form(this.signInModel, this.signInSchema);

  async signIn() {
    const { email, password } = this.signInModel();
    const auth = new Auth(email, password);
    await this.application.signIn(auth);
  }
}
