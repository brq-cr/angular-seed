import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { UserActions } from '../data-flow/actions/user';

@Injectable()
export class UserService {
  usersState$: Observable<any>;

  constructor(private actions: UserActions, private store: Store<any>) {}

  getUsers() {
    this.store.dispatch(this.actions.fetchUsers());
    this.usersState$ = this.store.select('users') as Observable<any>;
    return this.usersState$.map(store => store.users);
  }

  getAuthenticatedUser() {
    this.store.dispatch(this.actions.fetchMe());
    this.usersState$ = this.store.select('users') as Observable<any>;
    return this.usersState$.map(store => store.me);
  }

  addUser(user){
    this.store.dispatch(this.actions.addUser(user));
  }
  
}