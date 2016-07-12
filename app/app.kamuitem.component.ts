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

  constructor() {
    this.data =
    {
      "mac": "the-mac-address",
      "hash": "hash-for-kaa",
      "installer": "name-of-installer",
      "installationDate": "date-of-installation",
      "address": "location-of-installation",
      "location": {
        "long": "longitude",
        "lat": "latitude"
      },
      "sensorHeight": 0,
      "enabled": false,
      "status": 1,
      "swVersion": "version-of-current-software",
      "sensors": {

      },
      "activeProfiles": [
      ]
    }
  }

}
