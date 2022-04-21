import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ZonesComponent} from './zones/zones.component';
import {UserNavComponent} from './user-nav/user-nav.component';
import {AboutUsComponent} from './about-us/about-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: UserNavComponent},
  {path: 'about_us', component: AboutUsComponent},
  {path: 'zones', component: ZonesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
