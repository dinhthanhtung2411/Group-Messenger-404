import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InviteFormComponent} from './invite-form/invite-form.component';
import {GroupMessengerComponent} from './group-messenger/group-messenger.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: InviteFormComponent
    },
    {
      path: '',
      component: GroupMessengerComponent,
      pathMatch: 'full'
    }
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
