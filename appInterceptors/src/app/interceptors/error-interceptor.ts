import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error) => {
      console.error('An error occurred:', error.status, error.message);

      if (error.status >= 400 && error.status < 500) {
        console.error('Client-side error:', error.message);
      } else if (error.status >= 500) {
        console.error('Server-side error:', error.message);
      }

      return throwError(() => new Error('Something went wrong. Please try again later.'));
    }),
  );
};
