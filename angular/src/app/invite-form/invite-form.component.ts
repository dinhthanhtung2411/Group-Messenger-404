import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-invite-form',
  templateUrl: './invite-form.component.html',
  styleUrls: ['./invite-form.component.css']
})
export class InviteFormComponent implements OnInit {
  message = '';
  constructor(
    private authService: AuthService,
    private route: Router) { }

  ngOnInit(): void {
    this.message = this.authService.message;
  }

  onSubmit(form) {
    if (this.authService.login(form.value)) {
      this.route.navigate(['/']);
      form.reset();
    }
  }
}
