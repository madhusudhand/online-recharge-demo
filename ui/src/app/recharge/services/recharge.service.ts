import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RechargeService {
  public data: any;

  constructor(
    private http: Http
  ){}
  recharge(){
    
  }
}
