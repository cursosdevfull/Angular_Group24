import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MyComponent } from './app/my-component/my-component';

bootstrapApplication(MyComponent, appConfig)
  .catch((err) => console.error(err));
