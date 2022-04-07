import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZonesComponent} from './zones/zones.component';
import {ContributorsComponent} from './contributors/contributors.component';
import {AuthGuard} from './auth.guard';
import {UserNavComponent} from './user-nav/user-nav.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: UserNavComponent},
  // TODO: FOR ANNA - MAKE ABOUT US COMPONENT
  // {path: 'about_us', component: },
  {path: 'zones', component: ZonesComponent},
  {path: 'register_zone', component: ContributorsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
