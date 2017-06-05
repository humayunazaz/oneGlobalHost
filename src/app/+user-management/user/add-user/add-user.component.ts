import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @Output() updateUser = new EventEmitter();

  constructor() { }
  groups=['DevOps', 'Management', 'Engineering'];
  projects=['DevOps', 'Management', 'Engineering'];
  form = 'add';
  newUser(event){
    this.updateUser.emit({update:event});
  }

  ngOnInit() {
  }

}
