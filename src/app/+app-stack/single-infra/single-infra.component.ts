import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'single-infra',
  templateUrl: './single-infra.component.html',
  styleUrls: ['./single-infra.component.css']
})
export class SingleInfraComponent implements OnInit {
  singleDetail;
  showModel = false;
  constructor(private router:Router) { }
  @Input() content:any;
  @Input() deployed:any;
  @Input() models:any;
  @Output() detail = new EventEmitter;
  
  openModel(content){
    console.log(JSON.stringify(content));
    this.singleDetail = content;
    this.showModel = true;
  }
  share(content){
    console.log(JSON.stringify(content));
  }
  copy(content){
    this.detail.emit({single:content});
    console.log(JSON.stringify(content));
  }
  delete(content){
    if(window.confirm("Are you sure!")){
      console.log(JSON.stringify(content));
    }
  }
  upload(content){
    this.detail.emit({single:content});
    console.log(content);
  }
  refreshModel(content){
    console.log(JSON.stringify(content));
  }
  ngOnInit() {
  }

}
