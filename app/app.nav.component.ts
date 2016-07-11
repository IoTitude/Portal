import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'nav-component',
    templateUrl: 'app/templates/navbar.html',
    directives: [
      ROUTER_DIRECTIVES,
      MD_BUTTON_DIRECTIVES
    ]
})
export class NavComponent {
  constructor (private router: Router) { }

  logout() {
    // TODO: Remove session token from local storage
    this.router.navigateByUrl('/login')
  }
}
