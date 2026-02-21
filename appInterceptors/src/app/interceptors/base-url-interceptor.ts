import { HttpInterceptorFn } from '@angular/common/http';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const requestCloned = req.clone({
    url: `${baseUrl}${req.url}`,
  })


  return next(requestCloned);
};
