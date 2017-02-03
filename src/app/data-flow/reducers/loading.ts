import { Action, ActionReducer } from '@ngrx/store';
import { LoadingActionTypes } from  './../actions/loading';

export function loadingReducer(state:boolean = false, {payload,type}) {
  switch (type) {
    case LoadingActionTypes.SHOW_LOADING_INDICATOR:
      return true;
    case LoadingActionTypes.HIDE_LOADING_INDICATOR:
      return false;
    default: {
      return state;
    }
  }
}