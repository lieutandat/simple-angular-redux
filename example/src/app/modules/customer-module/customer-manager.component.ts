import { Component } from '@angular/core';
import { Customer } from 'src/core/model/Customer';
import { CustomerStoreService } from '../../../services/stores/customerStore.service';
import { OrderStoreService } from '../../../services/stores/OrderStore.service';

@Component({
  selector: 'customer-manager',
  templateUrl: './customer-manager.component.html',
  styleUrls: ['./customer-manager.component.css']
})
export class CustomerManagerComponent {
  customers: Customer[];
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private customerStore: CustomerStoreService, private orderStore: OrderStoreService) {

    this.customerStore.getAll().subscribe(res => {
      console.log('customerStore Changed');
      this.customers =  res;
    });
    this.orderStore.getAll().subscribe(res => {
      console.log('orderStore changed');
    });
  }

  unRegister() {
    this.customerStore.unRegister();
  }

  addCUstomer() {
    const random = Math.round(Math.random() * 100);
    const customer = {
      id: '1' + random,
      firstName: 'John' + random,
      lastName: 'Mathew' + random,
      address: '',
      city: '',
      oderTotal: 100000,
      state: ''
    };
    this.customerStore.addCustomer([customer]);
  }

  addOrder() {
    const random = Math.round(Math.random() * 100);
    const order = {
      id: '1' + random,
      customerId: '1' + random
    };
    this.orderStore.addOrder([order]);
  }

  pageEvent(args) {

  }
}
