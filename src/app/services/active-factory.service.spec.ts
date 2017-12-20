import { TestBed, inject } from '@angular/core/testing';

import { ActiveFactoryService } from './active-factory.service';

describe('ActiveFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveFactoryService]
    });
  });

  it('should be created', inject([ActiveFactoryService], (service: ActiveFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
