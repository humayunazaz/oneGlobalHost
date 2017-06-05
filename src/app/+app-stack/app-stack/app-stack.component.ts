import { Component, OnInit } from '@angular/core';
import { AppStackService } from '../app-stack.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-stack',
  templateUrl: './app-stack.component.html',
  styleUrls: ['./app-stack.component.css']
})
export class AppStackComponent implements OnInit {
  content;
  loading;
  deployed = 'AppStack deployed';
  models = 'AppStack models';
  constructor(private appStackService:AppStackService, private router:Router) { }

  getContent(url){
    this.appStackService.getContent(url).subscribe(
      data => {
        this.content = data;
        console.log(JSON.stringify(this.content));
      },
      null,
      () => {this.loading = false;}
    )
  }
  gotoDetail(event){
    this.router.navigate(['appStack/singleDetail', event.id]);
  }
  ngOnInit() {
    let url = 'infra.json';
    this.getContent(url);
  }

}
