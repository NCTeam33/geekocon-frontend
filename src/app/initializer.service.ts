import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { environment as env} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {

  constructor() { }
}

export function initializer(keycloak: KeycloakService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise(async (resolve, reject) => {
      try {
        await keycloak.init({
          config: {
            url: env.keycloak.issuer,
            realm: env.keycloak.realm,
            clientId: env.keycloak.clientId,
          },
          loadUserProfileAtStartUp: true,
          initOptions: {
            onLoad: 'check-sso',
            silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
          },
          bearerExcludedUrls: []
        });
        // @ts-ignore
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };
}

