import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap((evt) => {
      if (evt instanceof HttpResponse) {
        console.log('evt', evt);
        console.log('Request URL:', req.url);
        console.log('Request Method:', req.method);
        console.log('Request Headers:', req.headers);
        console.log('Request Body:', req.body);
      }
    }),
  );
};
