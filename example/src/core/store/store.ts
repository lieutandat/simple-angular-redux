import { BehaviorSubject } from 'rxjs';

export class Store<T> {
    private state$: BehaviorSubject<T>;

    constructor(initialState: T) {
        this.state$ = new BehaviorSubject(initialState);
    }

    protected get state(): T {
        return this.state$.getValue();
    }

    protected setState(nextState: T): void {
        this.state$.next(nextState);
    }

    protected listeningChange() {
        return this.state$;
    }
}
