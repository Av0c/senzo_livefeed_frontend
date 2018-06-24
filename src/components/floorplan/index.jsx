import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Floorplan extends React.Component {
    constructor(props) {
        super(props);
        var scrolls = 2;
        this.state = {
            defaultMarginTop: 0,
            scrolledMarginTop: 0,

            scrollToBottom: true,
            scrollCount: 0,
            scrolls: scrolls,
            transitionDuration: this.props.duration/scrolls + "s",
        };
    }

    componentDidMount() {
        this.calculateScrollFloorplan();
    }

    componentWillUnmount() {
        clearInterval(this.state.int);
    }

    componentWillReceiveProps(nextProps) {
        this.resetScrollFloorplan();
        this.calculateScrollFloorplan();
    }

    calculateScrollFloorplan() {
        var imageHeight = ReactDOM.findDOMNode(this.refs.floorplanImage).clientHeight;
        var containerHeight = ReactDOM.findDOMNode(this.refs.floorplanContainer).clientHeight;

        var offsetHeight = imageHeight - containerHeight;
        if (offsetHeight > 0) {
            var int = setInterval(() => {this.reverseScroll()}, this.props.duration/this.state.scrolls * 1000);
            var to = setTimeout(() => {clearInterval(int)}, this.props.duration * 1000);
            this.setState({
                scrolledMarginTop: -offsetHeight + "px",
                int: int,
            });
        }
    }

    resetScrollFloorplan() {
        if (this.state.int) {
            clearInterval(this.state.int);
        }
        this.setState({
            scrolledMarginTop: 0,
            scrollToBottom: true,
            scrollCount: 0,
        });
    }

    reverseScroll() {
        if (this.state.scrollCount < (this.state.scrolls-1)) {
            this.setState({
                scrollToBottom: !this.state.scrollToBottom,
                scrollCount: this.state.scrollCount + 1,
            });
        }
    }

    render() {
        var containerStyle = {};
        if (this.state.scrollToBottom) {
            containerStyle = {
                marginTop: this.state.scrolledMarginTop,
                transitionDuration: this.state.transitionDuration,
            }
        } else {
            containerStyle = {
                marginTop: this.state.defaultMarginTop,
                transitionDuration: this.state.transitionDuration,
            }
        }

        var sensorsRender = [];
        for (var i = 0; i < this.props.sensors.length; i++) {
            var ss = this.props.sensors[i];
            var ssData = this.props.sensorsData;
            var index = ssData.findIndex(s => (s.id == ss.id));
            var className = "floorplan-sensor";
            if (ssData[index].hidden) {
                className = " hidden";
            } else {
                if (ssData[index].inuse) {
                    className += " inuse";
                } else if (ssData[index].standby) {
                    className += " standby";
                } else if (ssData[index].faulty) {
                    className += " faulty";
                }
            }
            sensorsRender.push(
                <div
                    id={"ss-"+ss.id}
                    key={"ss-"+ss.id}
                    className={className}
                    style={{top: ss.info.ypercent+"%", left: ss.info.xpercent+"%"}}
                ></div>
            );
        }

        return (
            <div className="floorplan-container flat-popup" ref={"floorplanContainer"}>
                <div className="floorplan-scroll" ref={"floorplanScroll"} style={containerStyle}>
                    <CSSTransitionGroup
                        transitionName="floorplan-image"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                    </CSSTransitionGroup>
                    {<img
                        className="floorplan-image"
                        src={this.props.url}
                        alt="Floorplan"
                        ref={"floorplanImage"}
                        draggable="false"
                        />}
                    {sensorsRender}
                </div>
            </div>
        );
    }
}
