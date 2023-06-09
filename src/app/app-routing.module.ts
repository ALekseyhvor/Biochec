import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';






const routes: Routes = [
  {path: '', redirectTo: 'webstart', pathMatch: "full"},
  {path: 'system', loadChildren: () => import('./system/system.module').then(m=>m.SystemModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
