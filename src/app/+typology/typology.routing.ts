import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingleInstancesComponent } from './single-instances/single-instances.component';
import { IsolatedComponent } from './isolated/isolated.component';
import { InternetAccessComponent } from './internet-access/internet-access.component';
import { SingleDetailComponent } from './single-detail/single-detail.component';

export const routes: Routes = [
    {
        path: 'general/singleinstance',
        component: SingleInstancesComponent,
        data: {pageTitle: 'General / SingleInstance'}   
    },
    {
        path: 'general/singleinstance/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'General / SingleInstance / Single Detail'}   
    },
    {
        path: 'general/isolated',
        component: IsolatedComponent,
        data: {pageTitle: 'General / Isolated'}   
    },
    {
        path: 'general/isolated/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'General / Isolated / Single Detail'}   
    },
    {
        path: 'general/internetaccess',
        component: InternetAccessComponent,
        data: {pageTitle: 'General / InternetAccess'}   
    },
    {
        path: 'general/internetaccess/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'General / InternetAccess / Single Detail'}   
    },
    {
        path: 'powerConfigs/singleinstance',
        component: SingleInstancesComponent,
        data: {pageTitle: 'PowerConfigs / SingleInstance'}   
    },
    {
        path: 'powerConfigs/singleinstance/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'PowerConfigs / SingleInstance / Single Detail'}   
    },
    {
        path: 'powerConfigs/isolated',
        component: IsolatedComponent,
        data: {pageTitle: 'PowerConfigs / Isolated'}   
    },
    {
        path: 'powerConfigs/isolated/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'PowerConfigs / Isolated / Single Detail'}   
    },
    {
        path: 'powerConfigs/internetaccess',
        component: InternetAccessComponent,
        data: {pageTitle: 'PowerConfigs / InternetAccess'}   
    },
    {
        path: 'powerConfigs/internetaccess/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'PowerConfigs / InternetAccess / Single Detail'}   
    },
    {
        path: 'largeStorage/singleinstance',
        component: SingleInstancesComponent,
        data: {pageTitle: 'largeStorage / SingleInstance'}   
    },
    {
        path: 'largeStorage/singleinstance/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'largeStorage / SingleInstance / Single Detail'}   
    },
    {
        path: 'largeStorage/isolated',
        component: IsolatedComponent,
        data: {pageTitle: 'largeStorage / Isolated'}   
    },
    {
        path: 'largeStorage/isolated/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'largeStorage / Isolated / Single Detail'}   
    },
    {
        path: 'largeStorage/internetaccess',
        component: InternetAccessComponent,
        data: {pageTitle: 'largeStorage / InternetAccess'}   
    },
    {
        path: 'largeStorage/internetaccess/:id',
        component: SingleDetailComponent,
        data: {pageTitle: 'largeStorage / InternetAccess / Single Detail'}   
    }
]

export const TypologyRouting = RouterModule.forChild(routes)