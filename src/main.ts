import { InjectionToken } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import APP_ROUTES from '@core/configs/app.routing';
import { AppComponent } from './app/app.component';

export const API_URL = new InjectionToken<string>('API_URL');

bootstrapApplication(AppComponent, {
  providers: [
    { provide: API_URL, useValue: 'http://localhost:4000' },
    provideRouter(APP_ROUTES),
  ],
});
