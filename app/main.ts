/*
 * Main
 *
 * Used for starting the project.
 */

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { BaasBoxService } from './services/baasbox.service';
import {enableProdMode} from '@angular/core';
import { KamuService } from './services/kamu.service';

// Uncomment to enable production mode
//enableProdMode();


bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  BaasBoxService,
  disableDeprecatedForms(),
  provideForms(),
  KamuService // By setting KamuService here it's same instance is available throughout the application
])
.catch(err => console.error(err));
