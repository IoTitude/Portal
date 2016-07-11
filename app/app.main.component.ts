import { Component } from '@angular/core';
import { NavComponent } from './app.nav.component';
import { HeaderComponent } from './app.header.component';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'main-component',
  templateUrl: 'app/templates/layout.html',
  directives: [
    ROUTER_DIRECTIVES,
    NavComponent,
    HeaderComponent
  ]
})
export class MainComponent { }
