import React from 'react';
import Section from 'components/common/section';
import MeetingRoomStatistics from 'components/common/meetingroomstatistics';
import ModeSelector from 'components/common/modeselector';
import PeriodSelector from 'components/common/periodselector';
import DateSelector from 'components/common/dateselector';
import LineChart from 'components/common/graphs/linechart';
import { connect } from 'react-redux';
import CsvButton from 'components/common/csvbutton';

import {fetchMeetingRoomData, applyMeetingRoomQuery,exportAreaUtilizationCsv} from 'actions/locations';

class MeetingRoomView extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchMeetingRoomData(this.props.params.id, this.props.querySettings))
  }

  componentWillReceiveProps(nextProps) {
    switch (true) {
      case nextProps.querySettings.period.code != this.props.querySettings.period.code:
        this.props.dispatch(fetchMeetingRoomData(nextProps.params.id, nextProps.querySettings));
        break;
      case nextProps.querySettings.mode.code != this.props.querySettings.mode.code:
        this.props.dispatch(applyMeetingRoomQuery(this.props.params.id, nextProps.querySettings));
        break;
      case nextProps.params.id !== this.props.params.id:
        this.props.dispatch(fetchMeetingRoomData(nextProps.params.id, nextProps.querySettings));
        break;
      case (nextProps.querySettings.to != this.props.querySettings.to) || (nextProps.querySettings.from != this.props.querySettings.from):
        this.props.dispatch(fetchMeetingRoomData(nextProps.params.id, nextProps.querySettings));
        break;
    }
  }

  render() {
    let state = this.props.state;
    let url = `/locations/area/${this.props.params.id}/floorplan`;
    return (
      <div className="content-right-content">
        <div className="content-right-header">
          <Section boldHeader={this.props.selectedArea.name} header="SENSORS">
          </Section>
          <Section boldHeader="GO TO FLOORPLAN VIEW" url={url}>
          </Section>
        </div>
        <div className="settings">
          <ModeSelector mode={this.props.querySettings.mode} />
          <PeriodSelector period={this.props.querySettings.period} />
          <DateSelector />
        </div>
        <MeetingRoomStatistics data={this.props.sensorStatistics} />
        <div className="chart-container">
          <div className='chart-name'>
            <Section header={this.props.querySettings.mode.title}></Section>
          </div>
          <div className='chart'>
            <LineChart dateType={this.props.querySettings.period.code} timeSeries={state.timeSeries} querySettings={this.props.querySettings} />
            <CsvButton _onClick={this.props.exportCsv.bind(this, this.props.params.id, this.props.querySettings)} />
          </div>
        </div>
      </div>
    )
  }
}


function mapStateToProps(state){
  return {
    selectedArea: state.organizationReducer.selectedArea,
    sensorStatistics: state.locationsReducer.common.sensorStatistics,
    state: state.locationsReducer.meetingRoom,
    querySettings: state.querySettingsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    exportCsv: (id, settings) => dispatch(exportAreaUtilizationCsv(id, settings))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MeetingRoomView);
