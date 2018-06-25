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

            animationName: "scroll-1",
        };

        this.floorplanImage = null;
        this.setFloorplanImageRef = element => {
            this.floorplanImage = element;
        };
        this.floorplanContainer = null;
        this.setFloorplanContainerRef = element => {
            this.floorplanContainer = element;
        };
        this.floorplanImageContainerRef = null;
        this.setFloorplanImageContainerRef = element => {
            this.floorplanImageContainerRef = element;
        };
    }

    componentDidMount() {
        // this.startScrollFloorplan();
        if (!this.state.running && this.state.imageLoaded) {
            var to = setTimeout(this.calculateMarginFloorplan(), 1000);
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.int);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            if (!this.state.running && this.state.imageLoaded) {
                var to = setTimeout(this.calculateMarginFloorplan(), 1000);
            }
        }
    }

    onImageLoad() {
        this.setState({
            imageLoaded: true,
        });
        if (!this.state.running) {
            var to = setTimeout(this.calculateMarginFloorplan(), 1000);
        }
    }

    calculateMarginFloorplan() {
        this.setState({
            running: true,
        });
        console.log("change");
        var imageHeight = ReactDOM.findDOMNode(this.floorplanImage).clientHeight;
        console.log(imageHeight);
        var containerHeight = ReactDOM.findDOMNode(this.floorplanContainer).clientHeight;
        if (imageHeight > 0 && containerHeight > 0) {
            var offsetHeight = imageHeight - containerHeight;
            if (offsetHeight > 0) {
                var { animationName } = this.state;
                if (animationName == "scroll-1") {
                    animationName = "scroll-2";
                } else {
                    animationName = "scroll-1";
                }

                this.setState({
                    marginTop: -offsetHeight + "px",

                    animationName: animationName,
                    animationDuration: (this.props.duration-2)/this.state.scrolls + "s",
                    animationIterationCount: this.state.scrolls,
                    imageLoaded: false,
                });
            }
        } else {
        }
    }

    render() {
        var containerStyle = {};
        containerStyle = {
            marginTop: this.state.marginTop,

            animationName: this.state.animationName,
            animationDuration: this.state.animationDuration,
            animationIterationCount: this.state.animationIterationCount,
        };

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
            <div className="floorplan-container flat-popup" ref={this.setFloorplanContainerRef}>
                <div className="floorplan-scroll" ref={"floorplanScroll"} style={containerStyle}>
                {
                    <CSSTransitionGroup
                        transitionName="floorplan-animated"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                    >
                        <img
                            onLoad={() => {this.onImageLoad()}}
                            key={this.props.url + this.props.id}
                            className="floorplan-image"
                            src={this.props.url}
                            alt="Floorplan"
                            ref={this.setFloorplanImageRef}
                            draggable="false"
                        />
                    </CSSTransitionGroup>
                }
                    {sensorsRender}
                </div>
            </div>
        );
    }
}
