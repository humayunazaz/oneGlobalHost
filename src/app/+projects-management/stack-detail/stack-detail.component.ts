import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-detail',
  templateUrl: './stack-detail.component.html',
  styleUrls: ['./stack-detail.component.css']
})
export class StackDetailComponent implements OnInit {

  constructor() { }
  infra = 'Infra1';
  cpus = 2;
  memory = '16GB';
  storage = "250GB";
  ngOnInit() {
  }

}
