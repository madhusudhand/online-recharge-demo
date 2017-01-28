import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'mobile-recharge',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {
  public couponApplied: boolean = false;
  public model: any = {
    type: 'prepaid',
    discountPercent: 0
  };

  constructor(
    private router: Router,
    private rechargeService: RechargeService
  ){

  }
  ngOnInit(){}

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
    this.router.navigateByUrl('/recharge/mobile/pay');
    return false;
  }
}
