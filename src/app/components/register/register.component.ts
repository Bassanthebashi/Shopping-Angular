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

  form = new FormGroup({
    "username": new FormControl("", Validators.required),
    "email": new FormControl("", [Validators.required, Validators.email]),
    "password": new FormControl("", [Validators.required, Validators.
      pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}[@~`! @#$%^&*()_=+\\\\';:\"\\/?>. <,-]$/)])
  });
  wrongUser = false;
  errorMessage: string[] = [];
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  Register() {
    this.errorMessage = []
    if (this.form.status == 'VALID') {

      this.auth.register(this.form.value).subscribe(
        {
          next: (res) => {
            this.router.navigate(["login"]);
            this.wrongUser = false;
          },
          error: (err) => {
            console.log(err);

            var flag = 1;
            err.error.map((e: any) => {
             
                if (e.code == "DuplicateUserName") {
                  flag = 0;
                  this.errorMessage.push("username already taken");
                }
                else if (e.code == "DuplicateEmail") {
                  flag = 0;
                  this.errorMessage.push("Email already taken");
                }
              



            })
            if (flag == 1)
              this.errorMessage.push("Invalid Data");


            this.wrongUser = true;
          }
        })
    }
  }

}
