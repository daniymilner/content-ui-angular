import { Observable } from 'rxjs/Observable';

export interface IContentService {
  getList(type: string): Observable<any>;
  getServiceKey(): string;
}
