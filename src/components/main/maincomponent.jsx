import React from "react";
import Card from "components/card";

export default class MainComponent extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="logo-bar"><img src={this.props.logo}></img></div>
                <div className="location-details">
                    <div className="location-country">Helsinki, Building B</div>
                    <div className="location-name">Floor 3</div>
                </div>
                <div className="content">
                    <div className="grid-floorplan grid-item">
                        <Card title="floorplan"/>
                    </div>
                    <div className="grid-card grid-item">
                        <Card title="card" />
                    </div>
                    <div className="grid-card grid-item">
                        <Card title="card" />
                    </div>
                </div>
            </div>
        );
    }
}
