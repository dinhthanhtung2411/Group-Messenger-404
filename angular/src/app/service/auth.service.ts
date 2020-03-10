import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(account) {
    console.log(account);
    if (account.name === 'hai' && account.psw === '123123') {

    }
  }
}
