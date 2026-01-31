import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from './services/auth';

@Component({
  selector: 'cdev-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [
    Auth
  ]
})
export class Login {
  // emailValue = "sergio@email.com"
  emailValue = "";
  passwordValue = "";

  constructor(private readonly auth: Auth) { }

  save(value: string) {
    this.emailValue = value.toUpperCase();
  }

  onLogin() {
    if (this.emailValue.trim() && this.passwordValue.trim()) {
      const isLoggedIn = this.auth.login(this.emailValue, this.passwordValue);
      if (isLoggedIn) {
        alert("Login successful!");
      } else {
        alert("Invalid email or password.");
      }
    } else {
      alert("Please enter both email and password.");
    }
  }
}
