import { Component } from "@angular/core";

@Component({
    selector: 'form-schema',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent {
    length = 200;
    pageSize = 10;
    pageSizeOptions: number[] = [5, 10, 25, 100];
    pageEvent(event) {
        console.log(event);
    }
}
