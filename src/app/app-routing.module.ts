import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZonesComponent} from './zones/zones.component';
import {ContributorsComponent} from './contributors/contributors.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {path: 'zones', component: ZonesComponent},
  {path: 'contributors', component: ContributorsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
