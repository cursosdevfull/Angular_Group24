import { ApplicationConfig, importProvidersFrom, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { ProductService } from './services/product.service';
import { AlertModule } from './modules/alerts/alert.module';
import { StaffModule } from './modules/staff/staff.module';

// export class MyOwnClass { }
export const MyOwnClass = new InjectionToken<MyClass>("MyOwnClass");

export class MyClass {
  getName() {
    return "This is MyClass";
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(AlertModule.forRoot({ important: false }), StaffModule.forRoot({ environment: "production", apiKey: "PRODUCTION_API_KEY" })),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: MyOwnClass,
      useClass: MyClass
    },
    {
      provide: "environment",
      useValue: "staging"
    },
    {
      provide: "kindOfApplication",
      useValue: "Enterprise App"
    },
    {
      provide: "API",
      useFactory: (env: string, kindOfApp: string) => {
        if (env === "production") {
          return {
            url: "https://api.production.com",
            authorizationType: "Bearer",
            appType: kindOfApp
          };
        } else {
          return {
            url: "https://api.staging.com",
            authorizationType: "Basic",
            appType: kindOfApp
          };
        }
      },
      deps: ["environment", "kindOfApplication"]
    }
    /*{
      provide: ProductService,
      useClass: ProductService
    }*

    /*  {
       provide: "MyService",
       useClass: ProductService
     } */
  ]
};
