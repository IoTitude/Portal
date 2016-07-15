import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import { BaasBoxService } from './services/baasbox.service';

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
