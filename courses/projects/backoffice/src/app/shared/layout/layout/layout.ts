import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Header } from '@shared/components/header/header';
import { Menu } from '@shared/components/menu/menu';

@Component({
  selector: 'cdev-layout',
  imports: [RouterOutlet, MatSidenavModule, Header, Menu, MatCardModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {}
