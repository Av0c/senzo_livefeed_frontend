import React from 'react';
import { connect } from 'react-redux';
import { selectId, fetchUtilization } from 'actions/utilization';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import Section from 'components/common/section';
import ReachSection from 'components/common/reachsection';
import Navigation from 'components/common/navigation';
import Navbutton from 'components/common/navbutton'
import { Link } from 'react-router';

class Profile extends React.Component {

  componentWillMount(){
    this.props.dispatch(selectId(0));
  }
  render (){

    return (
      <div className="dashboard">
        <div className="content-left">
        </div>

        <div className="content-right">
          profile page
        </div>
      </div>

    )
  }

}

function mapStateToProps(state){
  return {
    locations: state.locationsReducer,
    utilization: state.utilizationReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
