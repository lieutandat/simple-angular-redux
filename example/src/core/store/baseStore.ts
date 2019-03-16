import { GlobalStoreService } from './globalStore.service';
import { share } from 'rxjs/operators';

export class BaseStore<T> {
    constructor(private globalStore: GlobalStoreService, private formId: string, private initializeState: T) {
        this.globalStore.register(this.formId, initializeState);
    }

    protected getCurrentState(): T {
        return this.globalStore.getState<T>(this.formId);
    }

    protected setState(data: T) {
        this.globalStore.updateState<T>(this.formId, data);
    }

    protected getListening() {
        return this.globalStore.stateUpdateListening<T>(this.formId).pipe(share());
    }

    unRegister() {
        this.globalStore.unRegister(this.formId);
    }
}
