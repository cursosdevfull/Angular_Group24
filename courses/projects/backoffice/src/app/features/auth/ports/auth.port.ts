import { InjectionToken } from '@angular/core';
import { Tokens } from '../../../shared/types';
import { Auth } from '../domain/auth';

export type AuthPort = {
  signIn: (auth: Auth) => Promise<Tokens | null>;
  signOut: () => Promise<void>;
};

export const AUTH_PORT = new InjectionToken<AuthPort>('AUTH_PORT');
