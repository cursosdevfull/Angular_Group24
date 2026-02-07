import { Routes } from '@angular/router';
import { UserList } from './components/user-list/user-list';
import { deactivateGuard } from '../../core/guards/deactivate';

export const routes: Routes = [
  {
    path: '',
    component: UserList,
  },
  {
    path: 'form',
    canDeactivate: [deactivateGuard],
    loadComponent: () => import('./components/user-form/user-form').then((m) => m.UserForm),
  },
];
