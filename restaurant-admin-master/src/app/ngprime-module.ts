import {NgModule} from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { ChartModule } from 'primeng/chart';
import { GMapModule } from 'primeng/gmap';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {SidebarModule} from 'primeng/sidebar';
import {TableModule} from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
    exports: [
        InputTextModule,
        CheckboxModule,
        CardModule,
        FieldsetModule,
        ProgressSpinnerModule,
        ToastModule,
        ChartModule,
        GMapModule,
        DialogModule,
        ButtonModule,
        MenuModule,
        SidebarModule,
        TableModule,
        SelectButtonModule,
        MultiSelectModule
    ]
})

export class PrimeNgReqModules {}