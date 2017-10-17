import React from 'react';
import {
  fetchCustomerOrganization,
  selectSubOrganization
} from 'actions/organization';

import { connect } from 'react-redux';
import NodeView from './nodeview';
import Breadcrumbs from './breadcrumbs';

export default class OrganizationIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCustomerOrganization();
  }

  render() {
    let data = this.props.data;
    return  (
      <div className="organization">
        <Breadcrumbs onBreadcrumbClick={this.props.selectSubOrganization} stack={data.organizationData.breadcrumbs} />
        <NodeView data={data} onSiteClick={this.props.selectSubOrganization} />
      </div>
    )
  }

}

function mapStateToProps(state){
  return {
    data: {
      organizationData: state.organizationReducer,
      summaryData: state.summaryReducer
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCustomerOrganization: () => dispatch(fetchCustomerOrganization()),
    selectSubOrganization: (id) => dispatch(selectSubOrganization(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationIndex);