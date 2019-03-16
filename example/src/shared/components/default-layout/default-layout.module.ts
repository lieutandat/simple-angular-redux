import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { DefaultLayoutComponent } from './default-layout.component';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    declarations: [
        DefaultLayoutComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        DefaultLayoutComponent
    ]
})
export class DefaultLayoutModule {}


