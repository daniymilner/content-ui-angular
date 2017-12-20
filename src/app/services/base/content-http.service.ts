import { HttpClient } from '@angular/common/http';

export abstract class ContentHttpService {
  private routes = {
    getList: 'https://develop.ewizard.io/presentation/api/v1/presentation?skip=0&top=10',
  };

  constructor(private client: HttpClient) {

  }

  getList(type) {
    const route = this.routes.getList.replace('{type}', type);
    return this.client.get(route);
  }
}
