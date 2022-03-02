import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { initializer } from './initializer.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ZonesComponent } from './zones/zones.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ContributorsComponent } from './contributors/contributors.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    UserNavComponent,
    ZonesComponent,
    TicketsComponent,
    ContributorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
  ],
  providers: [{
    provide: APP_INITIALIZER,
  useFactory: initializer,
  deps: [KeycloakService],
  multi: true
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
