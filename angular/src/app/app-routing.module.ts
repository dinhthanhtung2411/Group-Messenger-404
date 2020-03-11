import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InviteFormComponent} from './invite-form/invite-form.component';
import {GroupMessengerComponent} from './group-messenger/group-messenger.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuard} from './auth/auth.guard';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: InviteFormComponent
    }, {
      path: 'register',
      component: RegisterComponent
    },
    {
      path: '',
      component: GroupMessengerComponent,
      canActivate: [AuthGuard],
      pathMatch: 'full'
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
