import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsmgmtComponent } from "app/+projectsmgmt/projectsmgmt.component";

const routes: Routes = [{
  path: '',
  component: ProjectsmgmtComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsmgmtRoutingModule { }
