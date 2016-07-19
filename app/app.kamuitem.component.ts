/*
 * KaMU item component
 *
 * Provides the functionality for the detail view of a KaMU.
 */

import { Component } from '@angular/core';
import { CORE_DIRECTIVES, NgClass} from '@angular/common';
import { FORM_DIRECTIVES } from '@angular/forms'
import { BUTTON_DIRECTIVES } from 'ng2-bootstrap/ng2-bootstrap'
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { ActivatedRoute } from '@angular/router';
import { BaasBoxService } from './services/baasbox.service';
import { KamuService, Kamu } from './services/kamu.service';

@Component({
    selector: 'kamu-component',
    templateUrl: 'app/templates/kamu.html',
    directives: [
      MD_TABS_DIRECTIVES,
      MD_BUTTON_DIRECTIVES,
      NgClass,
      CORE_DIRECTIVES,
      FORM_DIRECTIVES,
      BUTTON_DIRECTIVES
    ],
    providers: [ BaasBoxService ]
})
export class KamuItemComponent {

  kamu: Kamu
  versions: any
  profiles: any
  newVersion: string
  newProfile: string

  constructor (private baasBoxService: BaasBoxService, private kamuService: KamuService, private route: ActivatedRoute) {
    // Get the id parameter from url and then get the matching KaMU
    route.params.subscribe(params => {
      this.kamu = kamuService.getKamu(params['id'])
    })
    this.versions = kamuService.versions
    this.profiles = kamuService.profiles
    this.newVersion = ""
    this.newProfile = ""
  }

  // Set newVersion
  setNewVersion (newVersion: string) {
    this.newVersion = newVersion
  }

  // Update software version of a KaMU
  updateVersion () {
    if (this.newVersion == "") {
      alert("Select version")
    }
    else {
      this.kamu.swVersion = this.newVersion
      // TODO: Move datetime to form
      let datetime = "15-07-2016T12:00:00"
      this.baasBoxService.updateVersion(this.kamu, datetime)
        .then(response => console.log(response))
        .catch(error => alert(error))
    }
  }

  // Set newProfile
  setNewProfile (newProfile: any) {
    this.newProfile = newProfile
  }

  // Update the active profile of a KaMU
  updateProfile () {
    if (this.newProfile == "") {
      alert("Select profile")
    }
    else {
      this.kamu.activeProfile = this.newProfile
      // TODO: Move datetime to form
      let datetime = "15-07-2016T12:00:00"
      this.baasBoxService.updateProfile(this.kamu, datetime)
        .then(response => console.log(response))
        .catch(error => alert(error))
    }
  }

  // Restart a KaMU
  restartKamu() {
    let datetime = "15-07-2016T12:00:00"
    this.baasBoxService.restartKamu(this.kamu, datetime)
      .then(response => console.log(response))
      .catch(error => alert(error))
  }
};
