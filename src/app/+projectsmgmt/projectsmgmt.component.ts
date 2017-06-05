import { Component, OnInit, Input } from '@angular/core';
import { JsonApiService } from "app/core/api/json-api.service";

@Component({
  selector: 'app-projectsmgmt',
  templateUrl: './projectsmgmt.component.html',
  styleUrls: ['./projectsmgmt.component.css']
})
export class ProjectsmgmtComponent implements OnInit {

  @Input() task:string
  @Input() week:string
  @Input() day:string

  public days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'];


  public demo1:any;
  public demo2:any;

  constructor(private jsonApiService:JsonApiService) {
  }

  add() {
    console.log(this.task, this.day)
  }

  ngOnInit() {
    this.jsonApiService.fetch('/ui-examples/all-projects-view.json').subscribe(data=> {
      this.demo1 = data.demo1;
      this.demo2 = data.demo2;
    })
  }

  changeLstener(payload) {
    console.log('change payload', payload)
  }

}
