import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { GraphService } from './../../services/graph';
import { LoadingService } from  './../../services/loading';
import { NotificationService } from  './../../services/notification';
import { AuthenticationActions, AuthenticationActionTypes } from  './../actions/auth';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$: Actions,
    private graph: GraphService,
    private authenticationActions: AuthenticationActions,
    private notificationService: NotificationService,
    private loadingService: LoadingService,
    private router: Router,
  ) {}

  @Effect()
  logIn$ = this.actions$
    .ofType(AuthenticationActionTypes.LOG_IN)
    .map(action => action.payload)
    .do(()=>this.loadingService.showIndicator())
    .switchMap((credentials) => this.graph.logIn(credentials)
      .do(()=>this.loadingService.hideIndicator())
      .map(query => {
        if(query.error){
          this.notificationService.error(query.error, true);
          return this.authenticationActions.logInFailed(query.error);
        }
        localStorage.setItem('userToken', query.token);
        return this.authenticationActions.logInFulfilled({token:query.token});
      })
      .do(()=>this.router.navigate(['/']))
      .catch(error => Observable.of(this.authenticationActions.logInFailed(error)))
    );
}