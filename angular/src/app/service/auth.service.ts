import { Injectable } from '@angular/core';
import { IMembers } from '../members';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  members = [];

  constructor() { }

  login(account) {
    if (account.name === 'hai' && account.psw === '123123') {
      return true;
    }
    return false;
  }

  register(member) {
    this.members.push(member);
  }

}
