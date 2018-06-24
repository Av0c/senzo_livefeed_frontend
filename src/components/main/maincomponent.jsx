import React from "react";
import Card from "components/card";
import Floorplan from "components/floorplan";

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentId: 1,
        };
    }

    listNodes(parent, node, areas, sensors, meeting, open) {
		var self = this;
        var treeMapKey = this.props.locations[this.state.currentId];
		if (node) {
			// var isArea = (node.type=="meeting_room" && !this.props.showDetails)
			var isArea = (node.id != this.props.treeMap[treeMapKey].id && node.info.useownfp && node.type!="sensor");
			if (isArea) {
				areas.push(node);
			} else {
				if (node.type=="sensor") {
					sensors.push(node);
                    if (parent) {
                        if (parent.type = "meeting_room") {
                            meeting.push(node);
                        } else if (parent.type = "open_area") {
                            open.push(node);
                        }
                    }
				}
				if (node.children) {
					node.children.forEach((child) => {
						self.listNodes(node, child, areas, sensors, meeting, open);
					});
				}
			}
		}
	}

    getDesksStatus(sensors) {
        var result = [0, 0]; // [Available (Not inuse), All]
        for (var i = 0; i < sensors.length; i++) {
            var ss = sensors[i];
            var ssData = this.props.sensorsData;
            var index = ssData.findIndex(s => (s.id == ss.id));
            if (!ssData[index].inuse) {
                result[0]++;
            }
            result[1]++;
        }
        return result;
    }

    render() {
        var areas = [], sensors = [], meeting = [], open = [];
        var treeMapKey = this.props.locations[this.state.currentId];
        var node = this.props.treeMap[treeMapKey];
        var parent = null;
		this.listNodes(parent, node, areas, sensors, meeting, open);

        var meetingDesks = this.getDesksStatus(meeting);
        var openDesks = this.getDesksStatus(open);

        return (
            <div className="main">
                <div className="logo-bar"><img src={this.props.logo}></img></div>
                <div className="location-details">
                    <div className="location-location">{node.info.location}</div>
                    <div className="location-name">{node.info.name}</div>
                </div>
                <div className="content">
                    <div className="grid-floorplan grid-item">
                        <Floorplan
                            url={this.props.floorplan[this.state.currentId]}
                            duration={this.props.duration}
                            sensors={sensors}
                            sensorsData={this.props.sensorsData}
                        />
                    </div>
                    <div className="grid-card grid-item">
                        <Card
                            title={"Open Area"}
                            desks={openDesks}
                        />
                    </div>
                    <div className="grid-card grid-item">
                        <Card
                            title={"Meeting Room"}
                            desks={meetingDesks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
