import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';
import { BaasBoxService } from './app.baasbox.service';
import {enableProdMode} from '@angular/core';
import { KamuService } from './app.kamu.service';

//enableProdMode();


bootstrap(AppComponent, [
  APP_ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  BaasBoxService,
  disableDeprecatedForms(),
  provideForms(),
  KamuService
])
.catch(err => console.error(err));
