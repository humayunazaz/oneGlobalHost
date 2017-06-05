import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() groups:any;
  @Input() projects: any;
  @Input() form:string;
  @Output() addResult = new EventEmitter();
  @Input() user:Boolean = true;
  @Input() admins:any;
  @Input() search = false;
  userForm:FormGroup;
  groupForm:FormGroup;
  searchForm:FormGroup;
  
  constructor(private fb:FormBuilder) { 
      this.userForm = this.fb.group({
        name: ['', Validators.required],
        organization: ['', Validators.required],
        accountstatus: [''],
        loginstatus: [''],
        group: [''],
        project: ['']
      });

      this.groupForm = this.fb.group({
        name: ['', Validators.required],
        gravatar: ['', Validators.required],
        administrators: ['', Validators.required]
      });

      this.searchForm = this.fb.group({
        name: ['', Validators.required],
        gravatar: ['', Validators.required]
      })
    
  }
  
  onSubmit(){
    let value;
    if(this.user){
      value = this.userForm.value;
    } else if(!this.user && !this.search){
      value = this.groupForm.value;
    } else{
      value = this.searchForm.value;
    }
    
    this.addResult.emit({add:value});
    this.userForm.reset();
    this.groupForm.reset();
    this.searchForm.reset();
  }

  ngOnInit() {
  }

}
