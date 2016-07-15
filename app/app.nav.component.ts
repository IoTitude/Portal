import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { BaasBoxService } from './services/baasbox.service';

@Component({
    selector: 'nav-component',
    templateUrl: 'app/templates/navbar.html',
    directives: [
      ROUTER_DIRECTIVES,
      MD_BUTTON_DIRECTIVES
    ],
    providers: [ BaasBoxService ]
})
export class NavComponent {
  constructor (private router: Router, private baasBoxService: BaasBoxService) { }

  logout() {
    this.baasBoxService.logout()
      .then(() => localStorage.removeItem('token'))
      .catch(error => alert(error))
    this.router.navigateByUrl('/login')
  }
}
