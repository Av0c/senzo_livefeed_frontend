export const DISMISS_NOTIFICATION = 'DISMISS_NOTIFICATION';
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export function dismissNotification() {
  return {
    type: DISMISS_NOTIFICATION
  }
}

export function showNotification(msg, success) {
  return {
    type: SHOW_NOTIFICATION,
    msg,
    success
  }
}
