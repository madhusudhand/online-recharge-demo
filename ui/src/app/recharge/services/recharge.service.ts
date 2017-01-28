import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RechargeService {
  public data: any;
  constructor(private http: Http){}

  recharge(data){
    const userId: number = JSON.parse(localStorage.getItem('auth')).id;
    data.userId = userId;

    return this.http.post('/api/recharge', { data: data })
      .map((res: Response) => res.json());
  }

  getRechargeHistory(): Observable<any> {
    const userId: number = JSON.parse(localStorage.getItem('auth')).id;
    return this.http.get('/api/history/'+userId).map((res: Response) => res.json());
  }
}
