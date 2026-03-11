import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { routes } from './app.routes';
import { AuthAdapter } from './features/auth/adapters/auth';
import { AUTH_PORT } from './features/auth/ports/auth.port';
import { COURSE_PORT } from './features/courses/ports/course.port';
import { CourseAdapter } from './features/courses/adapters/course';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { PaginatorCustom } from './core/classes/paginator-custom';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    { provide: AUTH_PORT, useClass: AuthAdapter },
    { provide: COURSE_PORT, useClass: CourseAdapter },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline', floatLabel: 'always' },
    },
    {
      provide: MatPaginatorIntl,
      useClass: PaginatorCustom,
    },
  ],
};
