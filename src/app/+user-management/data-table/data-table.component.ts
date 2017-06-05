import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() data:any;
  @Input() heads:any;
  @Input() rowsOnPage:number;
  @Input() sortBy:String;
  sortOrder:string = 'asc';
  @Input() user = true;
  @Input() membership = '';
  @Input() userMembership = false;

  gotoSingle(item){
    if(this.user){
      this.router.navigate(['users/singleuser', item.Id]);
    } else{
      this.router.navigate(['users/singlegroup', item.id]);
    }
  }
  gotoGroup(){
    this.router.navigate(['users/groupManagement']);
  }
  gotoSingleUser(item){
    this.router.navigate(['users/singleuser', item.Id]);
  }
  remove(item){
    if(confirm('Are you sure!')){
      let id = item.id;
      let i = 0;
      while(this.data[i]){
        if(this.data[i].id == item.id){
          this.data.splice(i, 1);
        }
        i++;
      }
    } 
  }

  ngOnInit() {
  }

}
