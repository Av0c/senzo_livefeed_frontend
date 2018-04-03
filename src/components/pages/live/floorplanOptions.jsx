import React from 'react';

export default class FloorplanOptions extends React.Component {
    render() {
        var renderComps;
        switch (this.props.displayMode) {
            case "sensors":
                renderComps =
                <div className="floorplan-options-container">
                    <div className="options-help">
                        <div className="help-icon hi-show">
                            <i className="material-icons">info_outline</i>
                        </div>
                        <div className={(this.props.optionsMode=="done") ? "help-text ht-show" : "help-text ht-hide"}>Hover over a sensor for more info.</div>
                        <div className={(this.props.optionsMode=="move") ? "help-text ht-show" : "help-text ht-hide"}>Hold and drag a sensor to move it.</div>
                        <div className={(this.props.optionsMode=="add") ? "help-text ht-show" : "help-text ht-hide"}>Left-click to place new sensor, right-click to cancel.</div>
                    </div>
                    <div className="options-buttons">
                        <i
                            className="material-icons"
                            data-tooltip={(this.props.optionsMode=="move") ? "Sensors can be moved" : "Sensors can not be moved"}
                            onClick={() => {this.props.toggleMove()}}
                            >
                            {(this.props.optionsMode=="move") ? "location_searching" : "location_disabled"}
                        </i>
                    </div>
                    <div className="options-buttons">
                        <i
                            className="material-icons"
                            data-tooltip="Add sensor"
                            onClick={(e) => {this.props.changeMode("add", e)}}
                            >add_circle_outline</i>
                    </div>
                </div>
                break;

            case "heatmap":
                renderComps =
                <div className="floorplan-options-container">
                    <div className="options-help">
                        <div className="help-icon hi-show">
                            <i className="material-icons">info_outline</i>
                        </div>
                        <div className="help-text ht-show">Hover over a sensor for more info.</div>
                    </div>
                    <div className="options-buttons">
                    </div>
                </div>
                break;

            default:
        }

        return (
            renderComps
        );
    }
}
