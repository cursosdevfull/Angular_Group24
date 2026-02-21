import { HttpInterceptorFn } from '@angular/common/http';
import { retry } from 'rxjs';

export const retryInterceptor: HttpInterceptorFn = (req, next) => {
  const maxRetries = 3; // Número máximo de reintentos
  return next(req).pipe(retry(maxRetries));
};
