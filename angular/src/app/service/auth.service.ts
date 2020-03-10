import { Injectable } from '@angular/core';
import { IMembers } from '../members';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  members = [
    {name: 'hai', psw: '123123'},
  ];

  constructor(
    private route: Router
  ) { }

  login(account) {
    for (const member of this.members) {
      if (member.name === account.name && member.psw === account.psw) {
        return true;
      }
    }
    return false;
  }

  register(member) {
    console.log(member);
    this.members.push(member);
    this.route.navigate(['login']);
  }
}
