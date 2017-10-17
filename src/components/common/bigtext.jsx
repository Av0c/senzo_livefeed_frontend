import React from 'react'


export default class BigText extends React.Component {
  render() {
    return <div className="big-text">
      {this.props.value}
    </div>
  }
}