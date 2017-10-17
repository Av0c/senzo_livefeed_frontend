
import {
  SHOW_NOTIFICATION,
  DISMISS_NOTIFICATION
} from 'actions/common'

const initialState = {
  notification: {
    status: '',
    msg: ''
  }
};

export default (state = initialState, action ) => {

  switch (action.type) {

    case SHOW_NOTIFICATION: {
      return Object.assign({}, state, {
        notification: Object.assign({}, initialState.notification, {
          status: action.success ? 'success' : 'fail',
          msg: action.msg
        })
      })
    }

    case DISMISS_NOTIFICATION: {
      return Object.assign({}, state, {
        notification: Object.assign({}, state.notification, {
          status: ''
        })
      })
    }

    default: {
      return state
    }
  }
}
