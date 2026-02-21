import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const headers = {
    'x-rapidapi-host': 'rottentomato.p.rapidapi.com',
    'x-rapidapi-key': '5ead96098amshf8592d9ba0d53ebp1cad05jsn8a249c919104',
  };

  //const reqCloned = req.clone()
  //reqCloned.headers.set('x-rapidapi-host', 'rottentomato.p.rapidapi.com');
  //reqCloned.headers.set('x-rapidapi-key', '5ead96098amshf8592d9ba0d53ebp1cad05jsn8a249c919104');

  const reqCloned = req.clone({ setHeaders: headers });

  return next(reqCloned);
};
