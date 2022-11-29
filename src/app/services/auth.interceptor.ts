import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let sometoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ0ZWQiOiIxNTE2MjM5MDIzIn0.FaVzCi2nuns0t6Ai1-3OkCABTBUXvu6YzMalRHbh3ng' // take from some service/  storage
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + sometoken }
    })

    return next.handle(request);
  }
}
