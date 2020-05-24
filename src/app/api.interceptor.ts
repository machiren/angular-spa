import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.auth.accessToken;
    let req = request.clone({ url: `${environment.apiRoot}/${request.url}` });
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
    }
    return next.handle(req);
  }
}
