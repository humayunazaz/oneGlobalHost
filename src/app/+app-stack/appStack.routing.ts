import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppStackComponent } from './app-stack/app-stack.component';
import { SingleDetailComponent } from './single-detail/single-detail.component';

export const routes: Routes = [
    {
        path:'',
        component: AppStackComponent,
        data: {pageTitle:''}
    },
    {
        path:'singleDetail/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'AppStack / Single Detail'}
    }
]

export const AppStackRouting = RouterModule.forChild(routes)