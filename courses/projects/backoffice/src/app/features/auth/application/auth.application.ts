import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Notification } from '../../../shared/services';
import { Storage } from '../../../shared/services/storage';
import { Auth } from '../domain/auth';
import { AUTH_PORT, AuthPort } from '../ports/auth.port';

@Injectable({
  providedIn: 'root',
})
export class AuthApplication {
  private readonly notification = inject(Notification);
  private readonly port: AuthPort = inject(AUTH_PORT);
  private readonly storage = inject(Storage);
  private readonly router = inject(Router);

  async signIn(auth: Auth) {
    const response = await this.port.signIn(auth);

    if (!response) {
      this.notification.show('Invalid email or password. Please try again.');
    } else {
      this.storage.setItem('tokens', JSON.stringify(response));
      this.notification.show('Sign-in successful!');
      this.router.navigate(['/app', 'courses']);
    }
  }

  async signOut() {
    this.storage.removeItem('tokens');
    await this.port.signOut();
    this.notification.show('Sign-out successful!');
    this.router.navigate(['/auth', 'sign-in']);
  }
}
