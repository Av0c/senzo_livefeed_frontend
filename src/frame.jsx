import React from 'react';
import Toolbar from 'containers/toolbar';
import Notification from 'components/common/notification';
import { connect } from 'react-redux';
import appHistory from 'components/common/appHistory';
import { clearToken } from 'actions/authentication';
import { setCurrentNode } from 'actions/overview';
import 'react-datepicker/dist/react-datepicker.css';
import './style/main.less';

export class Frame extends React.Component {

  handleTreeClick(node) {
    if(this.props.location.pathname.includes("/statistic") || this.props.location.pathname=="/" || this.props.location.pathname.includes("/comparison")) {
      appHistory.push(`/statistic/${node.id}`);
    } else if (this.props.location.pathname.includes("/live")) {
      appHistory.push(`/live/${node.id}`);
    } else {
      this.props.dispatch(setCurrentNode(node));
    }
  }

  render() {
    return (
      <div style={{ width: '100%', paddingLeft: '0px', paddingRight: '0px', maxWidth: '100%' }} className="container">
        <Toolbar user={this.props.user} actions={{ logout: this.props.logout }} companyName={this.props.companyName} tree={this.props.tree}
          statistic={this.handleTreeClick.bind(this)} />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authReducer.user,
    companyName: state.overviewReducer.customerOverview.info.name,
    tree: state.overviewReducer.customerOverview
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(clearToken());
      window.location.reload();
      },
    setCurrentNode: (node) => {
      dispatch(setCurrentNode(node));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);
