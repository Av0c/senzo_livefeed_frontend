import React from 'react';


export default class ReachSection extends React.Component {

  render () {
    return (
      <div className="reach-section">
        <div className="reach-section-header">
            <div className="reach-section-header-title"><span className='bold'>{this.props.reachSectionBoldHeader}</span>{this.props.reachSectionHeader}</div>
            <div className="reach-section-header-settings"></div>
        </div>
        <div className="section">
          <div className="section-header">
            {this.props.header}
          </div>
          <div className="section-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )

  }
}
