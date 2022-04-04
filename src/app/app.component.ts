import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title = 'Geekocon';
  roles: string[];
  username: string;
  url: number;

  constructor(private keycloak: KeycloakService) {
  }
  ngOnInit(): void {
    this.roles = this.keycloak.getUserRoles();
    this.keycloak.loadUserProfile().then(profile => {
      this.username = `${profile.firstName} ${profile.lastName}`;
    });
  }
  logout(): void {
    this.keycloak.logout();
  }
  login(): void{
    this.keycloak.login();
  }
  sendToUrl(urlBuff: string): void{
    switch (urlBuff){
      case 'home': {
        this.url = 1;
        break;
      }
      case 'aboutUs': {
        this.url = 2;
        break;
      }
      case 'zones': {
        this.url = 3;
        break;
      }
      case 'reg_zone': {
        this.url = 4;
        break;
      }
    }
  }
}

