import { Injectable } from '@angular/core';
import { BaseStore } from '../../core/store/baseStore';
import { GlobalStoreService } from '../../core/store/globalStore.service';
import { share } from 'rxjs/operators';
import { Order } from '../../core/model/Orders';

@Injectable()
export class OrderStoreService extends BaseStore<Order[]>  {
    constructor(globalStore: GlobalStoreService) {
        super(globalStore, 'orders', []);
    }

    addOrder(order: Order[]) {
        const currentState = this.getCurrentState();
        this.setState([...currentState, ...order]);
    }

    removeOrder(id: string) {
        const currentState = this.getCurrentState();
        const filter = currentState.filter(item => item.id !== id);
        this.setState(filter);
    }

    getAll() {
        return this.getListening().pipe(share());
    }

    getOrder(id: string) {
        const currentState = this.getCurrentState();
        const filter = currentState.filter(item => item.id === id);
        return filter.pop();
    }
}
