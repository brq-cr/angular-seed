import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AuthenticationActions } from '../data-flow/actions/auth';

 
@Injectable()
export class AuthenticationService {

    constructor(private actions: AuthenticationActions, private store: Store<any>) {
    }
 
    logIn({username,password}) {
        this.store.dispatch(this.actions.logIn({username,password}));
    }
 
    logOut() {
        localStorage.removeItem('userToken');
    }
}