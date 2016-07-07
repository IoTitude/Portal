import { provideRouter, RouterConfig } from '@angular/router';

import { SectionComponent }  from './app.section.component';
//Import more components here

export const routes: RouterConfig = [
  { path: 'status', component: SectionComponent },
  //Add more paths here
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
