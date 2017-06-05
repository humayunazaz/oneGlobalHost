import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaasmgmtRoutingModule } from './paasmgmt-routing.module';
import { PaasmgmtComponent } from './paasmgmt.component';

@NgModule({
  imports: [
    CommonModule,
    PaasmgmtRoutingModule
  ],
  declarations: [PaasmgmtComponent]
})
export class PaasmgmtModule { }
