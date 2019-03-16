import { Component, Input } from "@angular/core";
import { Customer } from 'src/core/model/Customer';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'customer-card',
    templateUrl: './customer-card.component.html',
    styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent {
    @Input() data: Customer;
    constructor(private activateRoute: ActivatedRoute, private router: Router) {
    }
    onViewDetails(args) {
        console.log('vao day');
        this.router.navigate(['customer-info'], {
            relativeTo: this.activateRoute,
            queryParams: {
            customer: JSON.stringify(this.data)
        }});
    }
}
