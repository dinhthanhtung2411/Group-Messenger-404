import { Injectable } from '@angular/core';
import { IMembers } from '../members';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  members = [
    {name: 'hai', psw: '123123'},
  ];

  constructor() { }

  login(account) {
    for (const member of this.members) {
      if (member.name === account.name && member.psw === account.psw) {
        return true;
      }
    }
    return false;
  }

  register(member) {
    this.members.push(member);
  }

}
