import { Component } from '@angular/core';
import { NavComponent } from './app.nav.component';
import { HeaderComponent } from './app.header.component';
import { SectionComponent } from './app.section.component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/layout.html',
    directives: [
      ROUTER_DIRECTIVES,
      NavComponent,
      HeaderComponent,
      SectionComponent,    
    ]
    })

export class AppComponent { }
