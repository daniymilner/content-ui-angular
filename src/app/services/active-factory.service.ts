import { Injectable } from '@angular/core';
import { ContentTypes } from '../constants/content-types';
import { IContentService } from '../interfaces/icontent-service';
import { EmailsService } from './emails/emails.service';

@Injectable()
export class ActiveFactoryService {
  constructor(private emailsService: EmailsService) {
  }

  getServiceByType(type): IContentService {
    switch (type) {
      case ContentTypes.emails: {
        return this.emailsService;
      }
      case ContentTypes.sites: {
        return this.emailsService;
      }
      default: {
        throw Error('Invalid type');
      }
    }
  }
}
