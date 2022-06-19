import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form=new FormGroup({
    "username":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  });
  wrongUser=false;
  errorMessage="";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  if(this.form.status=='VALID'){
    
    console.log(this.form.value);

    this.auth.login(this.form.value).subscribe(
      {
        next: (res: any) => {
          localStorage.setItem('token',res.token );
          this.router.navigate([""]);
          this.wrongUser=false;
        },
        error: (err) => {
          console.log(err);
          
        this.errorMessage=err.error;
        this.wrongUser=true;
        }
      })
  }
}

}
