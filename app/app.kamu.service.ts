/*
 * Service for handling kamus
 *
 * Service that keeps track of kamus so that other components can call for them
 * as needed. It uses the BaasBoxService to make calls to the BaasBox REST API.
 */

import { Injectable } from '@angular/core'
import { BaasBoxService } from './app.baasbox.service'

export class Location {
  long: string
  lat: string
}

export class Kamu {
  mac: string
  hash: string
  installer: string
  installationDate: string
  address: string
  location: Location
  sensorHeight: number
  enabled: boolean
  status: number
  swVersion: string
  sensors: string[]
  activeProfiles: string[]
}

@Injectable()
export class KamuService {

  kamus: Kamu[] = []

  constructor (private baasBoxService: BaasBoxService) { }

  // Update the list of all available kamus
  update () {
    this.baasBoxService.getKamus()
      .then(response => {
        let rawData = response.json().data
        // Parse kamu data from response data.
        for (let rawKamu of rawData) {
          this.kamus.push(this.parseKamu(rawKamu))
        }
      })
      .catch(error => alert(error))
  }

  // Parse Kamu from raw kamu data
  private parseKamu (rawKamu: any) {
    let kamu = new Kamu()

    // Copy relevant information and drop others
    kamu.mac = rawKamu.mac
    kamu.hash = rawKamu.hash
    kamu.installer = rawKamu.installer
    kamu.installationDate = rawKamu.installationDate
    kamu.address = rawKamu.address
    kamu.location = rawKamu.location
    kamu.sensorHeight = rawKamu.sensorHeight
    kamu.enabled = rawKamu.enabled
    kamu.status = rawKamu.status
    kamu.swVersion = rawKamu.swVersion
    kamu.sensors = rawKamu.sensors
    kamu.activeProfiles = rawKamu.activeProfiles

    return kamu
  }
}
