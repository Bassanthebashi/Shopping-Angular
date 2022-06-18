import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url:string="";
  constructor(private http:HttpClient,private router:Router) { }
  login(user:any){
    return this.http.post(this.url+'User/login',user)
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
  isLoggedIn(){
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
  currentUser(){
    const helper = new JwtHelperService();
    let token=localStorage.getItem('token');
    if(!token) return;
    return helper.decodeToken(token);
  }
  register(user:any){
    console.log("register")
    return this.http.post(this.url+'User/register',user)
  }
  
}
