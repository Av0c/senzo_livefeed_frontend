import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchCustomerOrganization } from 'actions/organization';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import Section from 'components/common/section';
import ReachSection from 'components/common/reachsection';
import Navigation from 'components/common/navigation';


class Locations extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomerOrganization())
  }

  render() {
    return (
      <div className="locations">
        <div className="content-left">
          <div className="navigation">
            <Navigation />
          </div>
        </div>
        <div className="content-right">
          {this.props.children}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(Locations);
