import React from 'react';

export default class SingleBarChart extends React.Component {

  render() {
    let value = this.props.value * 100;
    let description = this.props.description;
    let valueClass = value > 70 ? "high" : "low";
    let fillStyle = {
      width: value + "%"
    };

    return (
      <div className={"single-bar-chart " + valueClass}>
        <div className="bar-base">
          <div className="bar-fill" style={fillStyle}></div>
        </div>
        <div className="description">
          <div className="value">
            {value.toFixed(2) + "% "}
          </div>
          <div className="text">
            {'Utilized ' + description}
          </div>
        </div>
      </div>
    )
  }
}
