import { Action, ActionReducer } from '@ngrx/store';
import { UserActionTypes } from  './../actions/user';

const initialState = {
  users: [],
  me: null,
};

export function userReducer(state = initialState, {payload,type}) {
  switch (type) {
    case UserActionTypes.FETCH_USERS_FULFILLED:
      return {
        users: payload.users,
        me: state.me,
      }
    case UserActionTypes.FETCH_ME_FULFILLED:
      return {
        users: state.users,
        me: payload.me,
      }
    default: {
      return state;
    }
  }
}