import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { projectsRouting } from './projectsManagement.routing';
import { SmartadminDatatableModule } from "../shared/ui/datatable/smartadmin-datatable.module";

import { ProjectsComponent } from './projects/projects.component';
import { InfraDetailComponent } from './infra-detail/infra-detail.component';
import { StackDetailComponent } from './stack-detail/stack-detail.component';

@NgModule({
    imports: [
        CommonModule,
        projectsRouting,
        SmartadminModule,
        ReactiveFormsModule,
        FormsModule,
        SmartadminDatatableModule
    ],
    declarations: [
        ProjectsComponent,
        InfraDetailComponent,
        StackDetailComponent
    ],
    providers: [
        
    ],
    exports: [
    ]
})

export class projectsManagementModule{}