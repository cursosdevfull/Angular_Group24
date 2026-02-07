import { Routes } from '@angular/router';
import { activeGuard } from './core/guards/active';
import { Graphs } from './features/dashboard/components/graphs/graphs';

export const routes: Routes = [
  {
    path: '',
    component: Graphs,
  },
  {
    path: 'users',
    canActivate: [activeGuard],
    loadChildren: () => import('./features/users/user.routes').then((m) => m.routes),
  },
  {
    path: 'reports',
    loadChildren: () => import('./features/reports/report.routes').then((m) => m.routes),
  },
];
