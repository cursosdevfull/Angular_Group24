import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

type Route = {
  title: string;
  path: string;
  icon: string;
};

type Routes = Route[];

@Component({
  selector: 'cdev-menu',
  imports: [RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  routes: Routes = [
    {
      title: 'Dashboard',
      path: '/app/dashboard',
      icon: 'dashboard',
    },
    {
      title: 'Courses',
      path: '/app/courses',
      icon: 'school',
    },
    {
      title: 'Schedules',
      path: '/app/schedules',
      icon: 'schedule',
    },
  ];
}
