import {NgModule} from "@angular/core";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "./home/home.component";
import {HeaderComponent} from "../shared/component/header/header.component";
import {FooterComponent} from "../shared/component/footer/footer.component";
import {RouterOutlet} from "@angular/router";
import {SystemRoutingModule} from "./system-roating.module";
import {AboutComponent} from "./about/about.component";
import {CommonModule} from "@angular/common";
import {HelpfulComponent} from "./helpful/helpful.component";

@NgModule({
  declarations: [
    SystemComponent,
    HomeComponent,
    AboutComponent,
    HelpfulComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SystemRoutingModule,
    RouterOutlet
  ],
  providers:[]
})
export class SystemModule {}
