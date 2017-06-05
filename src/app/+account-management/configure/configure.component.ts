import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'bs-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.css']
})
export class ConfigureComponent implements OnInit {

  constructor(private router:Router, private accountService:AccountService) { }
  heads = ['Bronze', 'Silver', 'Gold'];
  
  gotoSingle(title, value){
    this.accountService.updatePackage(value);
    this.router.navigate(['accounts/detail/', title]);
  }
  bronzeRange = [0, 100];
  bronzeMin = 0;
  bronzeLimit = 199;

  silverRange = [200, 300];
  silverMin = 200;
  silverLimit = 499;

  goldRange = [500, 700];
  goldMin = 500;
  goldLimit = 1000;
  
  bronzeValue = 100;
  silverValue = 300;
  goldValue = 700;
  
  bronzeUpdate(event){
    this.bronzeValue = event[1]; 
  }
  silverUpdate(event){
    this.silverValue = event[1];
  }
  goldUpdate(event){
    this.goldValue = event[1];
  }
  ngOnInit() {
  }


}
