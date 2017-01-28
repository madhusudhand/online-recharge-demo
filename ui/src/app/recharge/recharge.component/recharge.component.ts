import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.scss'],
})
export class RechargeComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    $('ul.tabs').tabs();
  }
}
