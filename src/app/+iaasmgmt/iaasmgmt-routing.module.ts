import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IaasmgmtComponent } from "app/+iaasmgmt/iaasmgmt.component";

const routes: Routes = [{
    path: '',
    component: IaasmgmtComponent    
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IaasmgmtRoutingModule { }
