import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
constructor(private http:Http){}
getContent(url){
  return this.http.get(url)
  .map(res => res.json());
}
getSingle(url){
  return this.http.get(url)
  .map(res => res.json());
}
}
