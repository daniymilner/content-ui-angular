import { TestBed, inject } from '@angular/core/testing';

import { ContentHttpService } from './content-http.service';

describe('ContentHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentHttpService]
    });
  });

  it('should be created', inject([ContentHttpService], (service: ContentHttpService) => {
    expect(service).toBeTruthy();
  }));
});
