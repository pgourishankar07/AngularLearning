import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withComponentInputBinding())],
};


/**
 * this is where all config. for our app is written and passed to main.ts
 */