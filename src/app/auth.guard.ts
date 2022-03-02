import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard{

  constructor(protected router: Router, protected service: KeycloakService) {
    super(router, service);
  }

  isAccessAllowed(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise((resolve, reject) => {
      const userRoles: string[] = this.service.getUserRoles();
      console.log(`Roles: ${userRoles}`);

      console.log(`URL: ${state.url}`);
      if (state.url === '/tickets' && userRoles.indexOf('visitor') >= 0) {
        console.log('Permission allowed');
        resolve(true);
      }
      if (state.url === '/zones' && userRoles.indexOf('visitor') >= 0) {
        console.log('Permission allowed');
        resolve(true);
      }
      else {
        console.log('Permission not allowed');
        resolve(false);
      }

    });
  }
}
