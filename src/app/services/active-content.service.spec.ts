import { TestBed, inject } from '@angular/core/testing';

import { ActiveContentService } from './active-content.service';

describe('ActiveContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveContentService]
    });
  });

  it('should be created', inject([ActiveContentService], (service: ActiveContentService) => {
    expect(service).toBeTruthy();
  }));
});
