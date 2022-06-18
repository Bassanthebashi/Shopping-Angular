import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { AuthService } from '../auth-service/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService) { }
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //add auth header
    const token = this.authService.currentUser();
    let updatedHeaders = new HttpHeaders();
    updatedHeaders =  updatedHeaders.append('Authentication', !!token ? 'Bearer ' + token : '');
    const updatedRequest =   request.clone({
      headers: updatedHeaders
    });
    return next.handle(updatedRequest);
  }
}
