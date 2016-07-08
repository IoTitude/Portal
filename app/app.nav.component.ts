import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'nav-component',
    templateUrl: 'app/templates/navbar.html',
    directives: [
      ROUTER_DIRECTIVES
    ]
})

export class NavComponent { }
