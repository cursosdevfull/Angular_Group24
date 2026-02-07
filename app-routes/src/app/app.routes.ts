import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { NotFound } from './not-found/not-found';
import { UserActivitiesSocialMedia } from './user-activities-social-media/user-activities-social-media';
import { UserDetail } from './user-detail/user-detail';
import { UserReport } from './user-report/user-report';
import { User } from './user/user';
import { ProductService } from './products/services/product-service';

export const routes: Routes = [
  {
    path: '', // default route, matches the empty path
    component: Home,
    //outlet: 'main',
  },
  { path: 'login', component: Login /*, outlet: 'main'*/ },
  {
    path: 'user', // matches '/user', exact match
    component: User,
    //outlet: 'sidebar',
  },
  {
    path: 'user/summary', // matches '/user/summary', exact match
    //component: UserSummary,
    loadComponent: () => import('./user-summary/user-summary').then((m) => m.UserSummary),
    //outlet: 'sidebar',
  },
  {
    path: 'user/:id', // matches '/user/123', where '123' is a dynamic parameter
    component: UserDetail,
    //outlet: 'main',
  },
  {
    path: 'user/:id/report', // matches '/user/123/report', where '123' is a dynamic parameter
    component: UserReport,
    //outlet: 'sidebar',
  },
  {
    path: 'user/:id/activities/:social-media', // matches '/user/123/activities/facebook', where '123' and 'facebook' are dynamic parameters
    component: UserActivitiesSocialMedia,
  },
  {
    path: 'products',
    loadChildren: () => import('./products/product.routes').then((m) => m.productRoutes),
    providers: [ProductService],
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/report-routes').then((m) => m.reportRoutes),
  },
  {
    path: '**', // wildcard route, matches any path not matched by previous routes
    component: NotFound,
    //redirectTo: '/login',
  },
];
