import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infra-detail',
  templateUrl: './infra-detail.component.html',
  styleUrls: ['./infra-detail.component.css']
})
export class InfraDetailComponent implements OnInit {

  constructor() { }
  options = {
    "ajax": 'infraDetail.json',
    "columns": [  
      {'data': 'name'} 
      ] 
  }
  ngOnInit() {
  }

}
