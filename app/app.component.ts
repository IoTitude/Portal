/*
 * Main application component
 *
 * This component ties all the others together.
 */

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './app.login.component';
import { MainComponent } from './app.main.component';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [
    MainComponent,
    LoginComponent,
    RouterOutlet
  ]
})
export class AppComponent { }
