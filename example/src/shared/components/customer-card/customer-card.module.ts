import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { CustomerCardComponent } from './customer-card.component';


@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [
        CustomerCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        CustomerCardComponent
    ]
})
export class CustomerCardModule {}


