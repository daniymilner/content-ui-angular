import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { IContentService } from '../interfaces/icontent-service';
import { ActiveFactoryService } from './active-factory.service';

@Injectable()
export class ActiveContentService {
  private contentActiveService: IContentService;
  private contentActiveService$;

  constructor(private activeFactory: ActiveFactoryService) {
    this.contentActiveService$ = new ReplaySubject(1);
  }

  setActiveService(type) {
    this.contentActiveService = this.activeFactory.getServiceByType(type);
    this.contentActiveService$.next(this.contentActiveService);
  }

  getActiveService(): IContentService {
    return this.contentActiveService;
  }

  getActiveService$() {
    return this.contentActiveService$;
  }
}
