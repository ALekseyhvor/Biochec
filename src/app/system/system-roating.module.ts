import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AuthGuard} from "../shared/services/auth.guard";
import {HelpfulComponent} from "./helpful/helpful.component";


const routes: Routes = [
  {path: '', component: SystemComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'helpful', component: HelpfulComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule{}
