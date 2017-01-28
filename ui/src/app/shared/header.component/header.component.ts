import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/auth.service/auth.service';
import { AuthData } from '../../auth/auth.service/auth-data.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn: boolean = false;
  public user: AuthData;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.checkLogin().subscribe((data) => {
      console.log(data);
      this.isLoggedIn = !!(data && data.jwt);
      this.user = data;
    });

    this.authService.emit();
  }

  logout() {
    this.authService.clearLogin();
    this.router.navigateByUrl('/');
  }
}
