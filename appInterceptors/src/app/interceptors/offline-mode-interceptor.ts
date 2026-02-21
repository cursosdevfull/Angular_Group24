import { HttpInterceptorFn } from '@angular/common/http';
import { throwError } from 'rxjs';

export const offlineModeInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Verificando el estado de la conexión a Internet...', navigator.onLine);
  if (!navigator.onLine) {
    console.log('No hay conexión a Internet. La solicitud no se enviará.');
    return throwError(() => new Error('No hay conexión a Internet. La solicitud no se enviará.'));
  }
  return next(req);
};
