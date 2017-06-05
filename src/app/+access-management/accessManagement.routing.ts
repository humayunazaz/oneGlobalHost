import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessManagementComponent } from './access-management/access-management.component';
import { AddPermissionComponent } from './add-permission/add-permission.component';
import { PolicyDetailComponent } from './policy-detail/policy-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: AccessManagementComponent,
        data: {pageTitle: ''}
    },
    {
        path: 'addPermission',
        component: AddPermissionComponent,
        data: {pageTitle: 'Add Permission'}
    },
    {
        path: 'policyDetail/:name',
        component: PolicyDetailComponent,
        data: {pageTitle: 'Policy Detail'}
    }    
]

export const accessRouting = RouterModule.forChild(routes)