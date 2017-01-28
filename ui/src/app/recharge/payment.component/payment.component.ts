import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'make-payment',
  templateUrl: './payment.component.html',
})
export class PaymentComponent implements OnInit {
  public model: any;
  public rechargeData: any;
  public submitted: boolean;
  public progress: string;

  constructor(private rechargeService: RechargeService, private router: Router){}

  ngOnInit(){
    if (!this.rechargeService.data) {
      // this.router.navigateByUrl('/recharge/mobile');
    }
    this.rechargeData = this.rechargeService.data;
    this.model = {};
    this.progress = '';
    this.submitted = false;
  }

  pay() {
    // this.submitted = true;
    // this.progress = 'pending';
    this.rechargeService.recharge(this.rechargeData)
      .subscribe(res => this.progress = 'success', err => this.progress = 'error');
  }
}
