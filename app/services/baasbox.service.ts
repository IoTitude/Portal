import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

// Add library to convert observable to promise
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaasBoxService {

  constructor (private http: Http) { }

  baseUrl = 'http://82.196.14.4:9000'
  appcode = '1234567890'

  login (username: string, password: string) {
    let url = this.baseUrl + '/login'
    let body = {
      "username": username,
      "password": password,
      "appcode": this.appcode
    }
    return this.http.post(url, body).toPromise()
  }

  logout () {
    let url = this.baseUrl + '/logout'
    return this.http.post(url, {}, { headers: this.getHeaders() }).toPromise()
  }

  checkLogin () {
    let url = this.baseUrl + '/me'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  getKamus() {
    let url = this.baseUrl + '/document/Master'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  getVersions() {
    let url = this.baseUrl + '/document/Version'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  getProfiles() {
    let url = this.baseUrl + '/document/Profile'
    return this.http.get(url, { headers: this.getHeaders() }).toPromise()
  }

  updateVersion (kamu: any, datetime: string) {
    let url = this.baseUrl + '/plugin/portal.updateSoftware'
    let body = {
      kamu: kamu,
      datetime: datetime
    }
    return this.http.put(url, body, { headers: this.getHeaders() }).toPromise()
  }

  updateProfile (kamu: any, datetime: string) {
    let url = this.baseUrl + '/plugin/portal.updateProfile'
    let body = {
      kamu: kamu,
      datetime: datetime
    }
    return this.http.put(url, body, { headers: this.getHeaders() }).toPromise()
  }

  private getHeaders() {
    return new Headers({
      "X-BB-SESSION": localStorage.getItem('token'),
      "X-BAASBOX-APPCODE": this.appcode
    })
  }
}
