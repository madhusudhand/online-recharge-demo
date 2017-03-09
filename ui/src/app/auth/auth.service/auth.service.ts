import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Headers, Http, RequestOptions } from '@angular/http';

import { AuthData } from './auth-data.interface';

@Injectable()
export class AuthService {

  private jwtKey: string = 'jwt';
  private url: string = '/api/auth/user';

  public authData: AuthData;
  public jwt: string;
  public eventStream: Subject<AuthData>;

  constructor(private http: Http) {
    this.eventStream = new Subject<AuthData>();
    this.emit();
  }

  login (username, password): Observable<AuthData> {
    let body = JSON.stringify({ username, password });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.url, body, options)
                    .map(res => this.setAuthData(res.json()))
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  private setAuthData(data) {
    localStorage.setItem('auth', JSON.stringify(data));
    // this.authData = data;
    return data;
  }

  checkLogin() {
    return this.eventStream;
  }

  emit() {
    const authData: AuthData = JSON.parse(localStorage.getItem('auth'));
    this.eventStream.next(authData);
  }

  setLogin(jwt) {
    localStorage.setItem(this.jwtKey, jwt);
    this.jwt = jwt;
    this.emit();
  }

  clearLogin() {
    localStorage.removeItem('auth');
    localStorage.removeItem(this.jwtKey);
    this.jwt = null;
    this.emit();
  }


  signup(user: any): Observable<any> {
    // let body = JSON.stringify({ user });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('/api/user', user, options)
                    .map(res => res.json())
                    .catch(this.handleError);
  }

}
