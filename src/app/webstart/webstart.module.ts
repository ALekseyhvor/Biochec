import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from "@angular/core";
import {WebstartComponent} from './webstart.component';
import {WebstartRoutingModule} from "./webstart-routing.module";


@NgModule({
  declarations: [
     WebstartComponent
  ],
  imports: [
    BrowserModule,
    WebstartRoutingModule
  ],
  providers:[],
  bootstrap:[WebstartComponent]
})
export class WebstartModule{ }
