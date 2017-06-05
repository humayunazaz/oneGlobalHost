import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { auditRouting } from './audit.routing';
import { FlotChartModule } from "../shared/graphs/flot-chart/flot-chart.module";
import {SmartadminDatatableModule} from "../shared/ui/datatable/smartadmin-datatable.module";

import { AuditComponent } from './audit/audit.component';
import { LiveFeedsComponent } from './live-feeds/live-feeds.component';
import { LiveStatsComponent } from './live-stats/live-stats.component';
import { RevenueComponent } from './revenue/revenue.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { ProjectsComponent } from './projects/projects.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';

@NgModule({
    imports: [
        CommonModule,
        auditRouting,
        SmartadminModule,
        ReactiveFormsModule,
        FormsModule,
        FlotChartModule,
        SmartadminDatatableModule
    ],
    declarations: [
        AuditComponent,
        LiveFeedsComponent,
        LiveStatsComponent,
        RevenueComponent,
        SocialNetworkComponent,
        ProjectsComponent,
        ActivityLogComponent
    ],
    providers: [],
    exports: [
        
    ]
})

export class auditManagementModule{}