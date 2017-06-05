import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickstartRoutingModule } from './quickstart-routing.module';
import { QuickstartComponent } from './quickstart.component';
import { SmartadminModule } from "app/shared/smartadmin.module";

@NgModule({
  imports: [
    SmartadminModule,
    QuickstartRoutingModule
  ],
  declarations: [QuickstartComponent]
})
export class QuickstartModule { }
