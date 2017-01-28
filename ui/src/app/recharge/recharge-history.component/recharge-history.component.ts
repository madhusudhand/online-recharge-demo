import { Component, OnInit } from '@angular/core';

import { RechargeService } from '../services/recharge.service';

@Component({
  selector: 'recharge-history',
  templateUrl: './recharge-history.component.html',
  styleUrls: ['./recharge-history.component.css']
})
export class RechargeHistoryComponent implements OnInit {
  public history: any[] = [];

  constructor(private rechargeService: RechargeService){}

  ngOnInit(){
    this.rechargeService.getRechargeHistory()
    .subscribe(data => {
      this.history = data.reverse().map((item) => {
        item.discount = Math.round((item.amount - item.amountPaid) * 100)/100;
        return item;
      });
    });
  }
}
