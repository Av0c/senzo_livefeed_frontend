import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import DonutCard from "./donutcard";
import BarCard from "components/card/barcard";
import Floorplan from "components/floorplan";

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextId: 0,
            prevId: 0,
            currentId: 0,
            loadingWidth: 0,
        };
        this.scrollLocation = this.scrollLocation.bind(this);
        this.scrollAnimate = this.scrollAnimate.bind(this);
    }

    componentDidMount() {
        this.checkNextPrev();
        this.bringOnTheShow();
    }

    checkNextPrev() {
        const { slideContainer } = this.props;
        const { currentId } = this.state;

        var nextId, prevId;
        if (currentId < slideContainer.length-1) {
            nextId = currentId+1;
        } else {
            nextId = 0;
        }
        if (currentId > 0) {
            prevId = currentId-1;
        } else {
            prevId = slideContainer.length-1;
        }

        this.setState({
            nextId: nextId,
            prevId: prevId,
        });
    }

    bringOnTheShow() {
        const { slideContainer } = this.props;
        const { currentId } = this.state;

        var int = setInterval(() => {
            this.setState({
                loadingWidth: 0,
                currentId: this.state.nextId,
            });
            this.loadingAnimate();
            this.checkNextPrev();
            // this.scrollLocation();
        }, slideContainer[currentId].duration*1000);

        this.setState({
            int: int,
        });
    }

    loadingAnimate() {
        const { slideContainer } = this.props;
        const { currentId } = this.state;

        var fps = 60;
        var timeStep = 1000/fps;
        var noOfTimeSteps = (slideContainer[currentId].duration*1000)/timeStep;
        var speed = 100/noOfTimeSteps;

        var count = 0;
        var { loadingWidth } = this.state;
        if (this.state.loadingInt) {
            clearInterval(this.state.loadingInt);
        }
        var loadingInt = setInterval(() => {
            if (loadingWidth < 100) {
                loadingWidth += speed;
                this.setState({
                    loadingWidth: loadingWidth,
                });
            }
        }, timeStep);

        this.setState({
            loadingInt: loadingInt,
        });
    }

    // Unused location name row scrolling
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
        const container = ReactDOM.findDOMNode(this.refs.locationNameContainer);
        const current = ReactDOM.findDOMNode(this.refs.locationNameCurrent);
        if (true) {
            var viewWidth = document.documentElement.clientWidth || document.body.clientWidth;
            container.scrollTo(current.offsetLeft+(current.offsetWidth/2)-(viewWidth/2), 0);
        }
    }

    listNodes(parent, node, areas, sensors, meeting, open) {
        const { currentId } = this.state;
        const { slideContainer } = this.props;

        var self = this;
        var treeMapKey = this.props.slideContainer[currentId].locationId;
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

    listClockNodes(parent, node, OAsensors, meetingRooms) {
        // areas : result holder for meeting rooms / open areas with own floorplan. Those areas must be children of currently displayed location.
        // OAsensors : result holder for all open area's sensors.
        // meetingRooms : result holder for all meeting rooms.
        const { currentId } = this.state;
        const { slideContainer } = this.props;

		var self = this;
        var treeMapKey = this.props.slideContainer[currentId].locationId;
		if (node) {
			if (node.type == "meeting_room") {
				meetingRooms.push(node);
                // stop here, no need to travel further.
                return;
			}
			if (node.type=="sensor" && parent &&parent.type == "open_area") {
                OAsensors.push(node);
                // stop here, no need to travel further.
                return;
			}
            // travel further
			if (node.children) {
				node.children.forEach((child) => {
					self.listClockNodes(node, child, OAsensors, meetingRooms);
				});
			}
		}
	}

    getSensorStatus(id) {
        var ssData = this.props.sensorsData;
        var index = ssData.findIndex(s => (s.id == id));
        return ssData[index];
    }

    getAvailableDesks(sensors) {
        var result = [0, 0]; // [Available (Not inuse), All]
        for (var i = 0; i < sensors.length; i++) {
            var ss = sensors[i];
            var status = this.getSensorStatus(ss.id);
            if (!status.inuse) {
                result[0]++;
            }
            result[1]++;
        }
        return result;
    }
    getAvailableMR(meetingRooms) {
        var result = [0, 0]; // [Available (Not inuse), All]
        for (var i = 0; i < meetingRooms.length; i++) {
            var mr = meetingRooms[i];
            var available = true;
            mr.children.forEach((x) => {
                if (x.type == "sensor") {
                    var status = this.getSensorStatus(x.id);
                    if (status.inuse) {
                        available = false;
                    }
                }
            })

            if (available) {
                result[0]++;
            }
            result[1]++;
        }
        return result;
    }


    disableCheck(desks) {
        if (desks[1] <= 0 || desks[0] < 0 || desks[0] > desks[1]) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        const { currentId } = this.state;
        const { templateData, slideContainer, floorplan, sensorsData, colorPrimary, colorSecondary } = this.props;
        var noScroll = this.props.slideContainer[currentId].lockScroll;

        var treeMapKey = this.props.slideContainer[currentId].locationId;
        var node = this.props.treeMap[treeMapKey];
        var parent = {};

        var areas = [], sensors = [], meeting = [], open = [];
        this.listNodes(parent, node, areas, sensors, meeting, open);

        var OAsensors = [], meetingRooms = [];
        this.listClockNodes(parent, node, OAsensors, meetingRooms);
        var availableDesks = this.getAvailableDesks(OAsensors);
        var availableMR = this.getAvailableMR(meetingRooms);
        var meetingDisabled = this.disableCheck(availableDesks) || (node.type == "open_area");
        var openDisabled = this.disableCheck(availableMR) || (node.type == "meeting_room");

        // Textboxes
        var textRender = [];
        for (var i = 0; i < templateData.textContainer.length; i++) {
            var content = slideContainer[currentId].text[i];
            var currentText = templateData.textContainer[i];
            var className = "text float align-" + currentText.align;
            textRender.push(
                <div key={"key-text-"+i} className={className} style={{
                    fontSize: currentText.size + "px",
                    top: currentText.top + "px",
                    left: currentText.left + "px",}}
                >{content}
                </div>
            );
        };

        // Logos
        var logo = templateData.logo;
        var logoRender = (
            <img className="logo float" src={logo.url} style={{
                width: logo.width + "px",
                top: logo.top + "px",
                left: logo.left + "px",
                transform: "rotateZ(" + logo.angle + "deg)"}}>
            </img>
        );

        // Line
        var line = templateData.line;
        var lineRender = null;
        if (line.show) {
            lineRender = (
                <div className="line float" style={{
                        width: line.length + "px",
                        height: line.thickness + "px",
                        backgroundColor: line.color,
                        top: line.top + "px",
                        left: line.left + "px"}}>
                    </div>
                );
        }

        return (
            <div className="main">
                {lineRender}
                {logoRender}
                {textRender}
                <div className="pane left">
                    <div className="floorplan-outer-container">
                        <Floorplan
                            key={"floorplan-"+currentId}
                            url={floorplan[currentId]}
                            duration={slideContainer[currentId].duration}
                            sensors={sensors}
                            sensorsData={sensorsData}
                            id={currentId}
                            noScroll={noScroll}
                        />
                    </div>
                </div>
                <div className="pane right">
                    <div className="card-outer-container">
                        {
                            !openDisabled && <DonutCard
                                title="Available desks"
                                desks={availableDesks}
                                colorPrimary={colorPrimary}
                                colorSecondary={colorSecondary}
                            />
                        }
                        {
                            !meetingDisabled && <DonutCard
                                title="Available meeting rooms"
                                desks={availableMR}
                                colorPrimary={colorPrimary}
                                colorSecondary={colorSecondary}
                            />
                        }
                    </div>
                    <div className="logo-outer-container">
                        <img src="src\assets\images\logo.svg"></img>
                    </div>
                </div>
            </div>
        );
        // <div className="logo-bar" style={{ backgroundColor: this.props.color }}><img src={this.props.logo}></img></div>
        // <div className="loading-bar" style={{width: this.state.loadingWidth + "%"}}></div>
        // <div className="location-details">
        //     <div className="location-name" ref="locationNameContainer">
        //         {namesRender}
        //     </div>
        // </div>
        // <div className="content">
        //     <div className="grid-floorplan grid-item">
        //         <Floorplan
        //             key={"floorplan-"+this.state.currentId}
        //             url={this.props.floorplan[this.state.currentId]}
        //             duration={this.props.duration}
        //             sensors={sensors}
        //             sensorsData={this.props.sensorsData}
        //             id={this.state.currentId}
        //             noScroll={noScroll}
        //         />
        //     </div>
        //     {cardRender}
        //     {barRender}
        // </div>
        // <div className="watermark-container">
        //     <div className="watermark">Powered by <span className="company-name">Senzo<span>live</span></span></div>
        // </div>
    }
}
