import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { IContentService } from '../interfaces/icontent-service';
import { ActiveContentService } from '../services/active-content.service';

@Injectable()
export class ActiveServiceResolver implements Resolve<IContentService> {
  constructor(private activeService: ActiveContentService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    this.activeService.setActiveService(route.paramMap.get('type'));
    return this.activeService.getActiveService();
  }
}
