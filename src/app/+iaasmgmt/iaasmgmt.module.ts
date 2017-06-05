import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IaasmgmtRoutingModule } from './iaasmgmt-routing.module';
import { IaasmgmtComponent } from './iaasmgmt.component';
import { SmartadminModule } from "app/shared/smartadmin.module";


@NgModule({
  imports: [
    SmartadminModule,
    IaasmgmtRoutingModule
  ],
  declarations: [IaasmgmtComponent]
})
export class IaasmgmtModule { }
