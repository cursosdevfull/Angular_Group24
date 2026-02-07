import { CanMatchFn } from '@angular/router';

export const matchAdminGuard: CanMatchFn = (route, segments) => {
  const user = localStorage.getItem('user');

  if (!user) return false;

  const role = JSON.parse(user!).role;
  return role === 'admin' ? true : false;
};

export const matchOperatorGuard: CanMatchFn = (route, segments) => {
  const user = localStorage.getItem('user');

  if (!user) return false;

  const role = JSON.parse(user!).role;
  return role === 'operator' ? true : false;
};

export const matchRole = (...allowedRoles: string[]): CanMatchFn => {
  return (route, segments) => {
    const user = localStorage.getItem('user');

    if (!user) return false;

    const role = JSON.parse(user!).role;

    if (allowedRoles.includes(role)) {
      return true;
    }

    return false;
  };
};
