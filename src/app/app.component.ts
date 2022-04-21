import {Component, Injectable, Input, OnInit} from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})

export class AppComponent implements OnInit {
  title = 'Geekocon';
  username: string;
  isLoggedIn = false;

  constructor(private readonly keycloak: KeycloakService) {
  }
  async ngOnInit(): Promise<void> {
    this.isLoggedIn = await this.keycloak.isLoggedIn();
  }
  logout(): void {
    this.keycloak.logout();
  }
  login(): void{
    this.keycloak.login();
  }

  getRoles(): string[]{
    return this.keycloak.getUserRoles();
  }
}

