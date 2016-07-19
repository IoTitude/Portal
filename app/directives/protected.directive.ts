/*
 * Directive that provides the 'protected' attribute
 *
 * Used with router-outlet to check if the user is logged in or not before
 * giving access to controlls. It's behavior is not very good at the moment as
 * content is allowed to load before checking the rights. Fixing this at the moment
 * would take too much time.
 */

import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { BaasBoxService } from '../services/baasbox.service';

@Directive( {
  selector: '[protected]',
  providers: [ BaasBoxService ]
})
export class ProtectedDirective {

  constructor (private router: Router, private baasBoxService: BaasBoxService) {
    baasBoxService.checkLogin()
      .then(response => console.log(response))
      .catch(() => router.navigateByUrl('/login'))
  }
}
