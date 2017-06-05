import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  
  @Output() addGroup = new EventEmitter();

  constructor() { }
  
  admins = ['Carol', 'Orson', 'Victor'];
  form = 'Add';
  user = false;
  search = false;
  newGroup(event){
    console.log(event);
    this.addGroup.emit({update: event});
  }
  ngOnInit() {
  }

}
