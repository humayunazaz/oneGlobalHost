import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { AppStackService } from '../app-stack.service';

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
  storage = 250;
  constructor(private route:ActivatedRoute, private router:Router, private infraService:AppStackService) { }

  getContent(url){
    this.infraService.getContent(url).subscribe(
      data => {
        this.singleDetail = data;
        this.singleDetail.logo = '../../../assets/img/' + this.singleDetail.logo;
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
    this.single = 'Selected AppStack';
    let url = 'single-instance.json';
    this.getContent(url);
  }

}
