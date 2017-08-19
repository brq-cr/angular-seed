import { Action } from '@ngrx/store';
import { type } from './../utils/index';

export namespace Joke {

  export const CATEGORY: string = 'Joke';

  export interface IJokeActions {
    GET_RANDOM: string;
    GET_RANDOM_SUCCESS: string;
    GET_RANDOM_ERROR: string;
  }

  export const ActionTypes: IJokeActions = {
    GET_RANDOM: type(`${CATEGORY} Get Random`),
    GET_RANDOM_SUCCESS: type(`${CATEGORY} Get Random Success`),
    GET_RANDOM_ERROR: type(`${CATEGORY} Get Random Error`),
  };

  export class GetRandomAction implements Action {
    type = ActionTypes.GET_RANDOM;
    payload: string = null;
  }

  export class GetRandomSuccessAction implements Action {
    type = ActionTypes.GET_RANDOM_SUCCESS;

    constructor(public payload: string) { }
  }

  export class GetRandomErrorAction implements Action {
    type = ActionTypes.GET_RANDOM_ERROR;

    constructor(public payload: string) { 
      console.log(`ERROR "GetRandomAction":`, JSON.stringify(payload));
    }
  }

  /**
   * Export a type alias of all actions in this action group
   * so that reducers can easily compose action types
   */
  export type Actions
    = GetRandomAction
    | GetRandomSuccessAction
    | GetRandomErrorAction;
}
