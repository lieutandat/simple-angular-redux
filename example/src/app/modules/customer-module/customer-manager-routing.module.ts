import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { CustomerManagerComponent } from './customer-manager.component';
import { CustomerInfoComponent } from './components/customer-info/customer-info.component';

const routing: Routes = [
    { path: '', component: CustomerManagerComponent },
    { path: 'customer-info', component: CustomerInfoComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routing)
    ],
    exports:[RouterModule]
})
export class CustomerManagerRoutingModule {}