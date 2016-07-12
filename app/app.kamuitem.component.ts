import { Component } from '@angular/core';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { BaasBoxService } from './app.baasbox.service';



@Component({
    selector: 'kamu-component',
    templateUrl: 'app/templates/kamu.html',
    directives: [
      MD_TABS_DIRECTIVES,
      MD_BUTTON_DIRECTIVES
    ],
    providers: [ BaasBoxService ]
})
export class KamuItemComponent {

  data: any = null

  constructor (private baasBoxService: BaasBoxService) {
    baasBoxService.getKamus()
      .then(response => {
        //console.log(response.json().data[0]))
        this.data = response.json().data[0]
        console.log(this.data)
      })
      .catch(error => alert(error))
  }

}
