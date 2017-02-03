import { Action } from '@ngrx/store';

export const NotificacionActionTypes = {
  SHOW_NOTIFICATION: 'SHOW_NOTIFICATION',
  CLEAR_NOTIFICATION: 'CLEAR',
};

export class NotificationActions {

  showNotification(message): Action {
    return {
      type: NotificacionActionTypes.SHOW_NOTIFICATION,
      payload: message,
    };
  }

  clearNotification(): Action {
    return {
      type: NotificacionActionTypes.CLEAR_NOTIFICATION,
    };
  }

}