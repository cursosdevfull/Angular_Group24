import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/sign-in',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.routes').then((m) => m.routes),
  },
  {
    path: 'app',
    loadComponent: () => import('./shared/layout/layout/layout').then((m) => m.Layout),
    children: [
      {
        path: 'courses',
        loadChildren: () => import('./features/courses/courses.routes').then((m) => m.routes),
      },
      {
        path: 'schedules',
        loadChildren: () => import('./features/schedule/schedule.routes').then((m) => m.routes),
      },
    ],
  },
];
