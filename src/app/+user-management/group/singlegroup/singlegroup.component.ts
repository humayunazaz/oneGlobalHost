import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-singlegroup',
  templateUrl: './singlegroup.component.html',
  styleUrls: ['./singlegroup.component.css']
})
export class SinglegroupComponent implements OnInit {

  constructor(private userService:UserService, private route:ActivatedRoute) { }
  singleDetail;
  loading = true;
  id;
  getSingle(url){
    this.userService.getSingle(url).subscribe(
      data => {
        this.singleDetail = data;
        console.log(JSON.stringify(this.singleDetail));
      },
      null,
      () => {this.loading = false;}
    )
  }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
      }
    )
    let url = 'singleUser.json';
    this.getSingle(url);
  }
  
}


