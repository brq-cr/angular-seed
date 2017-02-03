import { Action, ActionReducer } from '@ngrx/store';
import { NotificacionActionTypes } from  './../actions/notification';

const initialState = {
  text: null,
  type: null
};

export function notificationReducer(state = initialState, {payload,type}) {
  switch (type) {
    case NotificacionActionTypes.SHOW_NOTIFICATION:
      return {
        text: payload.text,
        type: payload.type
      }
    case NotificacionActionTypes.CLEAR_NOTIFICATION:
      return {
        text: null,
        type: null
      }
    default: {
      return state;
    }
  }
}