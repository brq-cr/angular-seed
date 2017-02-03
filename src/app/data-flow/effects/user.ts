import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { GraphService } from './../../services/graph';
import { LoadingService } from  './../../services/loading';
import { NotificationService } from  './../../services/notification';
import { UserActions, UserActionTypes } from  './../actions/user';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private graph: GraphService,
    private userActions: UserActions,
    private loadingService: LoadingService,
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  @Effect()
  fetchUsers$ = this.actions$
    .ofType(UserActionTypes.FETCH_USERS)
    .do(()=>this.loadingService.showIndicator())
    .switchMap(() => this.graph.fetchUsers()
      .do(()=>this.loadingService.hideIndicator())
      .map(query => this.userActions.fetchUsersFulfilled(query.viewer.users.edges))
      .catch(error => Observable.of(this.userActions.fetchUsersFailed(error)))
    );
  
  @Effect()
  fetchMe$ = this.actions$
    .ofType(UserActionTypes.FETCH_ME)
    .do(()=>this.loadingService.showIndicator())
    .switchMap(() => this.graph.me()
      .do(()=>this.loadingService.hideIndicator())
      .map(query => this.userActions.fetchMeFulfilled(query.viewer.me))
      .catch(error => Observable.of(this.userActions.fetchMeFailed(error)))
    );
  
  @Effect()
  addUser$ = this.actions$
    .ofType(UserActionTypes.ADD_USER)
    .map(action => action.payload)
    .do(()=>this.loadingService.showIndicator())
    .switchMap((user) => this.graph.addUser(user)
      .do(()=>this.loadingService.hideIndicator())
      .map(query => {
        if(query.error){
          this.notificationService.error(query.error, true);
          return this.userActions.addUserFailed(query.error);
        }
        localStorage.setItem('userToken', query.token);
        return this.userActions.addUserFulfilled({token:query.token});
      })
      .do(()=>this.router.navigate(['/']))
      .catch(error => Observable.of(this.userActions.addUserFailed(error)))
    );
}