import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
  id:number;
  singleDetail;
  loading = true;
  constructor(private route:ActivatedRoute, private userService:UserService, private router:Router) { }

  getSingle(url){
    this.userService.getSingle(url).subscribe(
      data => {
        this.singleDetail = data;
        // console.log(JSON.stringify(this.singleDetail));
      },
      null,
      () => {this.loading = false;}
    )
  }
  changeStatus(event){
    // call the server to change the user status from active to inactive or opposite.
    // this.userService.changeStatus(this.id).subscribe(
    //   data => {
    //     this.singleDetail = data;
    //   }
    // )
    console.log(event.target.checked);    
  }
  switch(event){
    console.log(event);
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
  saveUser(){
    // save the changes to the user
    // this.appService.saveUser().subscribe(
    //   data => {

    //   }
    // )
    this.router.navigate(['users/userManagement']);
  }
}
