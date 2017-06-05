import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  constructor() { }
  groups=['DevOps', 'Management', 'Engineering'];
  projects=['DevOps', 'Management', 'Engineering'];
  form = 'search';
  searchUser(event){
    console.log(JSON.stringify(event));
  }
  ngOnInit() {
  }

}
