import { CanMatchFn } from '@angular/router';

export const testGuard: CanMatchFn = (route, segments) => {
  return true;
};
