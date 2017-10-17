import React from 'react'

export default class LoadingMarker extends React.Component {

  render() {
    if ( this.props.loading ) {
      return (
        <div className="loading">
          Loading...
        </div>
      )
    } else {
      return null
    }
  }
}