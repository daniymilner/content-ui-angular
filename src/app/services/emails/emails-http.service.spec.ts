import { TestBed, inject } from '@angular/core/testing';

import { EmailsHttpService } from './emails-http.service';

describe('EmailsHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailsHttpService]
    });
  });

  it('should be created', inject([EmailsHttpService], (service: EmailsHttpService) => {
    expect(service).toBeTruthy();
  }));
});
