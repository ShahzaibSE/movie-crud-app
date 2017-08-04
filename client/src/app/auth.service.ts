import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login(user: string, password: string) {
    console.log('User logging In');
    if (user === 'user' && password === 'password') {
      localStorage.setItem('username', user);
      console.log('User set to localStorage');
      // debugger;
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('username');
  }

  getUser() {
    return localStorage.getItem('username');
  }

  isLoggedIn() {
    return this.getUser() !== 'user';
  }

}
