import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth.service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public model: any;
  public status: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.model = {};
    this.status = '';
  }

  signup() {
    this.authService.signup(this.model)
    .subscribe(res => this.status = 'success', err => this.status = 'error');

    return false;
  }

}
