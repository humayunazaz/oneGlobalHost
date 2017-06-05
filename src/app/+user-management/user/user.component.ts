import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }
 
  data:any = [];
  rowsOnPage = 3;
  sortBy = 'email';
  loading = true;
  flash = false;
  // heads = [
  //   {prop: 'Id'}, 
  //   {name:'Gravatar'}, 
  //   {name: 'Name'}, 
  //   {name: 'Organization'}, 
  //   {name: 'Groups'}, 
  //   {name: 'Contacts'},
  //   {name: 'LastLogin'}, 
  //   {name: 'LoginStatus'}, 
  //   {name: 'AccountStatus'}
  // ];

  public options = {
  "ajax": 'users.json',
  "iDisplayLength": 3,
  "columns": [
    {
      "class": 'details-control',
      "orderable": false,
      "data": null,
      "defaultContent": ''
    },
    {"data": "id"},
    {"data": "gravatar"},
    {"data": "name"},
    {"data": "organization"},
    {"data": "groups"},
    {"data": "contacts"},
    {"data": "lastlogin"},
    {"data": "loginstatus"},
    {"data": "accountstatus"}
  ],
  "order": [[1, 'asc']]
}

public detailsFormat(d) {

    return `<table cell-padding="5" cell-spacing="0" border="0" class="table table-hover table-condensed">
            <tbody><tr>
                <td style="width:100px">Id:</td>
                <td>${d.id}</td>
            </tr>
            <tr>
                <td>Name:</td>
                <td class="single">${d.name}</td>
            </tr>
            <tr>
                <td>Last Login:</td>
                <td>${d.lastlogin}</td>
            </tr>
            <tr>
                <td>Account status:</td>
                <td>
                  <span class="onoffswitch accountsStatus">
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="accountstatus" ng-model="demoShowTabs" checked = ${d.accountstatus == 'active'} (change)="updateAccount($event)">
                    <label class="onoffswitch-label" for="accountstatus">
                      <span class="onoffswitch-inner" data-swchon-text="Active" data-swchoff-text="Inactive"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </span>
                </td>
            </tr>
            <tr>
              <td>Groups</td>
              <td>${d.groups}</td>
            </tr>
            <tr>
              <td>Projects</td>
              <td>${d.projects}</td>
            </tr>
            <tr>
                <td>Login status:</td>
                <td>
                  <span class="onoffswitch">
                    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="loginstatus" ng-model="demoShowTabs" checked = ${d.loginstatus == 'on'}>
                    <label class="onoffswitch-label" for="loginstatus">
                      <span class="onoffswitch-inner" data-swchon-text="On" data-swchoff-text="Off"></span>
                      <span class="onoffswitch-switch"></span>
                    </label>
                  </span>
                </td>
            </tr>
            <tr>
              <td>
                <button type="button" class="btn btn-labeled btn-danger">
                  <span class="btn-label">
                    <i class="glyphicon glyphicon-trash"></i>
                  </span>
                  Delete
                </button>
              </td>
            </tr>
            </tbody>
        </table>`
  }
  getUsers(url){
    this.userService.getContent(url).subscribe(
      data => {
        this.data = data;
        // console.log(JSON.stringify(this.data));
      },
      null,
      () => {this.loading = false;}
    )
  }
  addUser(event){
    this.loading = true;
    this.data.push(event);

    this.loading = false;
    this.flash = true;

    setTimeout(() => {
      this.flash = false;
    }, 1500);
  }
  updateAccount(event){
    console.log(event);
  }
  ngOnInit() {
    let url = '../users.json';
    this.getUsers(url);
  }

}
