import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UserNavComponent} from './user-nav/user-nav.component';
import {initializer} from './initializer.service';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {ZonesComponent} from './zones/zones.component';
import {MaterialExampleModule} from '../material.module';
import {DialogComponent } from './zones/dialog/dialog.component';
import {AboutUsComponent } from './about-us/about-us.component';
import {FestService} from './fest.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserNavComponent,
    ZonesComponent,
    DialogComponent,
    AboutUsComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        KeycloakAngularModule,
        MaterialExampleModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializer,
    deps: [KeycloakService],
    multi: true
  }, AppComponent, FestService, ZonesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
