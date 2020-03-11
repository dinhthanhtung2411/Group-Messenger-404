import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-group-messenger',
  templateUrl: './group-messenger.component.html',
  styleUrls: ['./group-messenger.component.css']
})
export class GroupMessengerComponent implements OnInit {
  members = [];
  auth: object;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.members = [{name: 'hai', psw: '123123'}];
    this.auth = this.authService.auth;
  }
  search(keyword) {
    this.members = this.authService.members.filter( res => {
      return res.name.toLowerCase().match(keyword.toLowerCase());
    });
  }
}
