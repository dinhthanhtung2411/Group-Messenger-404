import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InviteFormComponent} from './invite-form/invite-form.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'login',
      component: InviteFormComponent
    },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
