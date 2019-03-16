import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

import { CustomerManagerComponent } from './customer-manager.component';
import { CustomerManagerRoutingModule } from './customer-manager-routing.module';
import { CustomerCardModule } from 'src/shared/components/customer-card/customer-card.module';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';
import { CustomerStoreService } from '../../../services/stores/customerStore.service';
import { OrderStoreService } from '../../../services/stores/OrderStore.service';

@NgModule({
    imports:[
        CommonModule,
        MatTabsModule,
        MatIconModule,
        MatPaginatorModule,
        MatSelectModule,
        CustomerManagerRoutingModule,
        CustomerCardModule,
    ],
    declarations: [
        CustomerManagerComponent,
        CustomerInfoComponent
    ],
    providers: [
        CustomerStoreService,
        OrderStoreService
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class CustomerManagerModule {}