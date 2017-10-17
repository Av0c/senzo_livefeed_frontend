import React from 'react';

import OverviewLeft from 'components/pages/overview/left'
import OverviewRight from 'components/pages/overview/right'

export default class Overview extends React.Component {

  render (){
    return (
      <div className="overview">
        <OverviewLeft />
        <OverviewRight />
      </div>
    )
  }
}
