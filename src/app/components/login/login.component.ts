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

  form = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  });
  wrongUser = false;
  errorMessage = "";
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.form.status == 'VALID') {
      this.wrongUser = false;
      this.auth.login(this.form.value).subscribe({
        error: () => {
          this.errorMessage = "Wrong Credentials";
          this.wrongUser = true;
        }
      });
    }
  }
}
