/*
 * Routes for the application
 *
 * Provides the paths used by the application.
 */

import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './app.login.component';
import { StatusComponent }  from './app.status.component';
import { KamuListComponent }  from './app.kamulist.component';
import { DownloadComponent }  from './app.download.component';
import { MainComponent } from './app.main.component';
import { KamuItemComponent } from './app.kamuitem.component';
//Import more components here

export const routes: RouterConfig = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: 'status',
        component: StatusComponent
      },
      {
        path: 'kamulist',
        component: KamuListComponent,
      },
      {
        path: 'kamulist/:id',
        component: KamuItemComponent,
      },
      {
        path: 'download',
        component: DownloadComponent
      }
    ]
  },
  // Having login here enables the separation of login and layout
  {
    path: 'login',
    component: LoginComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
