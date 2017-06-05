import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppstackDeployNewComponent } from "app/+quickstart/+appstack-deploy-new/appstack-deploy-new.component";

const routes: Routes = [{
  path: "",
  component: AppstackDeployNewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppstackDeployNewRoutingModule { }
