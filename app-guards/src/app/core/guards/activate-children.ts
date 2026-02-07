import { ActivatedRouteSnapshot, CanActivateChildFn, RouterStateSnapshot } from '@angular/router';

export const activateChildrenGuard: CanActivateChildFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const user = localStorage.getItem('user');
  return !!user;
};
