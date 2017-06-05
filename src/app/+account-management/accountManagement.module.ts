import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartadminModule } from "../shared/smartadmin.module";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { AccountService } from './account.service';

import { accountRouting } from './accountManagement.routing';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { SingleDetailComponent } from './single-detail/single-detail.component';
import { CurrentPlanComponent } from './current-plan/current-plan.component';
import { NewsComponent } from './news/news.component';
import { ConfigureComponent } from './configure/configure.component';
import { PaymentDetailComponent } from './single-detail/payment-detail/payment-detail.component';
import { CheckoutCustomComponent } from './single-detail/checkout-custom/checkout-custom.component';
import {SmartadminValidationModule} from "../shared/forms/validation/smartadmin-validation.module";
import {SmartadminInputModule} from "../shared/forms/input/smartadmin-input.module";


@NgModule({
    imports: [
        CommonModule,
        accountRouting,
        SmartadminModule,
        SmartadminValidationModule,
        SmartadminInputModule,
        ReactiveFormsModule,
        FormsModule,
        NouisliderModule
    ],
    declarations: [
        AccountDetailComponent,
        SingleDetailComponent,
        CurrentPlanComponent,
        NewsComponent,
        ConfigureComponent,
        PaymentDetailComponent,
        CheckoutCustomComponent
    ],
    providers: [AccountService],
    exports: [
        AccountDetailComponent,
        SingleDetailComponent
    ]
})

export class accountManagementModule{}