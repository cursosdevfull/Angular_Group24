import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as jwt_decode from 'jwt-decode';
import { AuthApplication } from '../../../features/auth/application/auth.application';
import { Storage } from '../../services';

@Component({
  selector: 'cdev-header',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly auth = inject(AuthApplication);
  private readonly storage = inject(Storage);
  public readonly avatarUrl: string = '';
  public readonly userName: string = '';

  constructor() {
    const tokens = this.storage.getItem('tokens');

    if (tokens) {
      const jTokens = JSON.parse(tokens);
      const payload = jwt_decode.jwtDecode(jTokens.accessToken) as {
        avatarUrl?: string;
        name?: string;
      };
      this.avatarUrl = payload.avatarUrl || '';
      this.userName = payload.name || '';
    }
  }

  signOut() {
    this.auth.signOut();
  }
}
