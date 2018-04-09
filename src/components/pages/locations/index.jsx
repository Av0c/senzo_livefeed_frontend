import React from 'react';
import Settings from 'components/pages/locations/settings'
export default class LocationSettings extends React.Component {
    render() {
        return (
            <Settings location={this.props.location} />
        );
    }
}