import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InviteFormComponent } from './invite-form/invite-form.component';
import {FormsModule} from '@angular/forms';
import { ListMemberComponent } from './list-member/list-member.component';

@NgModule({
  declarations: [
    AppComponent,
    InviteFormComponent,
    ListMemberComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
