import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppstackDeployNewRoutingModule } from './appstack-deploy-new-routing.module';
import { AppstackDeployNewComponent } from './appstack-deploy-new.component';
import { SmartadminModule } from "app/shared/smartadmin.module";

@NgModule({
  imports: [
    SmartadminModule,
    AppstackDeployNewRoutingModule
  ],
  declarations: [AppstackDeployNewComponent]
})
export class AppstackDeployNewModule { }
