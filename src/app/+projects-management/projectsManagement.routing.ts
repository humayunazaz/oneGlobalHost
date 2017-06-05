import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectsComponent } from './projects/projects.component';
import { InfraDetailComponent } from './infra-detail/infra-detail.component';
import { StackDetailComponent } from './stack-detail/stack-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: ProjectsComponent,
        data: {pageTitle:''}
    },
    {
        path: 'infraDetail',
        component: InfraDetailComponent,
        data: {pageTitle:'Infrastructure Detail'}
    },
    {
        path: 'stackDetail',
        component: StackDetailComponent,
        data: {pageTitle:'AppStack Detail'}
    }    
]

export const projectsRouting = RouterModule.forChild(routes)