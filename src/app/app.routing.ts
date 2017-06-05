/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    data: {pageTitle: 'Home'},
    children: [
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full',


      },
      // {path: 'home', loadChildren: 'app/+home/home.module#HomeModule',data:{pageTitle: 'Home'}},
      // {path: 'quickstart', loadChildren: 'app/+quickstart/quickstart.module#QuickstartModule',data:{pageTitle: 'Quick Start'}},
      // {path: 'projects', loadChildren: 'app/+projectsmgmt/projectsmgmt.module#ProjectsmgmtModule',data:{pageTitle: 'Projects'}},
      // {path: 'infrastructure', loadChildren: 'app/+iaasmgmt/iaasmgmt.module#IaasmgmtModule',data:{pageTitle: 'Infrastructure'}},
      {path: 'users', loadChildren: 'app/+user-management/userManagement.module#userManagementModule',data:{pageTitle: 'User'}},
      {path: 'accounts', loadChildren: 'app/+account-management/accountManagement.module#accountManagementModule',data:{pageTitle: 'Account'}},
      {path: 'infrastructure', loadChildren: 'app/+infrastructure/infrastructure.module#infrastructureManagementModule',data:{pageTitle: 'Infrastructure'}},
      // {path: 'typology', loadChildren: 'app/+typology/typology.module#typologyManagementModule',data:{pageTitle: 'Typology'}},
      {path: 'dashboard', loadChildren: 'app/+audit-management/audit.module#auditManagementModule',data:{pageTitle: 'Dashboard'}},
      {path: 'appStack', loadChildren: 'app/+app-stack/appStack.module#appStackModule',data:{pageTitle: 'AppStack'}},
      {path: 'access', loadChildren: 'app/+access-management/accessManagement.module#accessManagementModule',data:{pageTitle: 'Access Management'}},
      {path: 'projects', loadChildren: 'app/+projects-management/projectsManagement.module#projectsManagementModule',data:{pageTitle: 'Projects Management'}},
      // {path: 'dashboard', loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',data:{pageTitle: 'Dashboard'}},
      // {path: 'smartadmin', loadChildren: 'app/+smartadmin-intel/smartadmin-intel.module#SmartadminIntelModule',data:{pageTitle: 'Smartadmin'}},
      // {path: 'app-views', loadChildren: 'app/+app-views/app-views.module#AppViewsModule',data:{pageTitle: 'App Views'}},
      // {path: 'calendar', loadChildren: 'app/+calendar/calendar.module#CalendarModule',data:{pageTitle: 'Calendar'}},
      // {path: 'e-commerce', loadChildren: 'app/+e-commerce/e-commerce.module#ECommerceModule',data:{pageTitle: 'E-commerce'}},
      // {path: 'forms', loadChildren: 'app/+forms/forms-showcase.module#FormsShowcaseModule',data:{pageTitle: 'Forms'}},
      // {path: 'graphs', loadChildren: 'app/+graphs/graphs-showcase.module#GraphsShowcaseModule',data:{pageTitle: 'Graphs'}},
      // {path: 'maps', loadChildren: 'app/+maps/maps.module#MapsModule',data:{pageTitle: 'Maps'}},
      // {path: 'miscellaneous', loadChildren: 'app/+miscellaneous/miscellaneous.module#MiscellaneousModule',data:{pageTitle: 'Miscellaneous'}},
      // {path: 'outlook', loadChildren: 'app/+outlook/outlook.module#OutlookModule',data:{pageTitle: 'Outlook'}},
      // {path: 'tables', loadChildren: 'app/+tables/tables.module#TablesModule',data:{pageTitle: 'Tables'}},
      // {path: 'ui', loadChildren: 'app/+ui-elements/ui-elements.module#UiElementsModule',data:{pageTitle: 'Ui'}},
      // {path: 'widgets', loadChildren: 'app/+widgets/widgets-showcase.module#WidgetsShowcaseModule',data:{pageTitle: 'Widgets'}},
    ]
  },

  // { path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  {path: '**', redirectTo: 'home'}
//
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
