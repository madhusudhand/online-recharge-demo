import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service/auth.service';
import { AuthData } from '../auth.service/auth-data.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private jwt: string;
  private data: AuthData;

  public username: string;
  public password: string;
  public error: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.jwt = localStorage.getItem('jwt');
    this.setLoginState();
  }

  login() {
    this.authService.login(this.username, this.password)
    .subscribe(
      (res: AuthData) => {
        if (res.jwt) {
          this.data = res;
          this.jwt = res.jwt;
          this.authService.setLogin(res.jwt);
          this.error = null;
        } else {
          this.error = "invalid";
        }

        this.setLoginState();
      },
      (err) => {
        this.error = err;
      }
    );
  }


  private setLoginState() {
    if (this.jwt) {
      this.router.navigateByUrl('/recharge');
    }
  }

}
