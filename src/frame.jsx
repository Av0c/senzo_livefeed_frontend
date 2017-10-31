import React from 'react';
import Toolbar from 'containers/toolbar';
import Notification from 'components/common/notification';
import { connect } from 'react-redux';
import {clearToken} from 'actions/authentication';
import { getNodeStatistic} from 'actions/overview';
import './style/main.less';
import 'react-date-picker/index.css'

export class Frame extends React.Component {
  render() {
    return (
      <div style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px', width: '100%', maxWidth: '100%' }} className="container">
        <Toolbar user={this.props.user} actions={{logout: this.props.logout}} companyName={this.props.companyName} tree={this.props.tree}/>
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
    companyName: state.overviewReducer.customerOverview.info.name,
    tree: state.overviewReducer.customerOverview
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(clearToken()),
    getNodeStatistic: (node) => dispatch(getNodeStatistic(node))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
