import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { initializer } from './initializer.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { ZonesComponent } from './zones/zones.component';
import { ZoneManagementComponent } from './zone-management/zone-management.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    UserNavComponent,
    ZonesComponent,
    ZoneManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    MatSelectModule,
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
