import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-group',
  templateUrl: './search-group.component.html',
  styleUrls: ['./search-group.component.css']
})
export class SearchGroupComponent implements OnInit {

  constructor() { }
  form = 'Search';
  user = false;
  search = true;

  searchGroup(event){
    console.log(JSON.stringify(event));
  }
  ngOnInit() {
  }

}
