import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, switchMap } from 'rxjs/operators';
import { KeycloakService } from '../keycloak/keycloak.service';

@Injectable()
export class KeycloakHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted request ... ');
    return KeycloakService
      .updateToken()
      .pipe(
        switchMap((token) => {
          const authReq = req.clone(
            {
              headers: req.headers.set('Authorization', `Bearer ${token}`),
            },
          );
          return next.handle(authReq)
            .pipe(
              catchError((err: any, caught) => {
                return Observable.throw(err);
              }),
            );
        }),
      );
  }
}
