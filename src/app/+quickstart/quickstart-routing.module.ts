import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuickstartComponent } from "app/+quickstart/quickstart.component";

const routes: Routes = [{ 
    path: 'appstackDeployNew',
    loadChildren: 'app/+quickstart/+appstack-deploy-new/appstack-deploy-new.module#AppstackDeployNewModule',data: {pageTitle: 'Deploy New AppStack'}
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuickstartRoutingModule { }
