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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

  }

  login() {
    // var _this: any = this;
    localStorage.setItem('jwt', 'dummy');
    // this.authService.isLoggedIn = true;
    this.router.navigateByUrl('/recharge');

    this.authService.updateLogin(true);

    // this.authService.login(this.username, this.password)
    // .subscribe(
    //   (res) => {
    //     this.data = res;
    //     this.jwt = this.data.jwt;
    //     localStorage.setItem('jwt', this.data.jwt);
    //   },
    //   (err) => console.log(err)
    // );
  }

  logout() {
    // this.jwt = null;
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/');
  }

}
