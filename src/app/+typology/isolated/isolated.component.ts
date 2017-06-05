import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { InfraService } from '../infra.service';

@Component({
  selector: 'app-isolated',
  templateUrl: './isolated.component.html',
  styleUrls: ['./isolated.component.css']
})
export class IsolatedComponent implements OnInit {
  path:String;
  content:any;
  loading = true;
  deployed = 'Isolated Deployed';
  models = 'Isolated Models';
  constructor(private route:ActivatedRoute, private infraService:InfraService, private router:Router) { }

  getContent(url){
    this.infraService.getContent(url).subscribe(
      data => {
        this.content = data;
        console.log(JSON.stringify(this.content));
      },
      null,
      () => {this.loading = false;}
    )
  }
  gotoDetail(event){
    if(this.path.indexOf('general') > -1){
      this.router.navigate(['typology/general/isolated', event.id]);
    } else if(this.path.indexOf('powerConfigs') > -1){
      this.router.navigate(['typology/powerConfigs/isolated', event.id]);
    } else{
      this.router.navigate(['typology/largeStorage/isolated', event.id]);
    }
  }
  ngOnInit() {
    this.route.url.forEach((segments: UrlSegment[]) => {
      this.path = segments.join('/');
    });
    if(this.path.indexOf('general') > -1){
      
      // update the API here for general single instance
      
      let url = 'infra.json';
      this.getContent(url);
    } else if(this.path.indexOf('powerConfigs') > -1){
      
      // update the API here for power configs single instance

      let url = 'infra.json';
      this.getContent(url);
    } else{
      // update the API here for Large storage single instance

      let url = 'infra.json';
      this.getContent(url);
    }
  }

}
