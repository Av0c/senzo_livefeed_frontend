import React from 'react';
import BigText from 'components/common/bigtext';
import Section from 'components/common/section';


export default class SensorStatistics extends React.Component {

  render() {
    let data = this.props.data || {};

    return (
      <div className="content-right-three-sectors">
        <Section header='Total number of desks:'>
          <BigText value={data.desks} />
        </Section>
        <Section header='Currently in use:'>
          <BigText value={data.desksInUse} />
        </Section>
        <Section header='Sensors needing maintenance:'>
          <BigText value={data.maintenance} />
        </Section>
      </div>
    )
  }
}