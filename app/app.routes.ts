import { provideRouter, RouterConfig } from '@angular/router';
import { LoginComponent } from './app.login.component';
import { SectionComponent }  from './app.section.component';
import { KamuListComponent }  from './app.kamulist.component';
import { DownloadComponent }  from './app.download.component';
import { MainComponent } from './app.main.component';
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
        component: SectionComponent
      },
      {
        path: 'kamulist',
        component: KamuListComponent
      },
      {
        path: 'download',
        component: DownloadComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
