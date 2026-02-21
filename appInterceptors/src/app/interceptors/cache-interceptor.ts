import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.method !== 'GET') {
    return next(req);
  }

  const cachedResponse = sessionStorage.getItem(req.url);
  if (cachedResponse) {
    console.log(`Respuesta para ${req.url} obtenida del caché.`);
    return of(new HttpResponse({ body: JSON.parse(cachedResponse) }));
  }

  return next(req).pipe(
    tap((evt) => {
      if (evt instanceof HttpResponse) {
        console.log(`Guardando respuesta de ${req.url} en el caché.`);
        sessionStorage.setItem(req.url, JSON.stringify(evt.body));
      }
    }),
  );
};
