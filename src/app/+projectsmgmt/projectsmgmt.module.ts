import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsmgmtRoutingModule } from './projectsmgmt-routing.module';
import { ProjectsmgmtComponent } from './projectsmgmt.component';
import { SmartadminModule } from "app/shared/smartadmin.module";
import { TreeViewModule } from "app/shared/ui/tree-view/tree-view.module";

@NgModule({
  imports: [
    CommonModule,
    SmartadminModule,
    TreeViewModule,
    ProjectsmgmtRoutingModule
  ],
  declarations: [ProjectsmgmtComponent]
})
export class ProjectsmgmtModule { }
