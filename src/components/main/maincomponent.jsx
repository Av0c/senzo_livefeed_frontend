import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import Card from "components/card";
import Floorplan from "components/floorplan";

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextId: 0,
            prevId: 0,
            currentId: 0,
        };
        this.scrollLocation = this.scrollLocation.bind(this);
        this.scrollAnimate = this.scrollAnimate.bind(this);
    }

    componentDidMount() {
        this.checkNextPrev();
        this.bringOnTheShow();
    }

    bringOnTheShow() {
        var int = setInterval(() => {
            this.setState({
                currentId: this.state.nextId,
            });
            this.checkNextPrev();
            this.scrollLocation();
        }, this.props.duration*1000);

        this.setState({
            int: int,
        });
    }

    scrollAnimate() {
        const container = ReactDOM.findDOMNode(this.refs.locationNameContainer);
        const current = ReactDOM.findDOMNode(this.refs.locationNameCurrent);

        var finalScroll = current.offsetLeft+(current.offsetWidth/2)-(viewWidth/2);
        if (current.scrollLeft < finalScroll) {
            var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
            container.scrollTo(current.scrollLeft + (finalScroll-current.scrollLeft)/8, 0);
        }
        requestAnimationFrame(this.scrollAnimate);
    }

    scrollLocation() {
        // requestAnimationFrame(this.scrollAnimate);

        const container = ReactDOM.findDOMNode(this.refs.locationNameContainer);
        const current = ReactDOM.findDOMNode(this.refs.locationNameCurrent);
        if (true) {
            var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
            container.scrollTo(current.offsetLeft+(current.offsetWidth/2)-(viewWidth/2), 0);
        }
    }

    checkNextPrev() {
        var nextId, prevId;
        if (this.state.currentId < this.props.locations.length-1) {
            nextId = this.state.currentId+1;
        } else {
            nextId = 0;
        }
        if (this.state.currentId > 0) {
            prevId = this.state.currentId-1;
        } else {
            prevId = this.props.locations.length-1;
        }
        this.setState({
            nextId: nextId,
            prevId: prevId,
        });
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
                        if (parent.type == "open_area") {
                            open.push(node);
                        } else if (parent.type == "meeting_room") {
                            meeting.push(node);
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

    getDesksData(sensors) {
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

    deskDataCheck(desks) {
        if (desks[1] <= 0 || desks[0] < 0 || desks[0] > desks[1]) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        var areas = [], sensors = [], meeting = [], open = [];
        var treeMapKey = this.props.locations[this.state.currentId];
        var node = this.props.treeMap[treeMapKey];

        var nextNode, prevNode;
        nextNode = this.props.treeMap[this.props.locations[this.state.nextId]];
        prevNode = this.props.treeMap[this.props.locations[this.state.prevId]];

        var namesRender = [];
        for (var i = 0; i < this.props.locations.length; i++) {
            var n = this.props.treeMap[this.props.locations[i]]
            var className = "location-name-span";
            var ref = "";
            var style = {};
            var dividerClassName = "location-divider";
            if (i == this.state.currentId) {
                className += " current";
                style = {color: this.props.color,}
                ref = "locationNameCurrent"
                dividerClassName += " current";
            } else if (i == this.state.prevId) {
                className += " prev";
                dividerClassName += " current";
            } else if (i == this.state.nextId) {
                className += " next";
            }
            var divider = "";
            if (i < this.props.locations.length-1) {
                divider = <span key={"divider-"+i} className={dividerClassName}>|</span>;
            }
            namesRender.push(
                <span key={"location-"+i} className={className} ref={ref} style={style}>{n.info.name}</span>
            );
            namesRender.push(divider);
        }

        var parent = {};
		this.listNodes(parent, node, areas, sensors, meeting, open);

        var meetingDesks = this.getDesksData(meeting);
        var openDesks = this.getDesksData(open);
        var meetingDisabled = this.deskDataCheck(meetingDesks);
        var openDisabled = this.deskDataCheck(openDesks);

        return (
            <div className="main">
                <div className="logo-bar" style={{ backgroundColor: this.props.color }}><img src={this.props.logo}></img></div>
                <div className="location-details">
                    <div className="location-location">{node.info.location}</div>
                    <div className="location-name" ref="locationNameContainer">
                        {namesRender}
                    </div>
                </div>
                <div className="content">
                    <div className="grid-floorplan grid-item">
                        <Floorplan
                            key={"floorplan-"+this.state.currentId}
                            url={this.props.floorplan[this.state.currentId]}
                            duration={this.props.duration}
                            sensors={sensors}
                            sensorsData={this.props.sensorsData}
                            id={this.state.currentId}
                        />
                    </div>
                    {
                    !openDisabled && <div className="grid-card grid-item">
                        <Card
                            title={"Open Area"}
                            desks={openDesks}
                            disabled={openDisabled}
                        />
                    </div>
                    }
                    {
                    !meetingDisabled && <div className="grid-card grid-item">
                        <Card
                            title={"Meeting Room"}
                            desks={meetingDesks}
                            disabled={meetingDisabled}
                        />
                    </div>
                    }
                </div>
            </div>
        );
    }
}
