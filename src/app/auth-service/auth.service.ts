import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Credentials } from '../Models/Credentials';
import { RegisterDTO } from '../Models/RegisterDTO';
import { TokenDTO } from '../Models/TokenDTO';
import { UserDetails } from '../Models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserDetails = { name: "", role: "" }
  url: string = "https://localhost:7085/api/";
  //url: string = "https://shoppingbybassant.azurewebsites.net/";
  constructor(private http: HttpClient, private router: Router) { }
  login(user: Credentials):Observable<TokenDTO> {
    return this.http.post<TokenDTO>(this.url + 'User/Login', user).pipe(
      tap((res) => {
        localStorage.setItem('token', res.token);
        this.GetUserDetails();
        this.router.navigate([""]);
      })
    );
  }
  logout():void {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  isLoggedIn():boolean {
    return localStorage.getItem('token') ? true : false;
  }
  currentUser():string|null {
    return localStorage.getItem('token');
  }
  register(user: RegisterDTO) {
    return this.http.post(this.url + 'User/Register', user)
  }
  GetUserDetails():void {
    this.http.get<UserDetails>(this.url + 'User').subscribe({
      next: (user) => {
        this.user.name = user.name;
        this.user.role = user.role;
      }
    })
  }
  isAdmin():boolean {
    return this.user.role == 'Admin' ? true : false;
  }

}
