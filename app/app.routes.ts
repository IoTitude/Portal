import { provideRouter, RouterConfig } from '@angular/router';

import { SectionComponent }  from './app.section.component';
import { KamuListComponent }  from './app.kamulist.component';
import { DownloadComponent }  from './app.download.component';
//Import more components here

export const routes: RouterConfig = [
  { path: 'status', component: SectionComponent },
  { path: 'kamulist', component: KamuListComponent },
  { path: 'download', component: DownloadComponent },
  //Add more paths here
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
