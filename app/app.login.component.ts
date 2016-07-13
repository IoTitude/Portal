import { Component } from '@angular/core';
import { BaasBoxService } from './app.baasbox.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

export class LoginData {
  username: string;
  password: string;
}

@Component({
  selector: 'login-component',
  templateUrl: 'app/templates/login.html',
  providers: [ BaasBoxService, NgModel ]
})
export class LoginComponent {
  data: LoginData = {
    username: "",
    password: ""
  }

  constructor (private router: Router, private baasBoxService: BaasBoxService) { }

  login(username: string, password: string) {
    this.baasBoxService.login(username, password)
      .then(response => {
        // Get session token
        let token = response.json().data['X-BB-SESSION']
        // TODO: Possibly handle storing in a service
        localStorage.setItem("token", token)
        this.router.navigateByUrl('/status')
      })
      .catch(error => alert(error))
  }
}
