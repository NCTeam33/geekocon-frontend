import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  title = 'Geekocon-fest';
  roles: string[];
  username: string;

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
}

