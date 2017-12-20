import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable()
export class KeycloakHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');

    //return KeycloakService
    //  .updateToken()
    //  .pipe(
    //    mergeMap((token) => {
          const authReq = req.clone(
            {
              headers: req.headers.set('Authorization', `Bearer ${KeycloakService.getToken()}`),
            },
          );
          return next.handle(authReq);
        //}),
      //);
  }
}
