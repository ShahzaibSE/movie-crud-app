import { Component, OnInit } from '@angular/core';

// Service
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  loggedIn(username: string, password: string) {
    this.message = '';
      if (!this.authService.login(username, password)) {
         this.message = 'Incorrect credentials.';
        //  debugger;
      setTimeout(function() {
        this.message = '';
      }.bind(this), 2500);
     }
   return false;
  }

  logout() {
    this.authService.logout();
  }
}
