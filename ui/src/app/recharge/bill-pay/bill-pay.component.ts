import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'app-bill-pay',
  templateUrl: './bill-pay.component.html',
  styleUrls: ['./bill-pay.component.css']
})
export class BillPayComponent implements OnInit {
  public model: any;
  public couponApplied: boolean;

  constructor(private rechargeService: RechargeService, private router: Router) { }

  ngOnInit() {
    this.model = {
      type: 'gas',
      discountPercent: 0
    };
    this.couponApplied = false;
  }

  applyCoupon(): boolean {
    this.couponApplied = true;
    this.model.discountPercent = 0.1;
    return false;
  }

  billpay(): boolean {
    this.couponApplied = false;
    this.model.amountPayable = this.model.amount * ( 1 - this.model.discountPercent);
    this.rechargeService.data = this.model;
    this.router.navigateByUrl('/recharge/bill-pay/pay');
    return false;
  }

}
