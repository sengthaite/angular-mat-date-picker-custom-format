import { VERSION as CDK_VERSION } from '@angular/cdk';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import '@angular/localize/init';
import { VERSION as MAT_VERSION, MatNativeDateModule } from '@angular/material/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { DatepickerOverviewExample } from './example/datepicker-overview-example';

/* eslint-disable no-console */
console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

bootstrapApplication(DatepickerOverviewExample, {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
  ]
}).catch(err => console.error(err));
