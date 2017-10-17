import React from 'react';
import Loading from 'components/common/loading';
import Section from 'components/common/section';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import BigText from 'components/common/bigtext';
import {fetchCustomerOverview} from 'actions/overview';
import { connect } from 'react-redux';

class OverviewLeft extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCustomerOverview());
  }

  render (){
    var overviewData = this.props;

    return (
      <div className="content-left">
        <Loading loading={overviewData.loading} />
        <Section boldHeader={`${overviewData.companyName} UTILIZATION OVERVIEW`} />
        <Section header="Total number of sensors: ">
          <BigText value={overviewData.sensorStatistics.sensors} />
        </Section>
        <Section>
          <div>Sensors currently in use: <span className='blue-text'>{overviewData.sensorStatistics.sensorsInUse}</span></div>
          <div>Sensors needing maintenance: <span className='red-text'>{overviewData.sensorStatistics.maintenance}</span></div>
        </Section>
        <Section boldHeader="TOTAL QUARTERLY " header="Average Utilization">
          <SingleBarChart value={overviewData.quarterlyUtilization} description="this Quarter so far"/>
          <SingleBarChart value={overviewData.previousQuarterUtilization} description="last Quarter"/>
        </Section>
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.overviewReducer.customerOverview
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewLeft);

