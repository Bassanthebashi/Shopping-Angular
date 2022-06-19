import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url: string = "https://localhost:7085/api/";
  constructor(private http: HttpClient, private router: Router) { }
  login(user: any) {
    return this.http.post(this.url + 'User/Login', user)
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
  currentUser() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');

    if (!token) return;


    return token;
    //return helper.decodeToken(token);
  }
  register(user: any) {
    return this.http.post(this.url + 'User/Register', user)
  }
  isAdmin() {
    const helper = new JwtHelperService();
    let token = localStorage.getItem('token');
    if (!token) return false;

    
    const decodedToken = helper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
    console.log(role); 
    if(role=="Admin")return true;
    return false;

  }

}
