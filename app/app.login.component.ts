import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

// Add library to convert observable to promise
import 'rxjs/add/operator/toPromise';

export class LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'login-component',
  templateUrl: 'app/templates/login.html'
})
export class LoginComponent {
  data: LoginData = {
    username: "",
    password: ""
  }

  // TODO: Add a BaasBoxService to handle all calls to the BaasBox REST API

  constructor (private http: Http, private router: Router) { }

  login(username: string, password: string) {
    console.log(username);console.log(password);
    this.http.post('http://82.196.14.4:9000/login', {"username": username, "password": password, "appcode": '1234567890'})
      .toPromise()
      .then(response => {
        // Get session token
        let token = response.json().data['X-BB-SESSION']
        console.log(token)
        this.router.navigateByUrl('/status')
      })
      .catch(error => console.log(error))
  }
}
