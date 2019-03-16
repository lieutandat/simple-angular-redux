import { Injectable } from '@angular/core';
import { Customer } from '../../core/model/Customer';
import { BaseStore } from '../../core/store/baseStore';
import { GlobalStoreService } from '../../core/store/globalStore.service';
import { share } from 'rxjs/operators';

@Injectable()
export class CustomerStoreService extends BaseStore<Customer[]>  {
    constructor(globalStore: GlobalStoreService) {
        super(globalStore, 'customers', [
            {
                id: '1',
                firstName: 'John',
                lastName: 'Mathew',
                address: '',
                city: '',
                oderTotal: 100000,
                state: ''
              }
        ]);
    }

    addCustomer(customers: Customer[]) {
        const currentState = this.getCurrentState();
        this.setState([...currentState, ...customers]);
    }

    removeCustomer(id: string) {
        const currentState = this.getCurrentState();
        const filter = currentState.filter(item => item.id !== id);
        this.setState(filter);
    }

    getAll() {
        return this.getListening().pipe(share());
    }

    getCustomer(id: string) {
        const currentState = this.getCurrentState();
        const filter = currentState.filter(item => item.id === id);
        return filter.pop();
    }

}
