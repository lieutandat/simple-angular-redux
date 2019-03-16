import { Component } from '@angular/core';
import { Customer } from 'src/core/model/Customer';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { CustomerStoreService } from '../../../../../services/stores/customerStore.service';

@Component({
    selector: 'customer-info',
    templateUrl: './customer-info.component.html',
    styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent {
  customer: Customer;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private activateRoute: ActivatedRoute, private customerStore: CustomerStoreService) {
      this.activateRoute.queryParams.subscribe(params => {
          this.customer = JSON.parse(params.customer);
      });
  }

  pageEvent(args) {
    this.customerStore.addCustomer([{
        firstName: 'Adding',
        id: '5'
    }])
  }
}
