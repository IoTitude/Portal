import { Component } from '@angular/core';
import { LoginComponent } from './app.login.component';
import { MainComponent } from './app.main.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  directives: [
    MainComponent,
    LoginComponent,
    RouterOutlet
  ]
})
export class AppComponent { }
