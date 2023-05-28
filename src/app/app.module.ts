import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {WebstartModule} from "./webstart/webstart.module";
import {AuthModule} from "./auth/auth.module";
import {HttpClientModule} from "@angular/common/http";
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";
import {AuthGuard} from "./shared/services/auth.guard";




@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    WebstartModule,
    AppRoutingModule,
    AuthModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
