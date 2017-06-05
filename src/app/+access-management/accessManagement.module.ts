import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { accessRouting } from './accessManagement.routing';
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";

import { AccessManagementComponent } from './access-management/access-management.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';

@NgModule({
    imports: [
        CommonModule,
        accessRouting,
        SmartadminModule,
        ReactiveFormsModule,
        FormsModule,
        SmartadminDatatableModule
    ],
    declarations: [
        AccessManagementComponent,
        AddPermissionComponent,
        PolicyDetailComponent
    ],
    providers: [],
    exports: [
    ]
})

export class accessManagementModule{}