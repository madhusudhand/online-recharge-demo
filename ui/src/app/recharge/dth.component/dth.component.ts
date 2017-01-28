import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.css']
})
export class DthComponent implements OnInit {
  public model:any;
  public couponApplied: boolean;

  constructor(private rechargeService: RechargeService, private router: Router) { }

  ngOnInit() {
    this.model = {
      type: 'dth',
      discountPercent: 0
    };
    this.couponApplied = false;
  }

  applyCoupon(): boolean {
    this.couponApplied = true;
    this.model.discountPercent = 0.1;
    return false;
  }

  recharge(): boolean {
    this.couponApplied = false;
    this.model.amountPayable = this.model.amount * ( 1 - this.model.discountPercent);
    console.log(this.model);
    this.rechargeService.data = this.model;
    this.router.navigateByUrl('/recharge/dth/pay');
    return false;
  }
}
