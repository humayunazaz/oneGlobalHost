import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { TypologyRouting } from './typology.routing';

import { SingleInstancesComponent } from './single-instances/single-instances.component';
import { IsolatedComponent } from './isolated/isolated.component';
import { InternetAccessComponent } from './internet-access/internet-access.component';
import { SingleInfraComponent } from './single-infra/single-infra.component';
import { InfraService } from './infra.service';
import { SingleDetailComponent } from './single-detail/single-detail.component';

@NgModule({
    imports: [
        CommonModule,
        SmartadminModule,
        ReactiveFormsModule,
        FormsModule,
        TypologyRouting,
        NouisliderModule
    ],
    declarations: [
        SingleInstancesComponent,
        IsolatedComponent,
        InternetAccessComponent,
        SingleInfraComponent,
        SingleDetailComponent
    ],
    providers: [InfraService],
    exports: [
        
    ]
})

export class typologyManagementModule{}