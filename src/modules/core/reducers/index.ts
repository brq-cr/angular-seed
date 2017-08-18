import * as fromRouter from '@ngrx/router-store';
import { combineReducers } from '@ngrx/store';

export const reducers = {
  // auth: fromAuth.authReducer,
  router: fromRouter.routerReducer,
};

export function reducer(state: any, action: any) {
  return combineReducers(reducers);
}