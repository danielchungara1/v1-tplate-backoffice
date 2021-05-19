import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocalStorageService} from "@core/localStorage/local-storage.service";


@Injectable({
  providedIn: 'root',
})
export class TokenInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this.localStorageService.getToken();
    if (token) {
      return next.handle(request.clone({
          setHeaders: {Authorization: `Bearer ${token}`}
        })
      );
    } else {
      return next.handle(request);
    }
  }
}
