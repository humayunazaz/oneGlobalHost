import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SingleDetailComponent } from './single-detail/single-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: AccountDetailComponent,
        data: {pageTitle: ''}   
    },
    {
        path: 'detail/:name',
        component: SingleDetailComponent,
        data: {pageTitle: 'AccountDetail'}   
    }
]

export const accountRouting = RouterModule.forChild(routes)