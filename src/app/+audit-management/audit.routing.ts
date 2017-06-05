import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit/audit.component';

export const routes: Routes = [
    {
        path: '',
        component: AuditComponent,
        data: {pageTitle: ''}
    }
]

export const auditRouting = RouterModule.forChild(routes)