import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';
import { Loading } from '../loading';
import { delay } from 'rxjs';

export const loadingRequestInterceptor: HttpInterceptorFn = (req, next) => {
  const loading = inject(Loading);

  loading.setRequestLoading(true);

  return next(req).pipe(
    delay(2000),
    finalize(() => {
      loading.setRequestLoading(false);
    }),
  );
};
