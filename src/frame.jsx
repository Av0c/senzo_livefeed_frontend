import React from 'react';
import Toolbar from 'containers/toolbar';
import Notification from 'components/common/notification';
import { connect } from 'react-redux';
import {clearToken} from 'actions/authentication';
import './style/main.less';
import 'react-date-picker/index.css'

export class Frame extends React.Component {
  render() {
    return (
      <div className="container">
        <Notification />
        <Toolbar user={this.props.user} actions={{logout: this.props.logout}} companyName={this.props.companyName} />
        <div className="content">
            {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.authReducer.user,
    companyName: state.overviewReducer.customerOverview.companyName
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(clearToken())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
