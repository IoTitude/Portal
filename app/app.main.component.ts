/*
 * Component for the main view of the layout
 *
 * Handles the views of the biggest screen area, main view, in the layout.
 */

import { Component } from '@angular/core';
import { NavComponent } from './app.nav.component';
import { HeaderComponent } from './app.header.component';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { ProtectedDirective } from './directives/protected.directive';

@Component({
  selector: 'main-component',
  templateUrl: 'app/templates/layout.html',
  directives: [
    ROUTER_DIRECTIVES,
    NavComponent,
    HeaderComponent,
    ProtectedDirective
  ]
})
export class MainComponent { }
