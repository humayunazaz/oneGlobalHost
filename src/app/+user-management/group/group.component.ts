import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  data;
  rowsOnPage = 3;
  sortBy= 'id';
  loading = true;
  user = false;
  flash = false;

  constructor(private userService:UserService) { }

   public options = {
    "ajax": 'groups.json',
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
      {"data": "contacts"},
      {"data": "admins"},
      {"data": "members"}
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
                <td>${d.name}</td>
            </tr>
            <tr>
                <td>Gravatar:</td>
                <td>${d.gravatar}</td>
            </tr>
            <tr>
              <td>Admin:</td>
              <td>${d.admins}</td>
            </tr>
            <tr>
              <td>Groups:</td>
              <td>${d.members}</td>
            </tr>
            </tbody>
        </table>`
  }
  newGroup(event){
    this.loading = true;
    this.data.push(event);
    console.log(event);
    this.loading = false;
    this.flash = true;

    setTimeout(() => {
      this.flash = false;
    }, 1500);
  }
  getGroups(url){
    this.userService.getContent(url).subscribe(
      data => {
        this.data = data;
      },
      null,
      () => {this.loading = false;}
    )
  }
  ngOnInit() {
    let url = 'groups.json';
    this.getGroups(url);
  }

}
