import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { GroupComponent } from './group/group.component';
import { SingleuserComponent } from './user/singleuser/singleuser.component';
import { SinglegroupComponent } from './group/singlegroup/singlegroup.component';
import { GroupManagementMembershipComponent } from './group-management-membership/group-management-membership.component';

export const routes: Routes = [
    {
        path: 'userManagement',
        component: UserComponent,
        data: {pageTitle: 'UserManagement'}   
    },
    {
        path: 'singleuser/:id',
        component: SingleuserComponent,
        data: {pageTitle: 'SingleUser'}   
    },
    {
        path: 'groupManagement',
        component: GroupComponent,
        data: {pageTitle: 'GroupManagement'}   
    },
    {
        path: 'singlegroup/:id',
        component: SinglegroupComponent,
        data: {pageTitle: 'SingleGroup'}   
    },
    {
        path: 'groupmanagementmembership',
        component: GroupManagementMembershipComponent,
        data: {pageTitle: 'GroupManagementMembership'}
    }
  ];

export const userRouting = RouterModule.forChild(routes)