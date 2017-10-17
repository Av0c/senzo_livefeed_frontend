import React from 'react';
import { connect } from 'react-redux';
import {dismissNotification} from 'actions/common';

class Notification extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.notification.status) {
      setTimeout(this.props.dismiss, 3000);
    }
  }

  render() {
    let status = this.props.notification.status || '';
    let msg = this.props.notification.msg;
    return (
      <div className={"notification " + status}>
        <div className="body">
          <div className="icon"></div>
          <div className="text">{msg}</div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    notification: state.commonReducer.notification
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dismiss: () => dispatch(dismissNotification())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);