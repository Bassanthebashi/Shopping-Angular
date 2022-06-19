import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth-service/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form=new FormGroup({
    "username":new FormControl("",Validators.required),
    "email":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
  });
  wrongUser=false;
  errorMessage="";
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
Reg(){
  if(this.form.status=='VALID'){
    
    console.log(this.form.value);

    this.auth.register(this.form.value).subscribe(
      {
        next: (res) => {
          this.router.navigate(["login"]);
          this.wrongUser=false;
        },
        error: (err) => {
          console.log(err);
          
        this.errorMessage=err.error[0].description;
        this.wrongUser=true;
        }
      })
  }
}

}
