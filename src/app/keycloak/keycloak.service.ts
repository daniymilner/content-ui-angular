import { Observable } from 'rxjs/Observable';

declare let Keycloak: any;

export class KeycloakService {
  static auth: any = {};

  static init(): Promise<void> {
    const keycloakAuth: any = Keycloak({
      url: 'https://develop.ewizard.io/auth',
      realm: 'develop',
      clientId: 'ewizard',
      'ssl-required': 'external',
      'public-client': true,
    });

    KeycloakService.auth.loggedIn = false;

    return new Promise((resolve, reject) => {
      keycloakAuth.init({ onLoad: 'login-required' })
        .success(() => {
          KeycloakService.auth.loggedIn = true;
          KeycloakService.auth.authz = keycloakAuth;
          KeycloakService.auth.logoutUrl = keycloakAuth.authServerUrl
            + '/realms/develop/protocol/openid-connect/logout?redirect_uri='
            + document.baseURI;
          resolve();
        })
        .error((e) => {
          console.log(e);
          reject();
        });
    });
  }

  static logout() {
    console.log('**  LOGOUT');
    KeycloakService.auth.loggedIn = false;
    KeycloakService.auth.authz = null;

    window.location.href = KeycloakService.auth.logoutUrl;
  }

  static getToken(): string {
    return KeycloakService.auth.authz.token;
  }

  static updateToken(): Observable<string> {
    return new Observable(observer => {
      if (KeycloakService.auth.authz.token) {
        KeycloakService.auth.authz
          .updateToken(5)
          .success(() => {
            observer.next(<string>KeycloakService.auth.authz.token);
            observer.complete();
          })
          .error(() => {
            observer.error(new Error('Failed to refresh token'));
            observer.complete();
          });
      } else {
        observer.error(new Error('Not logged in'));
        observer.complete();
      }
    });
  }
}
