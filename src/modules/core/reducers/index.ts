/*
import { isDevMode } from '@angular/core';
import * as fromRouter from '@ngrx/router-store';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

export const reducers = {
  auth: fromAuth.authReducer,
  router: fromRouter.routerReducer,
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (isDevMode()) {
    return developmentReducer(state, action);
  } else {
    return productionReducer(state, action);
  }
}
*/