import { Action } from '@ngrx/store';

export const AuthenticationActionTypes = {
  LOG_IN: 'LOG_IN',
  LOG_IN_FAILED: 'LOG_IN_FAILED',
  LOG_IN_FULFILLED: 'LOG_IN_FULFILLED',
};

export class AuthenticationActions {

  logIn({username,password}): Action {
    return {
      type: AuthenticationActionTypes.LOG_IN,
      payload: {
        email: username,
        password: password,
      },
    };
  }

  logInFailed(error): Action {
    return {
      type: AuthenticationActionTypes.LOG_IN_FAILED,
      payload: error,
    };
  }

  logInFulfilled(authData): Action {
    return {
      type: AuthenticationActionTypes.LOG_IN_FULFILLED,
      payload: authData,
    };
  }

}