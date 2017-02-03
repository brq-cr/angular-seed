import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { LoadingActions } from '../data-flow/actions/loading';

 
@Injectable()
export class LoadingService {
    private subject = new Subject<any>();
 
    constructor(private actions: LoadingActions, private store: Store<any>) {
    }
 
    showIndicator() {
        this.store.dispatch(this.actions.show());
    }
 
    hideIndicator() {
        this.store.dispatch(this.actions.hide());
    }
 
    getIndicatorStatus(): Observable<any> {
        return this.store.select('loading') as Observable<any>;
    }
}