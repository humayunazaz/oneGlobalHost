import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { ReplaySubject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {
packageValue: ReplaySubject<any> = new ReplaySubject(1);

  constructor(private http:Http) { }
  updatePackage(value){
    this.packageValue.next(value);
  }
  getContent(url){
    return this.http.get(url)
    .map(res => res.json());
  }
}
