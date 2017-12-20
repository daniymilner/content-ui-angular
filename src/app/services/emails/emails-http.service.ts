import { ContentHttpService } from '../base/content-http.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmailsHttpService extends ContentHttpService {
  constructor(private httpClient: HttpClient) {
    super(httpClient);
  }
}
