import { ContentService } from '../base/content.service';
import { Injectable } from '@angular/core';
import { ContentTypes } from '../../constants/content-types';
import { EmailsHttpService } from './emails-http.service';

@Injectable()
export class EmailsService extends ContentService {
  constructor(private http: EmailsHttpService) {
    super(http);
  }

  getServiceKey() {
    return ContentTypes.emails;
  }
}
