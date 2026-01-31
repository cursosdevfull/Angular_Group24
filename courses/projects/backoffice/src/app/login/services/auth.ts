import { Injectable } from '@angular/core';

type User = {
  email: string;
  password: string;
}

export type Users = Array<User>;

export class Auth {
  private readonly users: Users = [
    { email: 'juan@email.com', password: '1234' },
    { email: 'maria@email.com', password: 'maria123' },
    { email: 'pedro@email.com', password: 'pedro' },
    { email: 'ana@email.com', password: 'ana2024' },
    { email: 'carlos@email.com', password: 'carlos' }
  ]

  login(email: string, password: string): boolean {
    const userFound = this.users.find(user => user.email === email && user.password === password);
    return !!userFound;
  }
}
