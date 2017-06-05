import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import {SmartadminInputModule} from "../shared/forms/input/smartadmin-input.module";

import { AppStackRouting } from './appStack.routing';

import { AppStackComponent } from './app-stack/app-stack.component';
import { AppStackService } from './app-stack.service';
import { SingleInfraComponent } from './single-infra/single-infra.component';
import { SingleDetailComponent } from './single-detail/single-detail.component';

@NgModule({
    imports: [
        CommonModule,
        SmartadminModule,
        ReactiveFormsModule,
        FormsModule,
        AppStackRouting,
        NouisliderModule,
        SmartadminInputModule
    ],
    declarations: [
        AppStackComponent,
        SingleInfraComponent,
        SingleDetailComponent
    ],
    providers: [AppStackService],
    exports: [
        
    ]
})

export class appStackModule{}