import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  @Input() members: any;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.members = this.authService.members;
  }
}

