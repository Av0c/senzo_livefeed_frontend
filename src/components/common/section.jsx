import React from 'react';
import { Link } from 'react-router';


export default class Section extends React.Component {

  render () {
    let header;
    if (this.props.url) {
      header = <div className="section-header">
          <Link to={this.props.url}>{this.props.boldHeader}</Link>
        </div>;
    } else if (this.props.header || this.props.boldHeader) {
      header =
      <div className="section-header">
        <span className='bold'>{this.props.boldHeader}</span> {this.props.header}
      </div>
    }
    return (
      <div className="section">
        <div className="section-content">
          {header}
          <div className="section-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
