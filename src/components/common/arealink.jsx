import React from 'react'


export default class AreaLink extends React.Component {

  render() {

    let className = 'area-link ';
    if (this.props.isMeetingRoom) {
      className += 'meeting-room';
    }
    let selectedClass = this.props.selectedId == this.props.area.id ? ' selected' : '';

    className += selectedClass;

    return (
      <div className="area-link-container" onClick={() => {this.props.selectLocation(this.props.area)}} >
        <div className={className}>
          {this.props.area.name}
        </div>
      </div>
    )

  }
}
