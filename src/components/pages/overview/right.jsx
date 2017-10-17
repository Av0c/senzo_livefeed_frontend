import React from 'react';
import Loading from 'components/common/loading';
import Section from 'components/common/section';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import ReachSection from 'components/common/reachsection';
import BigText from 'components/common/bigtext';
import PeriodSelector from 'components/common/periodselector';
import ModeSelector from 'components/common/modeselector';
import {fetchUtilizationOverview} from 'actions/overview';

import { connect } from 'react-redux';

class OverviewRight extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchUtilizationOverview(this.props.querySettings));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.querySettings.period.code != this.props.querySettings.period.code) {
      this.props.dispatch(fetchUtilizationOverview(nextProps.querySettings));
    } else if (nextProps.querySettings.mode.code != this.props.querySettings.mode.code) {
      this.props.dispatch(fetchUtilizationOverview(nextProps.querySettings));
    }
  }

  render (){
    var utilizationData = this.props.data;
    var sensorStatistics = this.props.data.sensorStatistics;

    return (
      <div className="content-right">
        <div className="content-right-header">
          <ModeSelector mode={this.props.querySettings.mode} />
          <PeriodSelector period={this.props.querySettings.period} />
        </div>
        <div className="content-right-content">
          <div className='overview-row-container'>
            <Section header='Total number of desks:'>
                <BigText value={sensorStatistics.desks} />
            </Section>
            <Section header='Total number of meeting rooms:'>
              <BigText value={sensorStatistics.meetingRooms} />
            </Section>
          </div>
          <div className='overview-row-container'>
            <Section header={'Areas with low Utilization:'}>
              {this.renderLowUtilizedElements(utilizationData.lowUtilizedAreas)}
            </Section>
            <Section header={'Meeting rooms with low Utilization:'}>
              {this.renderLowUtilizedElements(utilizationData.lowUtilizedMeetingRooms)}
            </Section>
          </div>
          <div className='content-right-inner-content'>
          <ReachSection reachSectionBoldHeader={"DESK "} reachSectionHeader={"Average Utilization"}>
            <Section>
              <SingleBarChart value={utilizationData.deskUtilization.firstValue} description={this.props.querySettings.period.title} />
            </Section>
            <Section >
              <SingleBarChart value={utilizationData.deskUtilization.secondValue} description={this.props.querySettings.period.prevTitle} />
            </Section>
          </ReachSection>

          <ReachSection reachSectionBoldHeader={"Meeting room "} reachSectionHeader={"Average Utilization"}>
            <Section>
              <SingleBarChart value={utilizationData.meetingRoomUtilization.firstValue} description={this.props.querySettings.period.title} />
            </Section>
            <Section >
              <SingleBarChart value={utilizationData.meetingRoomUtilization.secondValue} description={this.props.querySettings.period.prevTitle} />
            </Section>
          </ReachSection>
        </div>
        </div>
      </div>
    )
  }

  renderLowUtilizedElements(list) {
    if (list.length == 0) {
      return <div> None </div>
    }
    return list.map( (element, idx) => {
      return <div key={idx}>
        | {element.name}
      </div>
    })
  }

}

function mapStateToProps(state){
  return {
    data: state.overviewReducer.utilizationOverview,
    querySettings: state.querySettingsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OverviewRight);
