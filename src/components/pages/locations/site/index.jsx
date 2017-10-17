import React from 'react';
import Section from 'components/common/section';
import ReachSection from 'components/common/reachsection';
import SensorStatistics from 'components/common/sensorstatistics';
import SingleBarChart from 'components/common/graphs/singlebarchart';
import PeriodSelector from 'components/common/periodselector';
import DateSelector from 'components/common/dateselector';
import ModeSelector from 'components/common/modeselector';
import { connect } from 'react-redux';
import {fetchSiteData, applySiteQuery} from 'actions/locations';

class SiteView extends React.Component {

  componentDidMount() {
    if (this.props.params.id) {
      this.props.dispatch(fetchSiteData(this.props.params.id, this.props.querySettings));
    }
  }

  componentWillReceiveProps(nextProps) {
    switch (true) {
      case nextProps.querySettings.period.code != this.props.querySettings.period.code:
        this.props.dispatch(applySiteQuery(nextProps.params.id, nextProps.querySettings));
        break;
      case nextProps.querySettings.mode.code != this.props.querySettings.mode.code:
        this.props.dispatch(applySiteQuery(this.props.params.id, nextProps.querySettings));
        break;
      case nextProps.params.id !== this.props.params.id:
        this.props.dispatch(applySiteQuery(nextProps.params.id, nextProps.querySettings));
        break;
      case (nextProps.querySettings.to != this.props.querySettings.to) || (nextProps.querySettings.from != this.props.querySettings.from):
        this.props.dispatch(applySiteQuery(nextProps.params.id, nextProps.querySettings));
        break;
    }
  }

  render() {
    let state = this.props.state || {
      sites: []
    };
    return (
      <div className="content-right-content">
        <div className="content-right-header">
          <Section boldHeader={this.props.selectedSite.name} header="SENSORS">
          </Section>
        </div>
        <div className="settings">
          <ModeSelector mode={this.props.querySettings.mode} />
          <PeriodSelector period={this.props.querySettings.period} />
          <DateSelector />
        </div>
        <SensorStatistics data={this.props.sensorStatistics} />
        <div className='content-right-inner-content'>
        {
          state.sites.map((child, idx) => {
            return (
              <ReachSection key={idx} reachSectionHeader={child.name + ' ' + this.props.querySettings.mode.title}>
                <Section header={child.name}>
                  <SingleBarChart value={child.firstValue} description={this.props.querySettings.period.title} />
                </Section>
                <Section header={child.name}>
                  <SingleBarChart value={child.secondValue} description={this.props.querySettings.period.prevTitle} />
                </Section>
              </ReachSection>
            )
          })
        }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    selectedSite: state.organizationReducer.selectedSite,
    sensorStatistics: state.locationsReducer.common.sensorStatistics,
    state: state.locationsReducer.site,
    querySettings: state.querySettingsReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SiteView);
