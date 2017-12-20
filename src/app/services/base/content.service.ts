import { Observable } from 'rxjs/Observable';
import { IContentService } from '../../interfaces/icontent-service';

export abstract class ContentService implements IContentService {
  constructor(private baseHttp) {
  }

  getServiceKey(): string {
    return '';
  }

  getList(type: string): Observable<any> {
    return this.baseHttp.getList(type);
  }
}
