import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, delay, throwError, timeout } from 'rxjs';

export const timeoutInterceptor: HttpInterceptorFn = (req, next) => {
  const timeoutDuration = 5000; // Tiempo de espera en milisegundos (5 segundos)

  return next(req).pipe(
    delay(3000),
    timeout(timeoutDuration),

    catchError((error) => {
      if (error.name === 'TimeoutError') {
        console.error('La solicitud ha superado el tiempo de espera.');
        return throwError(() => new Error('La solicitud ha superado el tiempo de espera.'));
      }
      return throwError(() => error);
    }),
  );
};
