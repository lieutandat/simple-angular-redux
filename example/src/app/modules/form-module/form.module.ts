import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormRoutingModule } from './form-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator'

@NgModule({
    imports:[
        CommonModule,
        FormRoutingModule,
        MatPaginatorModule
    ],
    declarations: [
        FormComponent,
    ]
})
export class FormModule {}