import { Component } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common'; //vaihda forms tulemaan angular/forms
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ActivatedRoute } from '@angular/router';
import { BaasBoxService } from './services/baasbox.service';
import { KamuService, Kamu } from './services/kamu.service';
//import { SELECT_DIRECTIVES } from './app.ng2-select';



@Component({
    selector: 'kamu-component',
    templateUrl: 'app/templates/kamu.html',
    directives: [
      MD_TABS_DIRECTIVES,
      MD_BUTTON_DIRECTIVES,
      //SELECT_DIRECTIVES,
      NgClass,
      CORE_DIRECTIVES,
      FORM_DIRECTIVES,
      BUTTON_DIRECTIVES
    ],
    providers: [ BaasBoxService ],
})
export class KamuItemComponent {

  kamu: Kamu
  versions: any
  profiles: any
  updateVersion: any
  changeProfile: any

  constructor (private baasBoxService: BaasBoxService, private kamuService: KamuService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.kamu = kamuService.getKamu(params['id'])
          })
    this.versions = kamuService.versions
    this.profiles = kamuService.profiles
    console.log(this.versions)
    console.log(this.kamu.activeProfile)
    this.updateVersion = ""
    this.changeProfile = ""
  }

  updateChange(deviceValue: any) {
    this.updateVersion = deviceValue
  }

  updateKamu() {
    if (this.updateVersion == "") {
    console.log("Select version")
    }
    else {
    console.log(this.updateVersion);
    }
  }

  profileChange(deviceValue: any) {
    this.changeProfile = deviceValue
  }

  profileKamu() {
    if (this.changeProfile == "") {
    console.log("Select profile")
    }
    else {
    console.log(this.updateVersion);
    }
  }

  deleteKamu() {
    console.log("delete KaMU")
  }
};
