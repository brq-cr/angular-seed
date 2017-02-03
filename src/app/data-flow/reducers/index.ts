import * as fromRouter from '@ngrx/router-store';
import * as fromUser from './user'
import * as fromNotification from './notification'
import * as fromLoading from './loading'

import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

export const reducers = {
  notification: fromNotification.notificationReducer,
  loading: fromLoading.loadingReducer,
  users: fromUser.userReducer,
  router: fromRouter.routerReducer,
};

const developmentReducer = compose(storeFreeze, combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  const productionEnv = false;
  // TODO use a global var to get env information
  if (productionEnv) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }
}