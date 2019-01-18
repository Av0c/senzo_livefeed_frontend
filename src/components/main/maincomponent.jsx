import React from "react";
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

import DonutCard from "./donutcard";
import Floorplan from "components/floorplan";

export default class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nextId: 0,
            prevId: 0,
            currentId: 0,
            loadingPercentage: 0,
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

        var int = setTimeout(() => {
            this.setState({
                loadingPercentage: 0,
                currentId: this.state.nextId,
            });
            this.loadingAnimate();
            this.checkNextPrev();
            this.bringOnTheShow();
            // this.scrollLocation();
        }, slideContainer[currentId].duration*1000);

        console.log(slideContainer[currentId].duration*1000);

        this.setState({
            int: int,
        });
    }

    loadingAnimate() {
        const { slideContainer } = this.props;
        const { currentId } = this.state;

        var fps = 60;
        var stepInterval = (slideContainer[currentId].duration*1000)/100;

        var count = 0;

        if (this.state.loadingInt) {
            clearInterval(this.state.loadingInt);
        }

        var loadingInt = setInterval(() => {
            if (this.state.loadingPercentage < 100) {
                this.setState({
                    loadingPercentage: this.state.loadingPercentage+1,
                });
            }
        }, stepInterval);

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
        const { currentId, loadingPercentage } = this.state;
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
        var openDisabled = this.disableCheck(availableDesks) || (node.type == "meeting_room");
        var meetingDisabled = this.disableCheck(availableMR) || (node.type == "open_area");

        // Measurements multiplier
        var multiplierAspect = 1920/templateData.containerWidth; // For px
        var multiplierVw = 100/templateData.containerWidth; // For vw, vh unit
        var multiplierVh = 100/templateData.containerHeight; // For vw, vh unit

        // Textboxes
        var textRender = [];
        for (var i = 0; i < templateData.textContainer.length; i++) {
            var content = slideContainer[currentId].text[i];
            var currentText = templateData.textContainer[i];
            var className = "text float align-" + currentText.align;
            textRender.push(
                <div key={"key-text-"+i} className={className} style={{
                    fontSize: currentText.size*multiplierVh + "vh",
                    top: currentText.top*multiplierVw + "vw",
                    left: currentText.left*multiplierVh + "vh",}}
                >{content}
                </div>
            );
        };

        // Logos
        var logo = templateData.logo;
        var logoRender = (
            <img className={"logo float align-" + logo.align} src={logo.url} style={{
                width: logo.width*multiplierVw + "vw",
                top: logo.top*multiplierVh + "vh",
                left: logo.left*multiplierVw + "vw",}}>
            </img>
        );

        // Line
        var line = templateData.line;
        var lineRender = null;
        if (line.show) {
            lineRender = (
                <div className={"line float align-" + line.align} style={{
                    width: line.length*multiplierVw + "vw",
                    height: line.thickness + "px",
                    backgroundColor: line.color,
                    top: line.top*multiplierVh + "vh",
                    left: line.left*multiplierVw + "vw"}}>
                </div>
            );
        }

        // Slide counter render
        var counterRender = [];
        for (var i = 0; i < slideContainer.length; i++) {
            if (i == currentId) {
                counterRender.push(
                    <div className="counter-child current" key={i}></div>
                );
            } else {
                counterRender.push(
                    <div className="counter-child" key={i}></div>
                );
            }
        }
        counterRender = (<div className="counter float">{counterRender}</div>);

        // Loading bar render
        var loadingRender = [];
        loadingRender.push(
            <div className="loading float" key={0}>
                <div className="loading-child" style={{width: loadingPercentage+"%", backgroundColor: colorPrimary}}>
                </div>
            </div>
        );

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
                    {counterRender}
                    {loadingRender}
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
    }
}
