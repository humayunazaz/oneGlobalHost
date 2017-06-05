import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { userRouting } from './userManagement.routing';
import { ReactiveFormsModule } from '@angular/forms';

import {SmartadminModule} from "../shared/smartadmin.module";
import {DataTableModule} from "angular2-datatable";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";

import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserSearchComponent } from './user/user-search/user-search.component';
import { DataTableComponent } from './data-table/data-table.component';
import { UserService } from './user.service';
import { SingleuserComponent } from './user/singleuser/singleuser.component';
import { SinglegroupComponent } from './group/singlegroup/singlegroup.component';
import { AddGroupComponent } from './group/add-group/add-group.component';
import { SearchGroupComponent } from './group/search-group/search-group.component';
import { GroupManagementMembershipComponent } from './group-management-membership/group-management-membership.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        userRouting,
        DataTableModule,
        ReactiveFormsModule,
        NgxDatatableModule,
        SmartadminModule,
        SmartadminDatatableModule
    ],
    declarations: [
        UserComponent,
        GroupComponent,
        AddUserComponent,
        UserFormComponent,
        UserSearchComponent,
        DataTableComponent,
        SingleuserComponent,
        SinglegroupComponent,
        AddGroupComponent,
        SearchGroupComponent,
        GroupManagementMembershipComponent
    ],
    providers: [UserService],
    exports: [ 
        UserComponent,
        GroupComponent
    ]
})


export class userManagementModule{}