export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_FAILED = 'UPDATE_FAILED';
export const UPDATE_COMPLETED = 'UPDATE_COMPLETED'

export function updateUser(user) {
  return {
    type: UPDATE_USER,
    user
  }
}

export function updateFailed() {
  return {
    type: UPDATE_FAILED
  }
}
export function updateCompleted() {
  return {
    type: UPDATE_COMPLETED
  }
}
