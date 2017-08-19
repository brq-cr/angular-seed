import * as fromRouter from '@ngrx/router-store';
import { combineReducers } from '@ngrx/store';

import * as fromJoke from './joke.reducer';

export const reducers = {
  joke: fromJoke.jokeReducer,
  router: fromRouter.routerReducer,
};