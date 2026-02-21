import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authenticationInterceptor } from './interceptors/authentication';
import { errorInterceptor } from './interceptors/error-interceptor';
import { loggingInterceptor } from './interceptors/logging-interceptor';
import { loadingRequestInterceptor } from './interceptors/loading-request-interceptor';
import { timeoutInterceptor } from './interceptors/timeout-interceptor';
import { baseUrlInterceptor } from './interceptors/base-url-interceptor';
import { retryInterceptor } from './interceptors/retry-interceptor';
import { offlineModeInterceptor } from './interceptors/offline-mode-interceptor';
import { requestTimingInterceptor } from './interceptors/request-timing-interceptor';
import { cacheInterceptor } from './interceptors/cache-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        offlineModeInterceptor,
        requestTimingInterceptor,
        authenticationInterceptor,
        cacheInterceptor,
        retryInterceptor,
        errorInterceptor,
        loggingInterceptor,
        loadingRequestInterceptor,
        timeoutInterceptor,
        baseUrlInterceptor,
      ]),
    ),
  ],
};
