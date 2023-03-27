import { InjectionToken } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import APP_ROUTES from '@core/configs/app.routing';
import { AppComponent } from './app/app.component';

export const BACKEND_URL = new InjectionToken<string>('http://localhost:4000');

bootstrapApplication(AppComponent, {
  providers: [
    { provide: BACKEND_URL, useValue: 'http://localhost:4000' },
    provideRouter(APP_ROUTES),
  ],
});
