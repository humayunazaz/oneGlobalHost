import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'current-plan',
  templateUrl: './current-plan.component.html',
  styleUrls: ['./current-plan.component.css']
})
export class CurrentPlanComponent implements OnInit {
  current;
  constructor(private accountService:AccountService) { }
  loading = true;
  getCurrent(url){
    this.accountService.getContent(url).subscribe(
      data => {
        this.current = data;
      },
      null,
      () => {this.loading = false;}
    )
  }

  ngOnInit() {
    let url = 'current-plain.json';
    this.getCurrent(url);    
  }

}
