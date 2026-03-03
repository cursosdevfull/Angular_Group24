import { Injectable } from '@angular/core';
import { Tokens } from '../../../shared/types';
import { Auth } from '../domain/auth';
import { AuthPort } from '../ports/auth.port';
import { MOCK_USERS } from './mock-users';

@Injectable()
export class AuthAdapter implements AuthPort {
  async signIn(auth: Auth): Promise<Tokens | null> {
    const { email, password } = auth.properties;

    const user = MOCK_USERS.find((u) => u.email === email && u.password === password);

    if (!user) return null;

    return {
      accessToken: user.accessToken,
      refreshToken: user.refreshToken,
    };
  }

  async signOut(): Promise<void> {}
}
