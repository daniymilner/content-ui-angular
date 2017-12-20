import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { KeycloakService } from '../../keycloak/keycloak.service';

export class ContentHttpService {
  private routes = {
    getList: 'https://develop.ewizard.io/presentation/api/v1/presentation?skip=0&top=10',
  };

  constructor(private client: HttpClient) {

  }

  getList(type) {
    const route = this.routes.getList.replace('{type}', type);
    return this.client.get<Observable<any>>(route, this.getHeaders(KeycloakService.getToken()));
  }

  private getHeaders(token: string) {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      }),
    };
  }
}
