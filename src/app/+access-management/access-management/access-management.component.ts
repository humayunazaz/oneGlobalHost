import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-access-management',
  templateUrl: './access-management.component.html',
  styleUrls: ['./access-management.component.css']
})
export class AccessManagementComponent implements OnInit {

  constructor(private router:Router) { }
  options = {
    "colReorder": "true",
    "ajax": 'access.json',
    "columns": [  
      {'data': 'name'}, 
      {'data': 'login'}, 
      {'data': 'account'}, 
      {'data': 'creation'}
      ] 
  }
  options2 = {
    "ajax": 'single-access.json',
    
    "columns": [
      {
        "class": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      },
      {'data':'name'},
      {'data': 'type'},
      {'data':'status'}
    ]
  }
  newTableValue;
  newTable = false;
  updateSingle(event){
    this.newTableValue = event.value;
    this.newTable = true;
  }

  public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <thead>
              <tr>
                <th>Service</th>
                <th>Access Level</th>
                <th>Resource</th>
                <th>Request Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                  <td>${d.service}</td>
                  <td>${d.access}</td>
                  <td>${d.resource}</td>
                  <td>${d.request}</td>
              </tr>
              <tr>
                  <td>${d.service2}</td>
                  <td>${d.access2}</td>
                  <td>${d.resource2}</td>
                  <td>${d.request2}</td>
              </tr>
            </tbody>
        </table>`
  }

  gotoAdd(){
    this.router.navigate(['access/addPermission']);
  }

  ngOnInit() {
  }

}
