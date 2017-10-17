import React from 'react';
import LoadingMarker from 'components/common/loading';

export default class Summary extends React.Component {

  render() {
    let summaryData = this.props.summary;
    let nodeData = this.props.node;
    return (
      <div className="summary">
        <h2>Summary: {nodeData.name}</h2>
        <LoadingMarker loading={summaryData.loading} />
        <div className="data">
          <div className="date">Date</div>
          <div className="percentage">{summaryData.data.value}%</div>
        </div>
      </div>
    )
  }

  renderSensorData() {
    return this.props.summary.map( (sensor) => {
      return <div key={sensor}>{sensor}</div>
    })
  }
}