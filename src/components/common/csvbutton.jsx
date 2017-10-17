import React from 'react';


export default class CsvButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props._onClick}>Export CSV</button>
      </div>
    )
  }
}