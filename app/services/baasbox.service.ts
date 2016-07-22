/*
 * Service that provides common methods of commmunication with the BaasBox REST API
 */

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// Add library to convert observable to promise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaasBoxService {

  constructor (private http: Http) { }

  // Where BaasBox is located. Address of production server should be hidden from GitHub.
  baseUrl = 'http://baasbox.io:9000'
  appcode = '1234567890'

  // Login user
  login (username: string, password: string) {
    let url = this.baseUrl + '/login'
    let body = {
      "username": username,
      "password": password,
      "appcode": this.appcode
    }
    return this.http.post(url, body).toPromise()
  }

  // Logout user
  logout () {
    let url = this.baseUrl + '/logout'
    return this.http.post(url, {}, { headers: this.getHeaders() }).toPromise()
  }

  // Check that the user is logged in
  checkLogin () {
    let url = this.baseUrl + '/me'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  // Get a list of available KaMUs
  getKamus() {
    let url = this.baseUrl + '/document/Master'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  // Get a list of available versions
  getVersions() {
    let url = this.baseUrl + '/document/Version'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  // Get a list of available profiles
  getProfiles() {
    let url = this.baseUrl + '/document/Profile'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  // Update a KaMU's version
  // datetime is for timing the update
  updateVersion (kamu: any, datetime: string) {
    let url = this.baseUrl + '/plugin/portal.updateSoftware'
    let body = {
      kamu: kamu,
      datetime: datetime
    }
    return this.http.put(url, body, { headers: this.getHeaders() }).toPromise()
  }

  // Update a KaMU's profile
  // datetime is for timing the update
  updateProfile (kamu: any, datetime: string) {
    let url = this.baseUrl + '/plugin/portal.updateProfile'
    let body = {
      kamu: kamu,
      datetime: datetime
    }
    return this.http.put(url, body, { headers: this.getHeaders() }).toPromise()
  }

  // Restart a KaMU
  // datetime is for timing the update
  restartKamu (kamu: any, datetime: string) {
    let url = this.baseUrl + '/plugin/portal.restartKamu'
    let body = {
      kamu: kamu,
      datetime: datetime
    }
    return this.http.put(url, body, { headers: this.getHeaders() }).toPromise()
  }

  // Method for getting the required headers for calls that need them
  private getHeaders() {
    return new Headers({
      "X-BB-SESSION": localStorage.getItem('token'),
      "X-BAASBOX-APPCODE": this.appcode
    })
  }
}
