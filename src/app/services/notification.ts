import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { NotificationActions } from '../data-flow/actions/notification';

 
@Injectable()
export class NotificationService {
    private keepAfterNavigationChange = false;
 
    constructor(private router: Router, private store: Store<any>, private actions: NotificationActions) {
        // clear notification message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear notification
                    this.store.dispatch(this.actions.clearNotification());
                }
            }
        });
    }
 
    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.store.dispatch(this.actions.showNotification({
            text: message,
            type: 'SUCCESS'
        }));
    }
 
    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.store.dispatch(this.actions.showNotification({
            text: message,
            type: 'ERROR'
        }));
    }

    clear() {
        this.keepAfterNavigationChange = false;
        this.store.dispatch(this.actions.clearNotification());
    }
 
    getMessage(): Observable<any> {
        return this.store.select('notification') as Observable<any>;
    }
}