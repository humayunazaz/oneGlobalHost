import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  addAdmin = false;
  openInfra = '';
  constructor() { }
  addAdminis(event){
    console.log(event.target.checked);
    if(event.target.checked){
      this.addAdmin = true;
    } else{
      this.addAdmin = false;
    }
  }
  options = {
    "colReorder": "true",
    "ajax": 'administrator.json',
    "iDisplayLength": 3,
    "columns": [  
      {'data': 'check'}, 
      {'data': 'name'}, 
      ] 
  }
  options2 = {
  "colReorder": "true",
  "ajax": 'projects.json',
  "iDisplayLength": 10,
  "columns": [
    {"data": "projectname"},
    {"data": "administrators"},
    {"data": "status"},
    {"data": "starts"},
    {"data": "modifi"},
  ],
  "order": [[1, 'asc']]
}
options3 = {
    "colReorder": "true",
    "ajax": 'projects-infra.json',
    "iDisplayLength": 3,
    "columns": [  
      {'data': 'name'}, 
      {'data': 'cloud'},
      {'data': 'detail'} 
      ] 
}
options4 = {
    "colReorder": "true",
    "ajax": 'projects-stack.json',
    "iDisplayLength": 3,
    "columns": [  
      {'data': 'name'}, 
      {'data': 'cloud'},
      {'data': 'detail'} 
      ] 
}
openProject(event){
  this.openInfra = event;
}
  ngOnInit() {
  }

}
