import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-permission',
  templateUrl: './add-permission.component.html',
  styleUrls: ['./add-permission.component.css']
})
export class AddPermissionComponent implements OnInit {

  constructor() { }
  options = {
    "ajax": 'add-permission.json',
    
    "columns": [
      {'data':'check'},
      {
        "class": 'details-control',
        "orderable": false,
        "data": null,
        "defaultContent": ''
      },
      {'data':'name'},
      {'data': 'type'},
      {'data':'description'}
    ]
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
                  <td class="permissionNavi">${d.service}</td>
                  <td>${d.access}</td>
                  <td>${d.resource}</td>
                  <td>${d.request}</td>
              </tr>
              <tr>
                  <td class="permissionNavi">${d.service2}</td>
                  <td>${d.access2}</td>
                  <td>${d.resource2}</td>
                  <td>${d.request2}</td>
              </tr>
              <tr>
                  <td class="permissionNavi">${d.service3}</td>
                  <td>${d.access3}</td>
                  <td>${d.resource3}</td>
                  <td>${d.request3}</td>
              </tr>
            </tbody>
        </table>`
  }
  ngOnInit() {
  }

}
