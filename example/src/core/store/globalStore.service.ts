import { Injectable } from '@angular/core';
import { Store } from './store';
import { Observable } from 'rxjs';
import { map, distinctUntilChanged, takeUntil, filter } from 'rxjs/operators';

interface GlobalStoreState {
    forms?: object;
}

@Injectable({
    providedIn: 'root'
})
export class GlobalStoreService extends Store<GlobalStoreState> {
    constructor() {
        super({});
    }

    logger(id: string, value?: any) {
        console.log(id, this.state, value);
    }

    register<T>(id: string, initializeState?: T) {
        const state = this.state;
        let forms = state.forms;
        this.logger('GlobalStoreService.register:' + id, initializeState);
        if (!forms) {
            forms = {};
        }
        if (!forms[id]) {
            this.setState({
                ...this.state,
                forms: {
                    ...forms,
                    [id]: initializeState ? initializeState : null
                }
            });
            this.logger('GlobalStoreService.register=>after');
        }
    }

    unRegister(id: string) {
        const state = this.state;
        const forms = state.forms;
        this.logger('GlobalStoreService.unRegister:' + id);
        if (forms[id]) {
            delete forms[id];
            this.setState({
                ...this.state,
                forms: {
                    ...forms
                }
            });
            this.logger('GlobalStoreService.unRegister=>after');
        }
    }

    updateState<T>(formId: string, value: T) {
        this.logger('GlobalStoreService.updateState', value);
        this.setState({
            ...this.state,
            forms: {
                ...this.state.forms,
                [formId]: value
            }
        });
        this.logger('GlobalStoreService.updateState=>after');
    }

    getState<T>(formId: string): T {
        return this.state.forms[formId];
    }

    stateUpdateListening<T>(formId: string): Observable<T> {
        return this.listeningChange().pipe(
            map(res => {
                return res.forms[formId];
            })
        ).pipe(
            distinctUntilChanged(),
            takeUntil(
                this.listeningChange().pipe(
                    filter(filterData => filterData.forms[formId] === null)
                )
            )
        );
    }
}
