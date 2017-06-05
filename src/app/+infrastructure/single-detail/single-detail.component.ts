import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { InfraService } from '../infra.service';

@Component({
  selector: 'app-single-detail',
  templateUrl: './single-detail.component.html',
  styleUrls: ['./single-detail.component.css']
})
export class SingleDetailComponent implements OnInit {
  path;
  single;
  singleDetail;
  loading = true;
  minValue = 0;
  maxValue = 1000;
  ValueRange;
  storage;
  constructor(private route:ActivatedRoute, private router:Router, private infraService:InfraService) { }

  getContent(url){
    this.infraService.getContent(url).subscribe(
      data => {
        this.singleDetail = data;
        this.singleDetail.logo = '../../../assets/img/' + this.singleDetail.logo;
        if(this.path.indexOf('general') > -1){
          this.storage = this.singleDetail.storage1;
        } else if(this.path.indexOf('powerConfigs') > -1){
          this.storage = this.singleDetail.storage2;
        } else{
          this.storage = this.singleDetail.storage3;
        }
        this.ValueRange = [0, this.storage];
      },
      null,
      () => {this.loading = false;}
    )
  }
  valueUpdate(event){
    this.storage = event[1];
  }
  ngOnInit() {
    this.route.url.forEach((segments:UrlSegment[]) => {
      this.path = segments.join('/');
    });
    if(this.path.indexOf('singleinstance') > -1){
      this.single = 'Selected Single Instance';
    } else if(this.path.indexOf('isolated')){
      this.single = 'Selected Isolated';
    } else{
      this.single = 'Selected Internet Access';
    }
    let url = 'single-instance.json';
    this.getContent(url);
  }

}
