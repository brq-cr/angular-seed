import { Action } from '@ngrx/store';

export const UserActionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USERS_FAILED: 'FETCH_USERS_FAILED',
  FETCH_USERS_FULFILLED: 'FETCH_USERS_FULFILLED',
  FETCH_ME: 'FETCH_ME',
  FETCH_ME_FAILED: 'FETCH_ME_FAILED',
  FETCH_ME_FULFILLED: 'FETCH_ME_FULFILLED',
  ADD_USER: 'ADD_USER',
  ADD_USER_FAILED: 'ADD_USER_FAILED',
  ADD_USER_FULFILLED: 'ADD_USER_FULFILLED',
};

export class UserActions {

  fetchUsers(): Action {
    return {
      type: UserActionTypes.FETCH_USERS,
    };
  }

  fetchUsersFailed(error): Action {
    return {
      type: UserActionTypes.FETCH_USERS_FAILED,
      payload: error
    };
  }

  fetchUsersFulfilled(users): Action {
    return {
      type: UserActionTypes.FETCH_USERS_FULFILLED,
      payload: {
        users
      },
    };
  }

  fetchMe(): Action {
    return {
      type: UserActionTypes.FETCH_ME,
    };
  }

  fetchMeFailed(error): Action {
    return {
      type: UserActionTypes.FETCH_ME_FAILED,
      payload: error
    };
  }

  fetchMeFulfilled(me): Action {
    return {
      type: UserActionTypes.FETCH_ME_FULFILLED,
      payload: {
        me
      },
    };
  }

  addUser({name,username,password}): Action {
    return {
      type: UserActionTypes.ADD_USER,
      payload: {
        name,
        password,
        email: username,
      }
    };
  }

  addUserFailed(error): Action {
    return {
      type: UserActionTypes.ADD_USER_FAILED,
      payload: error,
    };
  }

  addUserFulfilled(user): Action {
    return {
      type: UserActionTypes.ADD_USER_FULFILLED,
      payload: user,
    };
  }
}