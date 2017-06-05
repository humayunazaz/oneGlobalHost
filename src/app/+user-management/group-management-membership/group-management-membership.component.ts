import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

@Component({
  selector: 'app-group-management-membership',
  templateUrl: './group-management-membership.component.html',
  styleUrls: ['./group-management-membership.component.css']
})
export class GroupManagementMembershipComponent implements OnInit {

  constructor(private userService:UserService) { }
  Userdata;
  Groupdata;
  sortBy = 'id';
  rowsOnPage = 2;
  loading=true;
  userMembership = 'user';
  groupMembership = 'group';
  user = false;
  byUser = true;

  getContent(url, gUrl){
    var subscri = Observable.forkJoin(
      this.userService.getContent(url),
      this.userService.getContent(gUrl)
    ).subscribe(
      data => {
        this.Userdata = data[0];
        this.Groupdata = data[1];
      },
      null,
      () => {this.loading = false;}
    )
  }
  ngOnInit() {
    let url = './user.json';
    let gUrl = './group.json';
    this.getContent(url, gUrl);
  }

}
