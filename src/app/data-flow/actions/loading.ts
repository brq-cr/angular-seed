import { Action } from '@ngrx/store';

export const LoadingActionTypes = {
  SHOW_LOADING_INDICATOR: 'SHOW_LOADING_INDICATOR',
  HIDE_LOADING_INDICATOR: 'HIDE_LOADING_INDICATOR',
};

export class LoadingActions {

  show(): Action {
    return {
      type: LoadingActionTypes.SHOW_LOADING_INDICATOR,
    };
  }

  hide(): Action {
    return {
      type: LoadingActionTypes.HIDE_LOADING_INDICATOR,
    };
  }

}