import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'make-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  public model: any = {};
  public rechargeData: any;
  public submitted: boolean = true;

  constructor(
    private rechargeService: RechargeService,
    private router: Router
  ){}

  ngOnInit(){
    if (!this.rechargeService.data) {
      // this.router.navigateByUrl('/recharge/mobile');
    }
    this.rechargeData = this.rechargeService.data;
  }

  pay(){
    this.submitted = true;
  }
}
