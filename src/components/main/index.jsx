import React from 'react';
import { connect } from 'react-redux';
import MainComponent from './maincomponent';
import moment from 'moment';
import * as a from 'actions/data';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // Receive as props
            livefeedData: {
                name: "Avocado",
                slideContainer: [
                    {
                        locationId: 1,
                        text: ["Location 1 / Floor 43"],
                        lockScroll: true,
                        duration: 2,
                    },
                    {
                        locationId: 2,
                        text: ["Location 2 / Floor 24"],
                        lockScroll: true,
                        duration: 2,
                    },
                ],
                subscriber: ["a@b.c", "x@y.z"],
                templateId: 0,
            },
            // Receive as props
            templateData: {
                name: "Blueberry T",
                containerHeight: 450,
                containerWidth: 800,
                logo: {
                    url: "https://senzolive.com/static/media/Logo.716e3409.svg",
                    angle: 0,
                    left: 39,
                    top: 20,
                    width: 230,
                },
                line: {
                    show: true,
                    color: "#3f5043",
                    thickness: 2,
                    length: 800,
                    left: 39,
                    top: 118,
                },
                textContainer: [
                    {
                        align: "left",
                        top: 125,
                        left: 39,
                        size: 36,
                    },
                ],
            },
        };
    }

    fetchStats() {
        // Keep here for reference, remove if not used
        // if (this.props.url) {
        //     var periodString = "days";
        //     switch (this.props.url.period) {
        //         case 1:
        //             periodString = "days"
        //         break;
        //         case 2:
        //             periodString = "weeks"
        //         break;
        //         case 3:
        //             periodString = "months"
        //         break;
        //         case 4:
        //             periodString = "years"
        //         break;
        //         default:
        //             periodString = "days";
        //     }
        //     var startdate = moment().subtract(1, periodString).add(1, "days").format('DD-MM-YYYY');
        //     var enddate = moment().format('DD-MM-YYYY');
        //     if (this.state.startdate != startdate || this.state.enddate != enddate) {
        //         this.setState({
        //             startdate: startdate,
        //             enddate: enddate
        //         });
        //         this.props.dispatch(a.fetchStats(this.props.url.key, startdate, enddate));
        //     }
        // }
    }

    componentDidMount() {
        // Keep here for reference, remove if not used
        // var key = this.props.location.query["k"];
        // this.props.dispatch(a.fetchSummary());
        // this.props.dispatch(a.fetchStructure(key)).then(() => this.fetchStats());
        // this.props.dispatch(a.fetchLive(key));
        // var I = setInterval(() => {
        //     let key = this.props.location.query["k"];
        //     this.props.dispatch(a.fetchLive(key));
        //     this.fetchStats();
        // }, 5000);
        // this.setState({I: I});
    }

    componentWillUnmount() {
        // Keep here for reference, remove if not used
        // clearInterval(this.state.I)
    }

    render() {
        // Keep here for reference, remove if not used
        if (this.props.url && this.props.sensorsData || this.props.stats) {
            return (
                <MainComponent
                    key={this.props.url.key}
                    name={this.props.url.name}
                    owner={this.props.url.owner}
                    subscribers={this.props.url.subscribers}

                    templateData={this.props.url.fullTemplate}
                    slideContainer={this.props.url.slideContainer}

                    floorplan={this.props.url.floorplan}
                    treeMap={this.props.url.treeMap}
                    sensorsData={this.props.sensorsData}

                    stats={this.props.stats}

                    colorPrimary="#3cb54a"
                    colorSecondary="#fff"
                />
            );
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {
    return {
        url: {
            "key": "32feb430-0a3d-4926-ad45-bf3fc5f1cc80",
            "name": "Live Feed",
            "template": 5,
            "owner": "fnb",
            "subscribers": null,
            "slideContainer": [
                {
                    "locationId": 185,
                    "lockScroll": true,
                    "duration": 2,
                    "text": [
                        "Testing",
                    ]
                },
                {
                    "locationId": 631,
                    "lockScroll": false,
                    "duration": 2,
                    "text": [
                        "God of Dota",
                    ]
                },
            ],
            "treeMap": {
                "185": {
                    "id": 185,
                    "info": {
                        "name": "Floor 7",
                        "details": {},
                        "location": "Africa/Johannesburg",
                        "xpercent": 47.78011,
                        "ypercent": 78.286,
                        "hasfloorplan": true,
                        "useownfp": true,
                        "cardid": 30
                    },
                    "type": "location",
                    "children": [
                        {
                            "id": 472,
                            "info": {
                                "name": "Open Plan Area",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "open_area",
                            "children": [
                                {
                                    "id": 965,
                                    "info": {
                                        "name": "FNB57",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:29",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 20.479246,
                                        "ypercent": 88.37939,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 966,
                                    "info": {
                                        "name": "FNB58",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:ec",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 23.135136,
                                        "ypercent": 88.43788,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 967,
                                    "info": {
                                        "name": "FNB59",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:f8",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 25.621622,
                                        "ypercent": 88.43788,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 968,
                                    "info": {
                                        "name": "FNB60",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:26",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 28.324324,
                                        "ypercent": 88.31488,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 969,
                                    "info": {
                                        "name": "FNB61",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f8:07:a1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 20.54054,
                                        "ypercent": 92.86593,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 970,
                                    "info": {
                                        "name": "FNB62",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:a5",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 23.135136,
                                        "ypercent": 92.86593,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 971,
                                    "info": {
                                        "name": "FNB63",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:a7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 25.72973,
                                        "ypercent": 92.86593,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 972,
                                    "info": {
                                        "name": "FNB64",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:28",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 28.386314,
                                        "ypercent": 92.771774,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 973,
                                    "info": {
                                        "name": "FNB68",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:38",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 6.284473,
                                        "ypercent": 75.40724,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 974,
                                    "info": {
                                        "name": "FNB69",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:7f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 8.864865,
                                        "ypercent": 75.48176,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 975,
                                    "info": {
                                        "name": "FNB71",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:2b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 14.085123,
                                        "ypercent": 75.40724,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 976,
                                    "info": {
                                        "name": "FNB72",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:a3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 6.2702703,
                                        "ypercent": 79.909805,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 977,
                                    "info": {
                                        "name": "FNB73",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:25",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 8.864865,
                                        "ypercent": 79.909805,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 978,
                                    "info": {
                                        "name": "FNB75",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:cd",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 14.054054,
                                        "ypercent": 79.909805,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1374,
                                    "info": {
                                        "name": "Open Plan 20",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:e6:d5",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 10.076455,
                                        "ypercent": 60.270657,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1375,
                                    "info": {
                                        "name": "Open Plan 21",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:d0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 12.570253,
                                        "ypercent": 60.238995,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1376,
                                    "info": {
                                        "name": "Open Plan 22",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:ec",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 15.276889,
                                        "ypercent": 60.270657,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1377,
                                    "info": {
                                        "name": "Open Plan 23",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:cb:94",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 17.768763,
                                        "ypercent": 60.270657,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1378,
                                    "info": {
                                        "name": "Open Plan 24",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:77",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 17.660421,
                                        "ypercent": 64.704155,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1379,
                                    "info": {
                                        "name": "Open Plan 25",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:9a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 15.0602045,
                                        "ypercent": 64.581,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1380,
                                    "info": {
                                        "name": "Open Plan 26",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:e4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 12.56833,
                                        "ypercent": 64.581,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1381,
                                    "info": {
                                        "name": "Open Plan 27",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:d6:f9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 10.076455,
                                        "ypercent": 64.581,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1382,
                                    "info": {
                                        "name": "Open Plan 12",
                                        "details": {
                                            "macaddress": "f8:f0:05:e2:60:05",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 10.184798,
                                        "ypercent": 50.071373,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1383,
                                    "info": {
                                        "name": "Open Plan 13",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d5:e6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 12.648648,
                                        "ypercent": 50.0615,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1384,
                                    "info": {
                                        "name": "Open Plan 14",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:b9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 15.276889,
                                        "ypercent": 50.071373,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1385,
                                    "info": {
                                        "name": "Open Plan 15",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:9c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 17.72973,
                                        "ypercent": 50.0615,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1386,
                                    "info": {
                                        "name": "Open Plan 16",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d7:31",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 17.72973,
                                        "ypercent": 54.489544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1387,
                                    "info": {
                                        "name": "Open Plan 17",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:f0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 15.135135,
                                        "ypercent": 54.489544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1388,
                                    "info": {
                                        "name": "Open Plan 18",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:22",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 12.540541,
                                        "ypercent": 54.489544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1389,
                                    "info": {
                                        "name": "Open Plan 19",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:d0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 10.054054,
                                        "ypercent": 54.489544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1390,
                                    "info": {
                                        "name": "Open Plan 66",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d7:a1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.37838,
                                        "ypercent": 50.0205,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1391,
                                    "info": {
                                        "name": "Open Plan 67",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:4b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.94295,
                                        "ypercent": 50.078896,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1392,
                                    "info": {
                                        "name": "Open Plan 68",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d6:7f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.45946,
                                        "ypercent": 50.0205,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1393,
                                    "info": {
                                        "name": "Open Plan 69",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:21",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 89.945946,
                                        "ypercent": 50.062866,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1394,
                                    "info": {
                                        "name": "Open Plan 70",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:da:58",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.054054,
                                        "ypercent": 54.448544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1395,
                                    "info": {
                                        "name": "Open Plan 71",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:1c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.45946,
                                        "ypercent": 54.448544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1396,
                                    "info": {
                                        "name": "Open Plan 72",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ca:78",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.97298,
                                        "ypercent": 54.448544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1397,
                                    "info": {
                                        "name": "Open Plan 52",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:cb:48",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.37838,
                                        "ypercent": 60.352604,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1398,
                                    "info": {
                                        "name": "Open Plan 53",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:e7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.94295,
                                        "ypercent": 60.30057,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1399,
                                    "info": {
                                        "name": "Open Plan 54",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:da:b3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.541245,
                                        "ypercent": 60.39381,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1400,
                                    "info": {
                                        "name": "Open Plan 55",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:f1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.03504,
                                        "ypercent": 60.42372,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1401,
                                    "info": {
                                        "name": "Open Plan 56",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:0e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 92.52692,
                                        "ypercent": 60.30057,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1402,
                                    "info": {
                                        "name": "Open Plan 57",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:f7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 92.52692,
                                        "ypercent": 64.610916,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1403,
                                    "info": {
                                        "name": "Open Plan 58",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:78",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.03312,
                                        "ypercent": 64.581,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1404,
                                    "info": {
                                        "name": "Open Plan 59",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:e4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.35135,
                                        "ypercent": 64.657646,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1405,
                                    "info": {
                                        "name": "Open Plan 60",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:04",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.94295,
                                        "ypercent": 64.610916,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1406,
                                    "info": {
                                        "name": "Open Plan 42",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e2:4c:59",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 86.16216,
                                        "ypercent": 75.48176,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1407,
                                    "info": {
                                        "name": "Open Plan 43",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d5:e1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.75676,
                                        "ypercent": 75.48176,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1408,
                                    "info": {
                                        "name": "Open Plan 44",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:6b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 91.13513,
                                        "ypercent": 75.48176,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1409,
                                    "info": {
                                        "name": "Open Plan 45",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e2:60:48",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 93.72973,
                                        "ypercent": 75.48176,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1410,
                                    "info": {
                                        "name": "Open Plan 47",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:06:c6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 91.22681,
                                        "ypercent": 79.7587,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1411,
                                    "info": {
                                        "name": "Open Plan 48",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:fa",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.626595,
                                        "ypercent": 79.7587,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1412,
                                    "info": {
                                        "name": "Open Plan 49",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:d7:c3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 86.24306,
                                        "ypercent": 79.7587,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1413,
                                    "info": {
                                        "name": "Open Plan 40",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:23",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 91.13513,
                                        "ypercent": 92.20992,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1414,
                                    "info": {
                                        "name": "Open Plan 41",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d5:eb",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 93.72973,
                                        "ypercent": 89.011894,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1427,
                                    "info": {
                                        "name": "Open Plan 73",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:e9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.37838,
                                        "ypercent": 54.448544,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1428,
                                    "info": {
                                        "name": "Open Plan 61",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:06:ab",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.342735,
                                        "ypercent": 64.610916,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1429,
                                    "info": {
                                        "name": "Open Plan 46",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:e2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 93.82703,
                                        "ypercent": 79.7587,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1430,
                                    "info": {
                                        "name": "FNB70",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:f1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 11.351352,
                                        "ypercent": 75.48176,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1431,
                                    "info": {
                                        "name": "FNB74",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:02",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 11.351352,
                                        "ypercent": 79.909805,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1432,
                                    "info": {
                                        "name": "Open Plan 2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:06:98",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 8.756757,
                                        "ypercent": 31.242311,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1433,
                                    "info": {
                                        "name": "Open Plan 3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:37",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 8.756757,
                                        "ypercent": 35.670357,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1434,
                                    "info": {
                                        "name": "Open Plan 4",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:ff",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 11.351352,
                                        "ypercent": 35.670357,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1435,
                                    "info": {
                                        "name": "Open Plan 5",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ca:40",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 11.135135,
                                        "ypercent": 31.201311,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1436,
                                    "info": {
                                        "name": "Open Plan 6",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:3f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 16.216217,
                                        "ypercent": 31.242311,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1437,
                                    "info": {
                                        "name": "Open Plan 7",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:b4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 16.145552,
                                        "ypercent": 35.4853,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1438,
                                    "info": {
                                        "name": "Open Plan 9",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:07",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 18.852186,
                                        "ypercent": 31.22901,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1439,
                                    "info": {
                                        "name": "Open Plan 8",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ca:41",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 18.852186,
                                        "ypercent": 35.539352,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 477,
                            "info": {
                                "name": "Xplore Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 987,
                                    "info": {
                                        "name": "Xplore - 1",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:f2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 47.027027,
                                        "ypercent": 70.1107,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 988,
                                    "info": {
                                        "name": "Xplore - 4",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:23",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 50.91892,
                                        "ypercent": 69.9877,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 989,
                                    "info": {
                                        "name": "Xplore - 3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f8:07:9e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 50.91892,
                                        "ypercent": 71.463715,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 990,
                                    "info": {
                                        "name": "Xplore - 2",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:8c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 47.131466,
                                        "ypercent": 71.50747,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 478,
                            "info": {
                                "name": "Xceler8 Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 991,
                                    "info": {
                                        "name": "Xceler8 - 1",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:2d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 69.83784,
                                        "ypercent": 76.46577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 992,
                                    "info": {
                                        "name": "Xceler8 - 4",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:20",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 72.37524,
                                        "ypercent": 78.03456,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1050,
                                    "info": {
                                        "name": "Xceler8 - 3",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:37",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 69.88336,
                                        "ypercent": 78.03456,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1051,
                                    "info": {
                                        "name": "Xceler8 - 2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:ed",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 72.432434,
                                        "ypercent": 76.46577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 479,
                            "info": {
                                "name": "Xponential Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 993,
                                    "info": {
                                        "name": "Xponential - 3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f8:07:a3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 3.0270271,
                                        "ypercent": 95.07995,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 994,
                                    "info": {
                                        "name": "Xponential - 1",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:8f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 6.8261847,
                                        "ypercent": 87.845665,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1049,
                                    "info": {
                                        "name": "Xponential - 2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fd:7a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 3.2432432,
                                        "ypercent": 90.40591,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 480,
                            "info": {
                                "name": "Infuse Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 995,
                                    "info": {
                                        "name": "Infuse - 1",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:35",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 33.694473,
                                        "ypercent": 69.66338,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 996,
                                    "info": {
                                        "name": "Infuse - 2",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:a6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 34.994583,
                                        "ypercent": 69.66338,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 997,
                                    "info": {
                                        "name": "Infuse - 3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:85",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 36.216217,
                                        "ypercent": 69.7417,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 998,
                                    "info": {
                                        "name": "Infuse - 4",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:84",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 37.51351,
                                        "ypercent": 71.463715,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 999,
                                    "info": {
                                        "name": "Infuse - 5",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:a4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 36.216217,
                                        "ypercent": 73.30873,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1000,
                                    "info": {
                                        "name": "Infuse - 6",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:2a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 34.91892,
                                        "ypercent": 73.30873,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1001,
                                    "info": {
                                        "name": "Infuse - 7",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:30",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 33.62162,
                                        "ypercent": 73.30873,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 481,
                            "info": {
                                "name": "Xtreme Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1002,
                                    "info": {
                                        "name": "Xtreme - 1",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:9d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 21.020958,
                                        "ypercent": 30.189732,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1003,
                                    "info": {
                                        "name": "Xtreme - 2",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:9e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 21.020958,
                                        "ypercent": 31.667564,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1004,
                                    "info": {
                                        "name": "Xtreme - 3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:08",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 22.27027,
                                        "ypercent": 33.21033,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1005,
                                    "info": {
                                        "name": "Xtreme - 4",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:83",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 23.621174,
                                        "ypercent": 33.145397,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1006,
                                    "info": {
                                        "name": "Xtreme - 5",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:a0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 24.864864,
                                        "ypercent": 31.734318,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1007,
                                    "info": {
                                        "name": "Xtreme - 6",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:78",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 24.921282,
                                        "ypercent": 30.189732,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 482,
                            "info": {
                                "name": "Whatsup Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1008,
                                    "info": {
                                        "name": "Whatsup - 1.1",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:31",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 23.835936,
                                        "ypercent": 70.97375,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1009,
                                    "info": {
                                        "name": "Whatsup - 1.2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:79",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 24.108109,
                                        "ypercent": 72.693726,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1010,
                                    "info": {
                                        "name": "Whatsup - 1.3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:94",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 25.405405,
                                        "ypercent": 73.43173,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1011,
                                    "info": {
                                        "name": "Whatsup - 1.4",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f8:07:9f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 26.702703,
                                        "ypercent": 73.55473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1012,
                                    "info": {
                                        "name": "Whatsup - 1.5",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:36",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 28,
                                        "ypercent": 72.693726,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1013,
                                    "info": {
                                        "name": "Whatsup - 1.6",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fc:ee",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 28.386314,
                                        "ypercent": 70.85059,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1014,
                                    "info": {
                                        "name": "Whatsup - 2.1",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:92",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 23.243244,
                                        "ypercent": 75.85076,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1015,
                                    "info": {
                                        "name": "Whatsup - 3.1",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:9b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 27.243244,
                                        "ypercent": 76.87577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1016,
                                    "info": {
                                        "name": "Whatsup - 3.2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:7a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 28.756756,
                                        "ypercent": 76.99877,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1017,
                                    "info": {
                                        "name": "Whatsup - 3.3",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:82",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 29.578081,
                                        "ypercent": 75.40724,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1047,
                                    "info": {
                                        "name": "Whatsup - 2.2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fd:7d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 24.324324,
                                        "ypercent": 76.99877,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1048,
                                    "info": {
                                        "name": "Whatsup - 2.3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f8:07:b8",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 25.72973,
                                        "ypercent": 76.62977,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 483,
                            "info": {
                                "name": "Illuminate Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1018,
                                    "info": {
                                        "name": "Illuminate - 1",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:8d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 31.567568,
                                        "ypercent": 65.80566,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1019,
                                    "info": {
                                        "name": "Illuminate - 2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:9a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 31.567568,
                                        "ypercent": 64.32964,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1020,
                                    "info": {
                                        "name": "Illuminate - 5",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:80",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 33.153378,
                                        "ypercent": 60.51696,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1021,
                                    "info": {
                                        "name": "Illuminate - 4",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:24",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 31.63851,
                                        "ypercent": 61.347366,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1022,
                                    "info": {
                                        "name": "Illuminate - 3",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:21",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 31.63851,
                                        "ypercent": 62.8252,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1023,
                                    "info": {
                                        "name": "Illuminate - 6",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:a1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 34.780437,
                                        "ypercent": 61.347366,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1024,
                                    "info": {
                                        "name": "Illuminate - 7",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:91",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 34.81081,
                                        "ypercent": 62.85363,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1025,
                                    "info": {
                                        "name": "Illuminate - 8",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:7e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 34.81081,
                                        "ypercent": 64.32964,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1026,
                                    "info": {
                                        "name": "Illuminate - 9",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:a2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 34.81081,
                                        "ypercent": 65.80566,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 484,
                            "info": {
                                "name": "Unravel Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1027,
                                    "info": {
                                        "name": "Unravel - 6",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:88",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.40774,
                                        "ypercent": 76.43357,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1028,
                                    "info": {
                                        "name": "Unravel - 5",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:2f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.299397,
                                        "ypercent": 74.95574,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1029,
                                    "info": {
                                        "name": "Unravel - 4",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:1c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.299397,
                                        "ypercent": 73.47791,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1030,
                                    "info": {
                                        "name": "Unravel - 3",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:21",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.299397,
                                        "ypercent": 72.00008,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1031,
                                    "info": {
                                        "name": "Unravel - 1",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:11",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.405815,
                                        "ypercent": 70.60429,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1032,
                                    "info": {
                                        "name": "Unravel - 2",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:8b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.09138,
                                        "ypercent": 70.52225,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1033,
                                    "info": {
                                        "name": "Unravel - 7",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:f7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 63.567566,
                                        "ypercent": 77.94178,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1034,
                                    "info": {
                                        "name": "Unravel - 8",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fd:1a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 64.97298,
                                        "ypercent": 77.85978,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1035,
                                    "info": {
                                        "name": "Unravel - 9",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:16",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.09138,
                                        "ypercent": 76.43357,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1036,
                                    "info": {
                                        "name": "Unravel - 10",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:1b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.09138,
                                        "ypercent": 74.95574,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1037,
                                    "info": {
                                        "name": "Unravel - 11",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:19",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.09138,
                                        "ypercent": 73.47791,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1038,
                                    "info": {
                                        "name": "Unravel - 12",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:12",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.09138,
                                        "ypercent": 72.00008,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 485,
                            "info": {
                                "name": "Decode Meeting Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1039,
                                    "info": {
                                        "name": "Decode - 1",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fd:18",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 72,
                                        "ypercent": 73.636734,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1040,
                                    "info": {
                                        "name": "Decode - 2",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fc:f4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 73.297295,
                                        "ypercent": 73.636734,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1041,
                                    "info": {
                                        "name": "Decode - 3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:8a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 74.5946,
                                        "ypercent": 73.636734,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1042,
                                    "info": {
                                        "name": "Decode - 4",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:9c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 75.84219,
                                        "ypercent": 71.630615,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1043,
                                    "info": {
                                        "name": "Decode - 5",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:2c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 74.5946,
                                        "ypercent": 69.9467,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1044,
                                    "info": {
                                        "name": "Decode - 6",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:46:8e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 73.297295,
                                        "ypercent": 69.9467,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1045,
                                    "info": {
                                        "name": "Decode - 7",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:14",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 72,
                                        "ypercent": 69.8237,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 524,
                            "info": {
                                "name": "Height Adjustable Desks",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "open_area",
                            "children": [
                                {
                                    "id": 1052,
                                    "info": {
                                        "name": "FNB1",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fc:ef",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 81.36765,
                                        "ypercent": 31.113377,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1053,
                                    "info": {
                                        "name": "FNB2",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:7e:33",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 83.96787,
                                        "ypercent": 31.23653,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1054,
                                    "info": {
                                        "name": "FNB3",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:fd:1d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 81.4054,
                                        "ypercent": 35.47441,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1055,
                                    "info": {
                                        "name": "FNB4",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:1e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 83.96595,
                                        "ypercent": 35.539352,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1056,
                                    "info": {
                                        "name": "FNB5",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fc:f5",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.30157,
                                        "ypercent": 31.113377,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1057,
                                    "info": {
                                        "name": "FNB6",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:f7:7e:13",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 91.010124,
                                        "ypercent": 31.113377,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1058,
                                    "info": {
                                        "name": "FNB7",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:46:95",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.30157,
                                        "ypercent": 35.546875,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1059,
                                    "info": {
                                        "name": "FNB8",
                                        "details": {
                                            "macaddress": "f8:f0:05:f7:fd:17",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.90178,
                                        "ypercent": 35.546875,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 558,
                            "info": {
                                "name": "Ponder Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 15.492958,
                                "ypercent": 41.58621,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1418,
                                    "info": {
                                        "name": "Ponder Room 10",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:d6:fb",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 15.385231,
                                        "ypercent": 41.69699,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 559,
                            "info": {
                                "name": "Create Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 11.0509205,
                                "ypercent": 41.58621,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1440,
                                    "info": {
                                        "name": "Create Room 11",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:b7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 12.676672,
                                        "ypercent": 42.189598,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1441,
                                    "info": {
                                        "name": "Create Room 1",
                                        "details": {
                                            "macaddress": "f8:f0:05:e2:4c:63",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 12.676672,
                                        "ypercent": 39.97285,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 560,
                            "info": {
                                "name": "Think Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 17.659805,
                                "ypercent": 70.15764,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1361,
                                    "info": {
                                        "name": "Think Room 32",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:06:b8",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 17.081081,
                                        "ypercent": 71.21771,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 561,
                            "info": {
                                "name": "Free Stand",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": -1,
                                "ypercent": -1,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "open_area",
                            "children": [
                                {
                                    "id": 1415,
                                    "info": {
                                        "name": "Free Stand 62",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e2:4c:6e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 73.51351,
                                        "ypercent": 63.673637,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1419,
                                    "info": {
                                        "name": "Free Stand 28",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:cb",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 25.0632,
                                        "ypercent": 63.587852,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1420,
                                    "info": {
                                        "name": "Free Stand 29",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:d2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 26.471651,
                                        "ypercent": 63.587852,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1421,
                                    "info": {
                                        "name": "Free Stand 30",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:09",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 25.0632,
                                        "ypercent": 66.54352,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1422,
                                    "info": {
                                        "name": "Free Stand 31",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:10",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 26.471651,
                                        "ypercent": 66.54352,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1423,
                                    "info": {
                                        "name": "Free Stand 64",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:da:ba",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 73.51351,
                                        "ypercent": 66.62566,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1424,
                                    "info": {
                                        "name": "Free Stand 63",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:7b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 75.02702,
                                        "ypercent": 63.673637,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1425,
                                    "info": {
                                        "name": "Free Stand 65",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:26",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 75.02702,
                                        "ypercent": 66.62566,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 562,
                            "info": {
                                "name": "Align Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 36.511375,
                                "ypercent": 77.054184,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1363,
                                    "info": {
                                        "name": "Align Room 34",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:c0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 38.13905,
                                        "ypercent": 76.310425,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1426,
                                    "info": {
                                        "name": "Align Room 35",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:e6:d9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 38.13905,
                                        "ypercent": 77.91141,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 563,
                            "info": {
                                "name": "Impact Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 76.16468,
                                "ypercent": 77.30049,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1364,
                                    "info": {
                                        "name": "Impact Room 36",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:95",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 74.702705,
                                        "ypercent": 78.06478,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1365,
                                    "info": {
                                        "name": "Impact Room 37",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:05:7e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 74.702705,
                                        "ypercent": 76.46577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1366,
                                    "info": {
                                        "name": "Impact Room 38",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d7:c9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 76.97298,
                                        "ypercent": 78.06478,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1367,
                                    "info": {
                                        "name": "Impact Room 39",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e2:60:c6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 77.08108,
                                        "ypercent": 76.46577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 564,
                            "info": {
                                "name": "Focus Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 82.881905,
                                "ypercent": 70.034485,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1368,
                                    "info": {
                                        "name": "Focus Room 50",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e2:4c:e9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 83.13513,
                                        "ypercent": 71.17671,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 565,
                            "info": {
                                "name": "Reflect Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 91.224266,
                                "ypercent": 70.034485,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1369,
                                    "info": {
                                        "name": "Reflect Room 51",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:be",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 91.567566,
                                        "ypercent": 69.208694,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 566,
                            "info": {
                                "name": "Step Up Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 88.624054,
                                "ypercent": 45.157635,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1370,
                                    "info": {
                                        "name": "Step Up Room 74",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:08",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.082954,
                                        "ypercent": 44.753414,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 567,
                            "info": {
                                "name": "Design Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 88.29903,
                                "ypercent": 40.724136,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1371,
                                    "info": {
                                        "name": "Design Room 75",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:0b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.51633,
                                        "ypercent": 40.689377,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 568,
                            "info": {
                                "name": "Review Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.83207,
                                "ypercent": 40.970444,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1372,
                                    "info": {
                                        "name": "Review Room 76",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:8f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 85.72973,
                                        "ypercent": 41.533417,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 1373,
                                    "info": {
                                        "name": "Review Room 77",
                                        "details": {
                                            "hidden": true,
                                            "macaddress": "f8:f0:05:e2:5f:fb",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 85.699425,
                                        "ypercent": 39.827305,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 569,
                            "info": {
                                "name": "Analyse Room",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 9.209101,
                                "ypercent": 70.280785,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "meeting_room",
                            "children": [
                                {
                                    "id": 1362,
                                    "info": {
                                        "name": "Analyse Room 33",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:d7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 8.432432,
                                        "ypercent": 69.00369,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "id": 631,
                            "info": {
                                "name": "Open Plan Area (phase 2)",
                                "details": {},
                                "location": "Africa/Johannesburg",
                                "xpercent": 58.396534,
                                "ypercent": 15.024631,
                                "hasfloorplan": true,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "open_area",
                            "children": [
                                {
                                    "id": 2177,
                                    "info": {
                                        "name": "Open desk - 85",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:79",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 41.945946,
                                        "ypercent": 12.655003,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2178,
                                    "info": {
                                        "name": "Open desk - 84",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:d6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 41.945946,
                                        "ypercent": 9.82945,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2179,
                                    "info": {
                                        "name": "Open desk - 92",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:eb",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 54.27027,
                                        "ypercent": 9.9523,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2180,
                                    "info": {
                                        "name": "Open desk - 93",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:c4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 54.279522,
                                        "ypercent": 12.768473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2181,
                                    "info": {
                                        "name": "Open desk - 86",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:f2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 45.612133,
                                        "ypercent": 9.812808,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2182,
                                    "info": {
                                        "name": "Open desk - 87",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:00",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 45.612133,
                                        "ypercent": 12.768473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2183,
                                    "info": {
                                        "name": "Open desk - 88",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:d4",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 48.10811,
                                        "ypercent": 9.840098,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2184,
                                    "info": {
                                        "name": "Open desk - 89",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ef:7d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 48.212353,
                                        "ypercent": 12.768473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2185,
                                    "info": {
                                        "name": "Open desk - 90",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:0f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 52,
                                        "ypercent": 9.82945,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2186,
                                    "info": {
                                        "name": "Open desk - 91",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d5:db",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 52,
                                        "ypercent": 12.777852,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2187,
                                    "info": {
                                        "name": "Open desk - 94",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:bf",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 58.054054,
                                        "ypercent": 9.95086,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2188,
                                    "info": {
                                        "name": "Open desk - 95",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:e3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 58.054054,
                                        "ypercent": 12.777852,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2189,
                                    "info": {
                                        "name": "Open desk - 96",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:b5",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 60.432434,
                                        "ypercent": 9.9630995,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2190,
                                    "info": {
                                        "name": "Open desk - 97",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:01",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 60.455036,
                                        "ypercent": 12.768473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2191,
                                    "info": {
                                        "name": "Open desk - 98",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:0a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 64.14122,
                                        "ypercent": 9.931111,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2192,
                                    "info": {
                                        "name": "Open desk - 99",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:ed",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 64.24956,
                                        "ypercent": 12.640471,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2193,
                                    "info": {
                                        "name": "Open desk - 100",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:05:02",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.5946,
                                        "ypercent": 9.9630995,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2194,
                                    "info": {
                                        "name": "Open desk - 101",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:05:7c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.5946,
                                        "ypercent": 12.6691265,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2195,
                                    "info": {
                                        "name": "Open desk - 102",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:75",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 70.42507,
                                        "ypercent": 9.807959,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2196,
                                    "info": {
                                        "name": "Open desk - 103",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:a7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 70.42507,
                                        "ypercent": 12.886777,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2197,
                                    "info": {
                                        "name": "Open desk - 104",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:e7:47",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 72.700264,
                                        "ypercent": 9.931111,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2198,
                                    "info": {
                                        "name": "Open desk - 105",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:05:79",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 72.75676,
                                        "ypercent": 12.792128,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2199,
                                    "info": {
                                        "name": "Open desk - 106",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:a7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 76.70639,
                                        "ypercent": 9.729064,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2200,
                                    "info": {
                                        "name": "Open desk - 107",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:fe",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 76.75676,
                                        "ypercent": 12.900702,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2201,
                                    "info": {
                                        "name": "Open desk - 108",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:b8",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.21622,
                                        "ypercent": 6.8796067,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2202,
                                    "info": {
                                        "name": "Open desk - 109",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:a0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.184555,
                                        "ypercent": 10.054264,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2203,
                                    "info": {
                                        "name": "Open desk - 110",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ee:2d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.184555,
                                        "ypercent": 12.763624,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2204,
                                    "info": {
                                        "name": "Open desk - 111",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:d2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.97654,
                                        "ypercent": 7.098599,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2205,
                                    "info": {
                                        "name": "Open desk - 112",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ee:7c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.97654,
                                        "ypercent": 10.177417,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2206,
                                    "info": {
                                        "name": "Open desk - 113",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:0d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 87.974,
                                        "ypercent": 12.768473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2207,
                                    "info": {
                                        "name": "Open desk - 114",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:e7:9b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.37838,
                                        "ypercent": 7.0110703,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2208,
                                    "info": {
                                        "name": "Open desk - 115",
                                        "details": {
                                            "macaddress": "f8:f0:05:e2:61:7c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.251724,
                                        "ypercent": 9.931111,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2209,
                                    "info": {
                                        "name": "Open desk - 116",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:f4:b2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.27027,
                                        "ypercent": 12.915129,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2210,
                                    "info": {
                                        "name": "Open desk - 117",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:2a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 94.16216,
                                        "ypercent": 7.002457,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2211,
                                    "info": {
                                        "name": "Open desk - 118",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:c7",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 94.152054,
                                        "ypercent": 10.054264,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2212,
                                    "info": {
                                        "name": "Open desk - 119",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:d3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 94.14951,
                                        "ypercent": 12.768473,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2213,
                                    "info": {
                                        "name": "Open desk - 120",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:f9",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 78.442406,
                                        "ypercent": 20.768549,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2214,
                                    "info": {
                                        "name": "Open desk - 121",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:69",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 78.442406,
                                        "ypercent": 23.601063,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2215,
                                    "info": {
                                        "name": "Open desk - 122",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:12",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 78.43987,
                                        "ypercent": 26.561577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2216,
                                    "info": {
                                        "name": "Open desk - 123",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:e3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.342735,
                                        "ypercent": 20.768549,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2217,
                                    "info": {
                                        "name": "Open desk - 124",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:d5:e0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.342735,
                                        "ypercent": 23.47791,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2218,
                                    "info": {
                                        "name": "Open desk - 125",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:d7:bf",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 82.342735,
                                        "ypercent": 26.433575,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2219,
                                    "info": {
                                        "name": "Open desk - 126",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ca:84",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.61793,
                                        "ypercent": 20.768549,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2220,
                                    "info": {
                                        "name": "Open desk - 127",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:d3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.61793,
                                        "ypercent": 23.601063,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2221,
                                    "info": {
                                        "name": "Open desk - 128",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:c3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 84.61539,
                                        "ypercent": 26.561577,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2222,
                                    "info": {
                                        "name": "Open desk - 129",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:11",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.409904,
                                        "ypercent": 20.768549,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2223,
                                    "info": {
                                        "name": "Open desk - 130",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:f4:bc",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.409904,
                                        "ypercent": 23.601063,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2224,
                                    "info": {
                                        "name": "Open desk - 131",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:ac",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 88.409904,
                                        "ypercent": 26.67988,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2225,
                                    "info": {
                                        "name": "Open desk - 132",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:e6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.6851,
                                        "ypercent": 20.768549,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2226,
                                    "info": {
                                        "name": "Open desk - 133",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:fc",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.79344,
                                        "ypercent": 23.601063,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2227,
                                    "info": {
                                        "name": "Open desk - 134",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fe:3a",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 90.79344,
                                        "ypercent": 26.556726,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2228,
                                    "info": {
                                        "name": "Open desk - 135",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:31",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 94.69376,
                                        "ypercent": 20.768549,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2229,
                                    "info": {
                                        "name": "Open desk - 136",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:04:e8",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 94.58542,
                                        "ypercent": 23.47791,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2230,
                                    "info": {
                                        "name": "Open desk - 137",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:d7:d1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 94.69376,
                                        "ypercent": 26.67988,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2231,
                                    "info": {
                                        "name": "Open desk - 138",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:27",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 40.972973,
                                        "ypercent": 19.411758,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2232,
                                    "info": {
                                        "name": "Open desk - 139",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:fd:b3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 40.95595,
                                        "ypercent": 22.61584,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2233,
                                    "info": {
                                        "name": "Open desk - 140",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:db",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 40.95595,
                                        "ypercent": 25.448353,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2234,
                                    "info": {
                                        "name": "Open desk - 141",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:b0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 44.853737,
                                        "ypercent": 19.581282,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2235,
                                    "info": {
                                        "name": "Open desk - 142",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:06",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 44.856277,
                                        "ypercent": 22.61584,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2236,
                                    "info": {
                                        "name": "Open desk - 143",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:06:a8",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 44.856277,
                                        "ypercent": 25.448353,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2237,
                                    "info": {
                                        "name": "Open desk - 144",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:f6",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 47.67064,
                                        "ypercent": 19.541872,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2238,
                                    "info": {
                                        "name": "Open desk - 145",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:04:ea",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 47.67064,
                                        "ypercent": 22.743843,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2239,
                                    "info": {
                                        "name": "Open desk - 146",
                                        "details": {
                                            "macaddress": "f8:f0:05:e2:60:3f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 47.67064,
                                        "ypercent": 25.33005,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2240,
                                    "info": {
                                        "name": "Open desk - 147",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:ff:c2",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 51.35428,
                                        "ypercent": 19.665024,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2241,
                                    "info": {
                                        "name": "Open desk - 148",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:ce",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 51.45946,
                                        "ypercent": 22.483011,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2242,
                                    "info": {
                                        "name": "Open desk - 149",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:1f",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 51.567566,
                                        "ypercent": 25.431416,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2243,
                                    "info": {
                                        "name": "Open desk - 150",
                                        "details": {
                                            "macaddress": "f8:f0:05:e4:05:0d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 55.690514,
                                        "ypercent": 19.660175,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2244,
                                    "info": {
                                        "name": "Open desk - 151",
                                        "details": {
                                            "macaddress": "f8:f0:05:e3:cb:2c",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 55.675674,
                                        "ypercent": 22.604424,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2245,
                                    "info": {
                                        "name": "Open desk - 152",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d7:22",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 55.675674,
                                        "ypercent": 25.308565,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2246,
                                    "info": {
                                        "name": "Open desk - 153",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:29",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 59.567566,
                                        "ypercent": 19.534609,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2247,
                                    "info": {
                                        "name": "Open desk - 154",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fd:27",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 59.567566,
                                        "ypercent": 22.483011,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2248,
                                    "info": {
                                        "name": "Open desk - 155",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:c1",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 59.567566,
                                        "ypercent": 25.308565,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2249,
                                    "info": {
                                        "name": "Open desk - 156",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e2:4c:6d",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.37838,
                                        "ypercent": 19.411758,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2250,
                                    "info": {
                                        "name": "Open desk - 157",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:cb:be",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.37838,
                                        "ypercent": 22.360163,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2251,
                                    "info": {
                                        "name": "Open desk - 158",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:d7:b0",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 62.37838,
                                        "ypercent": 25.308565,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2252,
                                    "info": {
                                        "name": "Open desk - 159",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:fe:3e",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.27027,
                                        "ypercent": 19.411758,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2253,
                                    "info": {
                                        "name": "Open desk - 160",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e3:ff:b3",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.27027,
                                        "ypercent": 22.483011,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                },
                                {
                                    "id": 2254,
                                    "info": {
                                        "name": "Open desk - 161",
                                        "details": {
                                            "hidden": false,
                                            "macaddress": "f8:f0:05:e4:05:7b",
                                            "redisid": 0
                                        },
                                        "location": "Africa/Johannesburg",
                                        "xpercent": 66.16216,
                                        "ypercent": 25.584255,
                                        "hasfloorplan": false,
                                        "useownfp": false,
                                        "cardid": 30
                                    },
                                    "type": "sensor",
                                    "children": []
                                }
                            ]
                        }
                    ]
                },
                "631": {
                    "id": 631,
                    "info": {
                        "name": "Open Plan Area (phase 2)",
                        "details": {},
                        "location": "Africa/Johannesburg",
                        "xpercent": 58.396534,
                        "ypercent": 15.024631,
                        "hasfloorplan": true,
                        "useownfp": false,
                        "cardid": 30
                    },
                    "type": "open_area",
                    "children": [
                        {
                            "id": 2177,
                            "info": {
                                "name": "Open desk - 85",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:79",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 41.945946,
                                "ypercent": 12.655003,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2178,
                            "info": {
                                "name": "Open desk - 84",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fe:d6",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 41.945946,
                                "ypercent": 9.82945,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2179,
                            "info": {
                                "name": "Open desk - 92",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:04:eb",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 54.27027,
                                "ypercent": 9.9523,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2180,
                            "info": {
                                "name": "Open desk - 93",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fe:c4",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 54.279522,
                                "ypercent": 12.768473,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2181,
                            "info": {
                                "name": "Open desk - 86",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:f2",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 45.612133,
                                "ypercent": 9.812808,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2182,
                            "info": {
                                "name": "Open desk - 87",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fe:00",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 45.612133,
                                "ypercent": 12.768473,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2183,
                            "info": {
                                "name": "Open desk - 88",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:d4",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 48.10811,
                                "ypercent": 9.840098,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2184,
                            "info": {
                                "name": "Open desk - 89",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ef:7d",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 48.212353,
                                "ypercent": 12.768473,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2185,
                            "info": {
                                "name": "Open desk - 90",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fd:0f",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 52,
                                "ypercent": 9.82945,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2186,
                            "info": {
                                "name": "Open desk - 91",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:d5:db",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 52,
                                "ypercent": 12.777852,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2187,
                            "info": {
                                "name": "Open desk - 94",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fe:bf",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 58.054054,
                                "ypercent": 9.95086,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2188,
                            "info": {
                                "name": "Open desk - 95",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:04:e3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 58.054054,
                                "ypercent": 12.777852,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2189,
                            "info": {
                                "name": "Open desk - 96",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fd:b5",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 60.432434,
                                "ypercent": 9.9630995,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2190,
                            "info": {
                                "name": "Open desk - 97",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:05:01",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 60.455036,
                                "ypercent": 12.768473,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2191,
                            "info": {
                                "name": "Open desk - 98",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:0a",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 64.14122,
                                "ypercent": 9.931111,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2192,
                            "info": {
                                "name": "Open desk - 99",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:ed",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 64.24956,
                                "ypercent": 12.640471,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2193,
                            "info": {
                                "name": "Open desk - 100",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:05:02",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 66.5946,
                                "ypercent": 9.9630995,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2194,
                            "info": {
                                "name": "Open desk - 101",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:05:7c",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 66.5946,
                                "ypercent": 12.6691265,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2195,
                            "info": {
                                "name": "Open desk - 102",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:75",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 70.42507,
                                "ypercent": 9.807959,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2196,
                            "info": {
                                "name": "Open desk - 103",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:a7",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 70.42507,
                                "ypercent": 12.886777,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2197,
                            "info": {
                                "name": "Open desk - 104",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:e7:47",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 72.700264,
                                "ypercent": 9.931111,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2198,
                            "info": {
                                "name": "Open desk - 105",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:05:79",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 72.75676,
                                "ypercent": 12.792128,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2199,
                            "info": {
                                "name": "Open desk - 106",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:a7",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 76.70639,
                                "ypercent": 9.729064,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2200,
                            "info": {
                                "name": "Open desk - 107",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:04:fe",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 76.75676,
                                "ypercent": 12.900702,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2201,
                            "info": {
                                "name": "Open desk - 108",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:b8",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.21622,
                                "ypercent": 6.8796067,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2202,
                            "info": {
                                "name": "Open desk - 109",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:a0",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.184555,
                                "ypercent": 10.054264,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2203,
                            "info": {
                                "name": "Open desk - 110",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ee:2d",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.184555,
                                "ypercent": 12.763624,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2204,
                            "info": {
                                "name": "Open desk - 111",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fe:d2",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 87.97654,
                                "ypercent": 7.098599,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2205,
                            "info": {
                                "name": "Open desk - 112",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ee:7c",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 87.97654,
                                "ypercent": 10.177417,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2206,
                            "info": {
                                "name": "Open desk - 113",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:0d",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 87.974,
                                "ypercent": 12.768473,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2207,
                            "info": {
                                "name": "Open desk - 114",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:e7:9b",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 90.37838,
                                "ypercent": 7.0110703,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2208,
                            "info": {
                                "name": "Open desk - 115",
                                "details": {
                                    "macaddress": "f8:f0:05:e2:61:7c",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 90.251724,
                                "ypercent": 9.931111,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2209,
                            "info": {
                                "name": "Open desk - 116",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:f4:b2",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 90.27027,
                                "ypercent": 12.915129,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2210,
                            "info": {
                                "name": "Open desk - 117",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fd:2a",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 94.16216,
                                "ypercent": 7.002457,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2211,
                            "info": {
                                "name": "Open desk - 118",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:c7",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 94.152054,
                                "ypercent": 10.054264,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2212,
                            "info": {
                                "name": "Open desk - 119",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fe:d3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 94.14951,
                                "ypercent": 12.768473,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2213,
                            "info": {
                                "name": "Open desk - 120",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:f9",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 78.442406,
                                "ypercent": 20.768549,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2214,
                            "info": {
                                "name": "Open desk - 121",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ff:69",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 78.442406,
                                "ypercent": 23.601063,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2215,
                            "info": {
                                "name": "Open desk - 122",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:12",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 78.43987,
                                "ypercent": 26.561577,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2216,
                            "info": {
                                "name": "Open desk - 123",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fe:e3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 82.342735,
                                "ypercent": 20.768549,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2217,
                            "info": {
                                "name": "Open desk - 124",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:d5:e0",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 82.342735,
                                "ypercent": 23.47791,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2218,
                            "info": {
                                "name": "Open desk - 125",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:d7:bf",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 82.342735,
                                "ypercent": 26.433575,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2219,
                            "info": {
                                "name": "Open desk - 126",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ca:84",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.61793,
                                "ypercent": 20.768549,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2220,
                            "info": {
                                "name": "Open desk - 127",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ff:d3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.61793,
                                "ypercent": 23.601063,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2221,
                            "info": {
                                "name": "Open desk - 128",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fe:c3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 84.61539,
                                "ypercent": 26.561577,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2222,
                            "info": {
                                "name": "Open desk - 129",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:11",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 88.409904,
                                "ypercent": 20.768549,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2223,
                            "info": {
                                "name": "Open desk - 130",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:f4:bc",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 88.409904,
                                "ypercent": 23.601063,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2224,
                            "info": {
                                "name": "Open desk - 131",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ff:ac",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 88.409904,
                                "ypercent": 26.67988,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2225,
                            "info": {
                                "name": "Open desk - 132",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:e6",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 90.6851,
                                "ypercent": 20.768549,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2226,
                            "info": {
                                "name": "Open desk - 133",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:fc",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 90.79344,
                                "ypercent": 23.601063,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2227,
                            "info": {
                                "name": "Open desk - 134",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fe:3a",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 90.79344,
                                "ypercent": 26.556726,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2228,
                            "info": {
                                "name": "Open desk - 135",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:31",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 94.69376,
                                "ypercent": 20.768549,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2229,
                            "info": {
                                "name": "Open desk - 136",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:04:e8",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 94.58542,
                                "ypercent": 23.47791,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2230,
                            "info": {
                                "name": "Open desk - 137",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:d7:d1",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 94.69376,
                                "ypercent": 26.67988,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2231,
                            "info": {
                                "name": "Open desk - 138",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fe:27",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 40.972973,
                                "ypercent": 19.411758,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2232,
                            "info": {
                                "name": "Open desk - 139",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:fd:b3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 40.95595,
                                "ypercent": 22.61584,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2233,
                            "info": {
                                "name": "Open desk - 140",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ff:db",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 40.95595,
                                "ypercent": 25.448353,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2234,
                            "info": {
                                "name": "Open desk - 141",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ff:b0",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 44.853737,
                                "ypercent": 19.581282,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2235,
                            "info": {
                                "name": "Open desk - 142",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:05:06",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 44.856277,
                                "ypercent": 22.61584,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2236,
                            "info": {
                                "name": "Open desk - 143",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:06:a8",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 44.856277,
                                "ypercent": 25.448353,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2237,
                            "info": {
                                "name": "Open desk - 144",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:f6",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 47.67064,
                                "ypercent": 19.541872,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2238,
                            "info": {
                                "name": "Open desk - 145",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:04:ea",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 47.67064,
                                "ypercent": 22.743843,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2239,
                            "info": {
                                "name": "Open desk - 146",
                                "details": {
                                    "macaddress": "f8:f0:05:e2:60:3f",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 47.67064,
                                "ypercent": 25.33005,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2240,
                            "info": {
                                "name": "Open desk - 147",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:ff:c2",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 51.35428,
                                "ypercent": 19.665024,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2241,
                            "info": {
                                "name": "Open desk - 148",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fe:ce",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 51.45946,
                                "ypercent": 22.483011,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2242,
                            "info": {
                                "name": "Open desk - 149",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fd:1f",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 51.567566,
                                "ypercent": 25.431416,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2243,
                            "info": {
                                "name": "Open desk - 150",
                                "details": {
                                    "macaddress": "f8:f0:05:e4:05:0d",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 55.690514,
                                "ypercent": 19.660175,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2244,
                            "info": {
                                "name": "Open desk - 151",
                                "details": {
                                    "macaddress": "f8:f0:05:e3:cb:2c",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 55.675674,
                                "ypercent": 22.604424,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2245,
                            "info": {
                                "name": "Open desk - 152",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:d7:22",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 55.675674,
                                "ypercent": 25.308565,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2246,
                            "info": {
                                "name": "Open desk - 153",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fd:29",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 59.567566,
                                "ypercent": 19.534609,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2247,
                            "info": {
                                "name": "Open desk - 154",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fd:27",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 59.567566,
                                "ypercent": 22.483011,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2248,
                            "info": {
                                "name": "Open desk - 155",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:c1",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 59.567566,
                                "ypercent": 25.308565,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2249,
                            "info": {
                                "name": "Open desk - 156",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e2:4c:6d",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 62.37838,
                                "ypercent": 19.411758,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2250,
                            "info": {
                                "name": "Open desk - 157",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:cb:be",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 62.37838,
                                "ypercent": 22.360163,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2251,
                            "info": {
                                "name": "Open desk - 158",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:d7:b0",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 62.37838,
                                "ypercent": 25.308565,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2252,
                            "info": {
                                "name": "Open desk - 159",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:fe:3e",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 66.27027,
                                "ypercent": 19.411758,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2253,
                            "info": {
                                "name": "Open desk - 160",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e3:ff:b3",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 66.27027,
                                "ypercent": 22.483011,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        },
                        {
                            "id": 2254,
                            "info": {
                                "name": "Open desk - 161",
                                "details": {
                                    "hidden": false,
                                    "macaddress": "f8:f0:05:e4:05:7b",
                                    "redisid": 0
                                },
                                "location": "Africa/Johannesburg",
                                "xpercent": 66.16216,
                                "ypercent": 25.584255,
                                "hasfloorplan": false,
                                "useownfp": false,
                                "cardid": 30
                            },
                            "type": "sensor",
                            "children": []
                        }
                    ]
                }
            },
            "floorplan": [
                "https://v3-floorplan.s3-eu-west-1.amazonaws.com/floorplans-v2/185?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJ7UXY5M3HYOL2N7A%2F20181021%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20181021T195002Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fd55be2abf277937f2dba403d24c6fb666943dcad69c23f4fa1ddd809af6dd1f",
                "https://v3-floorplan.s3-eu-west-1.amazonaws.com/floorplans-v2/185?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJ7UXY5M3HYOL2N7A%2F20181021%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20181021T195002Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=fd55be2abf277937f2dba403d24c6fb666943dcad69c23f4fa1ddd809af6dd1f"
            ],
            "fullTemplate": {
                "id": 5,
                "name": "Lower FNB",
                containerHeight: 450,
                containerWidth: 800,
                logo: {
                    url: "https://senzolive.com/static/media/Logo.716e3409.svg",
                    angle: 0,
                    left: 39,
                    top: 20,
                    width: 230,
                },
                line: {
                    show: true,
                    color: "#3f5043",
                    thickness: 2,
                    length: 800,
                    left: 39,
                    top: 118,
                },
                textContainer: [
                    {
                        align: "left",
                        top: 125,
                        left: 39,
                        size: 36,
                    },
                ],
            }
        },
        sensorsData: [
            {
                "id": 965,
                "name": "FNB57",
                "macaddress": "f8:f0:05:f7:7e:29",
                "xpercent": 20.479246,
                "ypercent": 88.37939,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539962305,
                "lastonl": 1540151537,
                "hidden": false
            },
            {
                "id": 966,
                "name": "FNB58",
                "macaddress": "f8:f0:05:f7:fc:ec",
                "xpercent": 23.135136,
                "ypercent": 88.43788,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143017,
                "lastonl": 1540151517,
                "hidden": false
            },
            {
                "id": 967,
                "name": "FNB59",
                "macaddress": "f8:f0:05:f7:fc:f8",
                "xpercent": 25.621622,
                "ypercent": 88.43788,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142889,
                "lastonl": 1540151517,
                "hidden": false
            },
            {
                "id": 968,
                "name": "FNB60",
                "macaddress": "f8:f0:05:f7:7e:26",
                "xpercent": 28.324324,
                "ypercent": 88.31488,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539960857,
                "lastonl": 1540151511,
                "hidden": false
            },
            {
                "id": 969,
                "name": "FNB61",
                "macaddress": "f8:f0:05:f8:07:a1",
                "xpercent": 20.54054,
                "ypercent": 92.86593,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143087,
                "lastonl": 1540151571,
                "hidden": false
            },
            {
                "id": 970,
                "name": "FNB62",
                "macaddress": "f8:f0:05:f7:46:a5",
                "xpercent": 23.135136,
                "ypercent": 92.86593,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143059,
                "lastonl": 1540151573,
                "hidden": false
            },
            {
                "id": 971,
                "name": "FNB63",
                "macaddress": "f8:f0:05:f7:46:a7",
                "xpercent": 25.72973,
                "ypercent": 92.86593,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143133,
                "lastonl": 1540151487,
                "hidden": false
            },
            {
                "id": 972,
                "name": "FNB64",
                "macaddress": "f8:f0:05:f7:7e:28",
                "xpercent": 28.386314,
                "ypercent": 92.771774,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142940,
                "lastonl": 1540151548,
                "hidden": false
            },
            {
                "id": 973,
                "name": "FNB68",
                "macaddress": "f8:f0:05:f7:7e:38",
                "xpercent": 6.284473,
                "ypercent": 75.40724,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142650,
                "lastonl": 1540151576,
                "hidden": false
            },
            {
                "id": 974,
                "name": "FNB69",
                "macaddress": "f8:f0:05:f7:46:7f",
                "xpercent": 8.864865,
                "ypercent": 75.48176,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142712,
                "lastonl": 1540151500,
                "hidden": false
            },
            {
                "id": 975,
                "name": "FNB71",
                "macaddress": "f8:f0:05:f7:7e:2b",
                "xpercent": 14.085123,
                "ypercent": 75.40724,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539961088,
                "lastonl": 1540151529,
                "hidden": false
            },
            {
                "id": 976,
                "name": "FNB72",
                "macaddress": "f8:f0:05:f7:46:a3",
                "xpercent": 6.2702703,
                "ypercent": 79.909805,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539955540,
                "lastonl": 1540151561,
                "hidden": false
            },
            {
                "id": 977,
                "name": "FNB73",
                "macaddress": "f8:f0:05:f7:7e:25",
                "xpercent": 8.864865,
                "ypercent": 79.909805,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142791,
                "lastonl": 1540151563,
                "hidden": false
            },
            {
                "id": 978,
                "name": "FNB75",
                "macaddress": "f8:f0:05:e3:fe:cd",
                "xpercent": 14.054054,
                "ypercent": 79.909805,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539958675,
                "lastonl": 1540151495,
                "hidden": false
            },
            {
                "id": 987,
                "name": "Xplore - 1",
                "macaddress": "f8:f0:05:f7:fc:f2",
                "xpercent": 47.027027,
                "ypercent": 70.1107,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539937623,
                "lastonl": 1540151500,
                "hidden": false
            },
            {
                "id": 988,
                "name": "Xplore - 4",
                "macaddress": "f8:f0:05:f7:7e:23",
                "xpercent": 50.91892,
                "ypercent": 69.9877,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539883862,
                "lastonl": 1540151554,
                "hidden": false
            },
            {
                "id": 989,
                "name": "Xplore - 3",
                "macaddress": "f8:f0:05:f8:07:9e",
                "xpercent": 50.91892,
                "ypercent": 71.463715,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143347,
                "lastonl": 1540151479,
                "hidden": false
            },
            {
                "id": 990,
                "name": "Xplore - 2",
                "macaddress": "f8:f0:05:f7:46:8c",
                "xpercent": 47.131466,
                "ypercent": 71.50747,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952192,
                "lastonl": 1540151479,
                "hidden": false
            },
            {
                "id": 991,
                "name": "Xceler8 - 1",
                "macaddress": "f8:f0:05:f7:7e:2d",
                "xpercent": 69.83784,
                "ypercent": 76.46577,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537213461,
                "lastonl": 1537213461,
                "hidden": false
            },
            {
                "id": 992,
                "name": "Xceler8 - 4",
                "macaddress": "f8:f0:05:f7:fd:20",
                "xpercent": 72.37524,
                "ypercent": 78.03456,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537194004,
                "lastonl": 1537194004,
                "hidden": false
            },
            {
                "id": 993,
                "name": "Xponential - 3",
                "macaddress": "f8:f0:05:f8:07:a3",
                "xpercent": 3.0270271,
                "ypercent": 95.07995,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537172090,
                "lastonl": 1537172090,
                "hidden": false
            },
            {
                "id": 994,
                "name": "Xponential - 1",
                "macaddress": "f8:f0:05:f7:46:8f",
                "xpercent": 6.8261847,
                "ypercent": 87.845665,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540136729,
                "lastonl": 1540151535,
                "hidden": false
            },
            {
                "id": 995,
                "name": "Infuse - 1",
                "macaddress": "f8:f0:05:f7:7e:35",
                "xpercent": 33.694473,
                "ypercent": 69.66338,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 996,
                "name": "Infuse - 2",
                "macaddress": "f8:f0:05:f7:46:a6",
                "xpercent": 34.994583,
                "ypercent": 69.66338,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 997,
                "name": "Infuse - 3",
                "macaddress": "f8:f0:05:f7:46:85",
                "xpercent": 36.216217,
                "ypercent": 69.7417,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 998,
                "name": "Infuse - 4",
                "macaddress": "f8:f0:05:f7:46:84",
                "xpercent": 37.51351,
                "ypercent": 71.463715,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 999,
                "name": "Infuse - 5",
                "macaddress": "f8:f0:05:f7:46:a4",
                "xpercent": 36.216217,
                "ypercent": 73.30873,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1000,
                "name": "Infuse - 6",
                "macaddress": "f8:f0:05:f7:7e:2a",
                "xpercent": 34.91892,
                "ypercent": 73.30873,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1001,
                "name": "Infuse - 7",
                "macaddress": "f8:f0:05:f7:7e:30",
                "xpercent": 33.62162,
                "ypercent": 73.30873,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1002,
                "name": "Xtreme - 1",
                "macaddress": "f8:f0:05:f7:46:9d",
                "xpercent": 21.020958,
                "ypercent": 30.189732,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540141833,
                "lastonl": 1540151544,
                "hidden": false
            },
            {
                "id": 1003,
                "name": "Xtreme - 2",
                "macaddress": "f8:f0:05:f7:46:9e",
                "xpercent": 21.020958,
                "ypercent": 31.667564,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539959327,
                "lastonl": 1540151498,
                "hidden": false
            },
            {
                "id": 1004,
                "name": "Xtreme - 3",
                "macaddress": "f8:f0:05:f7:7e:08",
                "xpercent": 22.27027,
                "ypercent": 33.21033,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540141843,
                "lastonl": 1540151477,
                "hidden": false
            },
            {
                "id": 1005,
                "name": "Xtreme - 4",
                "macaddress": "f8:f0:05:f7:46:83",
                "xpercent": 23.621174,
                "ypercent": 33.145397,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540141867,
                "lastonl": 1540151496,
                "hidden": false
            },
            {
                "id": 1006,
                "name": "Xtreme - 5",
                "macaddress": "f8:f0:05:f7:46:a0",
                "xpercent": 24.864864,
                "ypercent": 31.734318,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539946895,
                "lastonl": 1540151538,
                "hidden": false
            },
            {
                "id": 1007,
                "name": "Xtreme - 6",
                "macaddress": "f8:f0:05:f7:46:78",
                "xpercent": 24.921282,
                "ypercent": 30.189732,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540141895,
                "lastonl": 1540151578,
                "hidden": false
            },
            {
                "id": 1008,
                "name": "Whatsup - 1.1",
                "macaddress": "f8:f0:05:f7:7e:31",
                "xpercent": 23.835936,
                "ypercent": 70.97375,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143048,
                "lastonl": 1540151501,
                "hidden": false
            },
            {
                "id": 1009,
                "name": "Whatsup - 1.2",
                "macaddress": "f8:f0:05:f7:46:79",
                "xpercent": 24.108109,
                "ypercent": 72.693726,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953592,
                "lastonl": 1540151597,
                "hidden": false
            },
            {
                "id": 1010,
                "name": "Whatsup - 1.3",
                "macaddress": "f8:f0:05:f7:46:94",
                "xpercent": 25.405405,
                "ypercent": 73.43173,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953631,
                "lastonl": 1540151601,
                "hidden": false
            },
            {
                "id": 1011,
                "name": "Whatsup - 1.4",
                "macaddress": "f8:f0:05:f8:07:9f",
                "xpercent": 26.702703,
                "ypercent": 73.55473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953507,
                "lastonl": 1540151594,
                "hidden": false
            },
            {
                "id": 1012,
                "name": "Whatsup - 1.5",
                "macaddress": "f8:f0:05:f7:7e:36",
                "xpercent": 28,
                "ypercent": 72.693726,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952695,
                "lastonl": 1540151483,
                "hidden": false
            },
            {
                "id": 1013,
                "name": "Whatsup - 1.6",
                "macaddress": "f8:f0:05:f7:fc:ee",
                "xpercent": 28.386314,
                "ypercent": 70.85059,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953528,
                "lastonl": 1540151569,
                "hidden": false
            },
            {
                "id": 1014,
                "name": "Whatsup - 2.1",
                "macaddress": "f8:f0:05:f7:46:92",
                "xpercent": 23.243244,
                "ypercent": 75.85076,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952398,
                "lastonl": 1540151589,
                "hidden": false
            },
            {
                "id": 1015,
                "name": "Whatsup - 3.1",
                "macaddress": "f8:f0:05:f7:46:9b",
                "xpercent": 27.243244,
                "ypercent": 76.87577,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953542,
                "lastonl": 1540151549,
                "hidden": false
            },
            {
                "id": 1016,
                "name": "Whatsup - 3.2",
                "macaddress": "f8:f0:05:f7:46:7a",
                "xpercent": 28.756756,
                "ypercent": 76.99877,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952425,
                "lastonl": 1540151582,
                "hidden": false
            },
            {
                "id": 1017,
                "name": "Whatsup - 3.3",
                "macaddress": "f8:f0:05:f7:46:82",
                "xpercent": 29.578081,
                "ypercent": 75.40724,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540012619,
                "lastonl": 1540151479,
                "hidden": false
            },
            {
                "id": 1018,
                "name": "Illuminate - 1",
                "macaddress": "f8:f0:05:f7:46:8d",
                "xpercent": 31.567568,
                "ypercent": 65.80566,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539949904,
                "lastonl": 1540151476,
                "hidden": false
            },
            {
                "id": 1019,
                "name": "Illuminate - 2",
                "macaddress": "f8:f0:05:f7:46:9a",
                "xpercent": 31.567568,
                "ypercent": 64.32964,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142575,
                "lastonl": 1540151488,
                "hidden": false
            },
            {
                "id": 1020,
                "name": "Illuminate - 5",
                "macaddress": "f8:f0:05:f7:46:80",
                "xpercent": 33.153378,
                "ypercent": 60.51696,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142543,
                "lastonl": 1540151577,
                "hidden": false
            },
            {
                "id": 1021,
                "name": "Illuminate - 4",
                "macaddress": "f8:f0:05:f7:7e:24",
                "xpercent": 31.63851,
                "ypercent": 61.347366,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142484,
                "lastonl": 1540151491,
                "hidden": false
            },
            {
                "id": 1022,
                "name": "Illuminate - 3",
                "macaddress": "f8:f0:05:f7:7e:21",
                "xpercent": 31.63851,
                "ypercent": 62.8252,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142471,
                "lastonl": 1540151578,
                "hidden": false
            },
            {
                "id": 1023,
                "name": "Illuminate - 6",
                "macaddress": "f8:f0:05:f7:46:a1",
                "xpercent": 34.780437,
                "ypercent": 61.347366,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142536,
                "lastonl": 1540151553,
                "hidden": false
            },
            {
                "id": 1024,
                "name": "Illuminate - 7",
                "macaddress": "f8:f0:05:f7:46:91",
                "xpercent": 34.81081,
                "ypercent": 62.85363,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142501,
                "lastonl": 1540151539,
                "hidden": false
            },
            {
                "id": 1025,
                "name": "Illuminate - 8",
                "macaddress": "f8:f0:05:f7:46:7e",
                "xpercent": 34.81081,
                "ypercent": 64.32964,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142500,
                "lastonl": 1540151522,
                "hidden": false
            },
            {
                "id": 1026,
                "name": "Illuminate - 9",
                "macaddress": "f8:f0:05:f7:46:a2",
                "xpercent": 34.81081,
                "ypercent": 65.80566,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142593,
                "lastonl": 1540151537,
                "hidden": false
            },
            {
                "id": 1027,
                "name": "Unravel - 6",
                "macaddress": "f8:f0:05:f7:46:88",
                "xpercent": 62.40774,
                "ypercent": 76.43357,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143734,
                "lastonl": 1540151513,
                "hidden": false
            },
            {
                "id": 1028,
                "name": "Unravel - 5",
                "macaddress": "f8:f0:05:f7:7e:2f",
                "xpercent": 62.299397,
                "ypercent": 74.95574,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143743,
                "lastonl": 1540151584,
                "hidden": false
            },
            {
                "id": 1029,
                "name": "Unravel - 4",
                "macaddress": "f8:f0:05:f7:fd:1c",
                "xpercent": 62.299397,
                "ypercent": 73.47791,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144202,
                "lastonl": 1540151476,
                "hidden": false
            },
            {
                "id": 1030,
                "name": "Unravel - 3",
                "macaddress": "f8:f0:05:f7:fd:21",
                "xpercent": 62.299397,
                "ypercent": 72.00008,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143730,
                "lastonl": 1540151584,
                "hidden": false
            },
            {
                "id": 1031,
                "name": "Unravel - 1",
                "macaddress": "f8:f0:05:f7:7e:11",
                "xpercent": 62.405815,
                "ypercent": 70.60429,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144150,
                "lastonl": 1540151491,
                "hidden": false
            },
            {
                "id": 1032,
                "name": "Unravel - 2",
                "macaddress": "f8:f0:05:f7:46:8b",
                "xpercent": 66.09138,
                "ypercent": 70.52225,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143731,
                "lastonl": 1540151523,
                "hidden": false
            },
            {
                "id": 1033,
                "name": "Unravel - 7",
                "macaddress": "f8:f0:05:f7:fc:f7",
                "xpercent": 63.567566,
                "ypercent": 77.94178,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539944289,
                "lastonl": 1540151599,
                "hidden": false
            },
            {
                "id": 1034,
                "name": "Unravel - 8",
                "macaddress": "f8:f0:05:f7:fd:1a",
                "xpercent": 64.97298,
                "ypercent": 77.85978,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143718,
                "lastonl": 1540151564,
                "hidden": false
            },
            {
                "id": 1035,
                "name": "Unravel - 9",
                "macaddress": "f8:f0:05:f7:fd:16",
                "xpercent": 66.09138,
                "ypercent": 76.43357,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539948033,
                "lastonl": 1540151585,
                "hidden": false
            },
            {
                "id": 1036,
                "name": "Unravel - 10",
                "macaddress": "f8:f0:05:f7:fd:1b",
                "xpercent": 66.09138,
                "ypercent": 74.95574,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952748,
                "lastonl": 1540151511,
                "hidden": false
            },
            {
                "id": 1037,
                "name": "Unravel - 11",
                "macaddress": "f8:f0:05:f7:fd:19",
                "xpercent": 66.09138,
                "ypercent": 73.47791,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144175,
                "lastonl": 1540151571,
                "hidden": false
            },
            {
                "id": 1038,
                "name": "Unravel - 12",
                "macaddress": "f8:f0:05:f7:7e:12",
                "xpercent": 66.09138,
                "ypercent": 72.00008,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952889,
                "lastonl": 1540151481,
                "hidden": false
            },
            {
                "id": 1039,
                "name": "Decode - 1",
                "macaddress": "f8:f0:05:f7:fd:18",
                "xpercent": 72,
                "ypercent": 73.636734,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144258,
                "lastonl": 1540151574,
                "hidden": false
            },
            {
                "id": 1040,
                "name": "Decode - 2",
                "macaddress": "f8:f0:05:f7:fc:f4",
                "xpercent": 73.297295,
                "ypercent": 73.636734,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144173,
                "lastonl": 1540151580,
                "hidden": false
            },
            {
                "id": 1041,
                "name": "Decode - 3",
                "macaddress": "f8:f0:05:f7:46:8a",
                "xpercent": 74.5946,
                "ypercent": 73.636734,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143910,
                "lastonl": 1540151516,
                "hidden": false
            },
            {
                "id": 1042,
                "name": "Decode - 4",
                "macaddress": "f8:f0:05:f7:46:9c",
                "xpercent": 75.84219,
                "ypercent": 71.630615,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953601,
                "lastonl": 1540151565,
                "hidden": false
            },
            {
                "id": 1043,
                "name": "Decode - 5",
                "macaddress": "f8:f0:05:f7:7e:2c",
                "xpercent": 74.5946,
                "ypercent": 69.9467,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144183,
                "lastonl": 1540151496,
                "hidden": false
            },
            {
                "id": 1044,
                "name": "Decode - 6",
                "macaddress": "f8:f0:05:f7:46:8e",
                "xpercent": 73.297295,
                "ypercent": 69.9467,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953976,
                "lastonl": 1540151591,
                "hidden": false
            },
            {
                "id": 1045,
                "name": "Decode - 7",
                "macaddress": "f8:f0:05:f7:7e:14",
                "xpercent": 72,
                "ypercent": 69.8237,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144181,
                "lastonl": 1540151492,
                "hidden": false
            },
            {
                "id": 1047,
                "name": "Whatsup - 2.2",
                "macaddress": "f8:f0:05:f7:fd:7d",
                "xpercent": 24.324324,
                "ypercent": 76.99877,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952407,
                "lastonl": 1540151524,
                "hidden": false
            },
            {
                "id": 1048,
                "name": "Whatsup - 2.3",
                "macaddress": "f8:f0:05:f8:07:b8",
                "xpercent": 25.72973,
                "ypercent": 76.62977,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952427,
                "lastonl": 1540151547,
                "hidden": false
            },
            {
                "id": 1049,
                "name": "Xponential - 2",
                "macaddress": "f8:f0:05:f7:fd:7a",
                "xpercent": 3.2432432,
                "ypercent": 90.40591,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142878,
                "lastonl": 1540151559,
                "hidden": false
            },
            {
                "id": 1050,
                "name": "Xceler8 - 3",
                "macaddress": "f8:f0:05:f7:7e:37",
                "xpercent": 69.88336,
                "ypercent": 78.03456,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537202963,
                "lastonl": 1537202963,
                "hidden": false
            },
            {
                "id": 1051,
                "name": "Xceler8 - 2",
                "macaddress": "f8:f0:05:f7:fc:ed",
                "xpercent": 72.432434,
                "ypercent": 76.46577,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537202141,
                "lastonl": 1537202141,
                "hidden": false
            },
            {
                "id": 1052,
                "name": "FNB1",
                "macaddress": "f8:f0:05:f7:fc:ef",
                "xpercent": 81.36765,
                "ypercent": 31.113377,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142661,
                "lastonl": 1540151566,
                "hidden": false
            },
            {
                "id": 1053,
                "name": "FNB2",
                "macaddress": "f8:f0:05:f7:7e:33",
                "xpercent": 83.96787,
                "ypercent": 31.23653,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142725,
                "lastonl": 1540151543,
                "hidden": false
            },
            {
                "id": 1054,
                "name": "FNB3",
                "macaddress": "f8:f0:05:f7:fd:1d",
                "xpercent": 81.4054,
                "ypercent": 35.47441,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142689,
                "lastonl": 1540151513,
                "hidden": false
            },
            {
                "id": 1055,
                "name": "FNB4",
                "macaddress": "f8:f0:05:f7:fd:1e",
                "xpercent": 83.96595,
                "ypercent": 35.539352,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142709,
                "lastonl": 1540151573,
                "hidden": false
            },
            {
                "id": 1056,
                "name": "FNB5",
                "macaddress": "f8:f0:05:f7:fc:f5",
                "xpercent": 88.30157,
                "ypercent": 31.113377,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1536342860,
                "lastonl": 1536342860,
                "hidden": false
            },
            {
                "id": 1057,
                "name": "FNB6",
                "macaddress": "f8:f0:05:f7:7e:13",
                "xpercent": 91.010124,
                "ypercent": 31.113377,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1536354522,
                "lastonl": 1536354522,
                "hidden": false
            },
            {
                "id": 1058,
                "name": "FNB7",
                "macaddress": "f8:f0:05:f7:46:95",
                "xpercent": 88.30157,
                "ypercent": 35.546875,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1536359025,
                "lastonl": 1536359025,
                "hidden": false
            },
            {
                "id": 1059,
                "name": "FNB8",
                "macaddress": "f8:f0:05:f7:fd:17",
                "xpercent": 90.90178,
                "ypercent": 35.546875,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1536279343,
                "lastonl": 1536279343,
                "hidden": false
            },
            {
                "id": 1361,
                "name": "Think Room 32",
                "macaddress": "f8:f0:05:e4:06:b8",
                "xpercent": 17.081081,
                "ypercent": 71.21771,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539946001,
                "lastonl": 1540151569,
                "hidden": false
            },
            {
                "id": 1362,
                "name": "Analyse Room 33",
                "macaddress": "f8:f0:05:e3:ff:d7",
                "xpercent": 8.432432,
                "ypercent": 69.00369,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142833,
                "lastonl": 1540151495,
                "hidden": false
            },
            {
                "id": 1363,
                "name": "Align Room 34",
                "macaddress": "f8:f0:05:e3:ff:c0",
                "xpercent": 38.13905,
                "ypercent": 76.310425,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143151,
                "lastonl": 1540151501,
                "hidden": false
            },
            {
                "id": 1364,
                "name": "Impact Room 36",
                "macaddress": "f8:f0:05:e3:fd:95",
                "xpercent": 74.702705,
                "ypercent": 78.06478,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1535098769,
                "lastonl": 1535108450,
                "hidden": false
            },
            {
                "id": 1365,
                "name": "Impact Room 37",
                "macaddress": "f8:f0:05:e4:05:7e",
                "xpercent": 74.702705,
                "ypercent": 76.46577,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1535106026,
                "lastonl": 1535108445,
                "hidden": false
            },
            {
                "id": 1366,
                "name": "Impact Room 38",
                "macaddress": "f8:f0:05:e3:d7:c9",
                "xpercent": 76.97298,
                "ypercent": 78.06478,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1535106093,
                "lastonl": 1535108403,
                "hidden": false
            },
            {
                "id": 1367,
                "name": "Impact Room 39",
                "macaddress": "f8:f0:05:e2:60:c6",
                "xpercent": 77.08108,
                "ypercent": 76.46577,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1535098592,
                "lastonl": 1535108461,
                "hidden": false
            },
            {
                "id": 1368,
                "name": "Focus Room 50",
                "macaddress": "f8:f0:05:e2:4c:e9",
                "xpercent": 83.13513,
                "ypercent": 71.17671,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143394,
                "lastonl": 1540151529,
                "hidden": false
            },
            {
                "id": 1369,
                "name": "Reflect Room 51",
                "macaddress": "f8:f0:05:e3:fe:be",
                "xpercent": 91.567566,
                "ypercent": 69.208694,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539951090,
                "lastonl": 1540151590,
                "hidden": false
            },
            {
                "id": 1370,
                "name": "Step Up Room 74",
                "macaddress": "f8:f0:05:e3:fd:08",
                "xpercent": 88.082954,
                "ypercent": 44.753414,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539610382,
                "lastonl": 1540151591,
                "hidden": false
            },
            {
                "id": 1371,
                "name": "Design Room 75",
                "macaddress": "f8:f0:05:e4:05:0b",
                "xpercent": 88.51633,
                "ypercent": 40.689377,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142456,
                "lastonl": 1540151493,
                "hidden": false
            },
            {
                "id": 1372,
                "name": "Review Room 76",
                "macaddress": "f8:f0:05:e3:ff:8f",
                "xpercent": 85.72973,
                "ypercent": 41.533417,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537119721,
                "lastonl": 1537129388,
                "hidden": false
            },
            {
                "id": 1373,
                "name": "Review Room 77",
                "macaddress": "f8:f0:05:e2:5f:fb",
                "xpercent": 85.699425,
                "ypercent": 39.827305,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1537119744,
                "lastonl": 1537129383,
                "hidden": true
            },
            {
                "id": 1374,
                "name": "Open Plan 20",
                "macaddress": "f8:f0:05:e3:e6:d5",
                "xpercent": 10.076455,
                "ypercent": 60.270657,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142662,
                "lastonl": 1540151486,
                "hidden": false
            },
            {
                "id": 1375,
                "name": "Open Plan 21",
                "macaddress": "f8:f0:05:e3:fe:d0",
                "xpercent": 12.570253,
                "ypercent": 60.238995,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142622,
                "lastonl": 1540151499,
                "hidden": false
            },
            {
                "id": 1376,
                "name": "Open Plan 22",
                "macaddress": "f8:f0:05:e4:04:ec",
                "xpercent": 15.276889,
                "ypercent": 60.270657,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539957448,
                "lastonl": 1540151530,
                "hidden": false
            },
            {
                "id": 1377,
                "name": "Open Plan 23",
                "macaddress": "f8:f0:05:e3:cb:94",
                "xpercent": 17.768763,
                "ypercent": 60.270657,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952132,
                "lastonl": 1540151567,
                "hidden": false
            },
            {
                "id": 1378,
                "name": "Open Plan 24",
                "macaddress": "f8:f0:05:e4:05:77",
                "xpercent": 17.660421,
                "ypercent": 64.704155,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142552,
                "lastonl": 1540151576,
                "hidden": false
            },
            {
                "id": 1379,
                "name": "Open Plan 25",
                "macaddress": "f8:f0:05:e3:fd:9a",
                "xpercent": 15.0602045,
                "ypercent": 64.581,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142544,
                "lastonl": 1540151498,
                "hidden": false
            },
            {
                "id": 1380,
                "name": "Open Plan 26",
                "macaddress": "f8:f0:05:e3:fe:e4",
                "xpercent": 12.56833,
                "ypercent": 64.581,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142783,
                "lastonl": 1540151495,
                "hidden": false
            },
            {
                "id": 1381,
                "name": "Open Plan 27",
                "macaddress": "f8:f0:05:e3:d6:f9",
                "xpercent": 10.076455,
                "ypercent": 64.581,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142753,
                "lastonl": 1540151574,
                "hidden": false
            },
            {
                "id": 1382,
                "name": "Open Plan 12",
                "macaddress": "f8:f0:05:e2:60:05",
                "xpercent": 10.184798,
                "ypercent": 50.071373,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142355,
                "lastonl": 1540151515,
                "hidden": false
            },
            {
                "id": 1383,
                "name": "Open Plan 13",
                "macaddress": "f8:f0:05:e3:d5:e6",
                "xpercent": 12.648648,
                "ypercent": 50.0615,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142358,
                "lastonl": 1540151586,
                "hidden": false
            },
            {
                "id": 1384,
                "name": "Open Plan 14",
                "macaddress": "f8:f0:05:e3:fd:b9",
                "xpercent": 15.276889,
                "ypercent": 50.071373,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142142,
                "lastonl": 1540151496,
                "hidden": false
            },
            {
                "id": 1385,
                "name": "Open Plan 15",
                "macaddress": "f8:f0:05:e3:fd:9c",
                "xpercent": 17.72973,
                "ypercent": 50.0615,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142342,
                "lastonl": 1540151566,
                "hidden": false
            },
            {
                "id": 1386,
                "name": "Open Plan 16",
                "macaddress": "f8:f0:05:e3:d7:31",
                "xpercent": 17.72973,
                "ypercent": 54.489544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142224,
                "lastonl": 1540151474,
                "hidden": false
            },
            {
                "id": 1387,
                "name": "Open Plan 17",
                "macaddress": "f8:f0:05:e4:04:f0",
                "xpercent": 15.135135,
                "ypercent": 54.489544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142263,
                "lastonl": 1540151496,
                "hidden": false
            },
            {
                "id": 1388,
                "name": "Open Plan 18",
                "macaddress": "f8:f0:05:e3:fd:22",
                "xpercent": 12.540541,
                "ypercent": 54.489544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142463,
                "lastonl": 1540151555,
                "hidden": false
            },
            {
                "id": 1389,
                "name": "Open Plan 19",
                "macaddress": "f8:f0:05:e3:ff:d0",
                "xpercent": 10.054054,
                "ypercent": 54.489544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142452,
                "lastonl": 1540151500,
                "hidden": false
            },
            {
                "id": 1390,
                "name": "Open Plan 66",
                "macaddress": "f8:f0:05:e3:d7:a1",
                "xpercent": 82.37838,
                "ypercent": 50.0205,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142974,
                "lastonl": 1540151512,
                "hidden": false
            },
            {
                "id": 1391,
                "name": "Open Plan 67",
                "macaddress": "f8:f0:05:e3:fe:4b",
                "xpercent": 84.94295,
                "ypercent": 50.078896,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143072,
                "lastonl": 1540151579,
                "hidden": false
            },
            {
                "id": 1392,
                "name": "Open Plan 68",
                "macaddress": "f8:f0:05:e3:d6:7f",
                "xpercent": 87.45946,
                "ypercent": 50.0205,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143116,
                "lastonl": 1540151564,
                "hidden": false
            },
            {
                "id": 1393,
                "name": "Open Plan 69",
                "macaddress": "f8:f0:05:e3:fd:21",
                "xpercent": 89.945946,
                "ypercent": 50.062866,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143141,
                "lastonl": 1540151512,
                "hidden": false
            },
            {
                "id": 1394,
                "name": "Open Plan 70",
                "macaddress": "f8:f0:05:e3:da:58",
                "xpercent": 90.054054,
                "ypercent": 54.448544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143275,
                "lastonl": 1540151571,
                "hidden": false
            },
            {
                "id": 1395,
                "name": "Open Plan 71",
                "macaddress": "f8:f0:05:e3:fd:1c",
                "xpercent": 87.45946,
                "ypercent": 54.448544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539956889,
                "lastonl": 1540151560,
                "hidden": false
            },
            {
                "id": 1396,
                "name": "Open Plan 72",
                "macaddress": "f8:f0:05:e3:ca:78",
                "xpercent": 84.97298,
                "ypercent": 54.448544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143320,
                "lastonl": 1540151526,
                "hidden": false
            },
            {
                "id": 1397,
                "name": "Open Plan 52",
                "macaddress": "f8:f0:05:e3:cb:48",
                "xpercent": 82.37838,
                "ypercent": 60.352604,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143419,
                "lastonl": 1540151512,
                "hidden": false
            },
            {
                "id": 1398,
                "name": "Open Plan 53",
                "macaddress": "f8:f0:05:e3:fe:e7",
                "xpercent": 84.94295,
                "ypercent": 60.30057,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143343,
                "lastonl": 1540151595,
                "hidden": false
            },
            {
                "id": 1399,
                "name": "Open Plan 54",
                "macaddress": "f8:f0:05:e3:da:b3",
                "xpercent": 87.541245,
                "ypercent": 60.39381,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143303,
                "lastonl": 1540151561,
                "hidden": false
            },
            {
                "id": 1400,
                "name": "Open Plan 55",
                "macaddress": "f8:f0:05:e4:04:f1",
                "xpercent": 90.03504,
                "ypercent": 60.42372,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143233,
                "lastonl": 1540151556,
                "hidden": false
            },
            {
                "id": 1401,
                "name": "Open Plan 56",
                "macaddress": "f8:f0:05:e4:05:0e",
                "xpercent": 92.52692,
                "ypercent": 60.30057,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539947025,
                "lastonl": 1540151570,
                "hidden": false
            },
            {
                "id": 1402,
                "name": "Open Plan 57",
                "macaddress": "f8:f0:05:e4:04:f7",
                "xpercent": 92.52692,
                "ypercent": 64.610916,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953650,
                "lastonl": 1540151504,
                "hidden": false
            },
            {
                "id": 1403,
                "name": "Open Plan 58",
                "macaddress": "f8:f0:05:e3:fd:78",
                "xpercent": 90.03312,
                "ypercent": 64.581,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143550,
                "lastonl": 1540151578,
                "hidden": false
            },
            {
                "id": 1404,
                "name": "Open Plan 59",
                "macaddress": "f8:f0:05:e4:04:e4",
                "xpercent": 87.35135,
                "ypercent": 64.657646,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143581,
                "lastonl": 1540151580,
                "hidden": false
            },
            {
                "id": 1405,
                "name": "Open Plan 60",
                "macaddress": "f8:f0:05:e4:05:04",
                "xpercent": 84.94295,
                "ypercent": 64.610916,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143460,
                "lastonl": 1540151543,
                "hidden": false
            },
            {
                "id": 1406,
                "name": "Open Plan 42",
                "macaddress": "f8:f0:05:e2:4c:59",
                "xpercent": 86.16216,
                "ypercent": 75.48176,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539955064,
                "lastonl": 1540151540,
                "hidden": false
            },
            {
                "id": 1407,
                "name": "Open Plan 43",
                "macaddress": "f8:f0:05:e3:d5:e1",
                "xpercent": 88.75676,
                "ypercent": 75.48176,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539954538,
                "lastonl": 1540151507,
                "hidden": false
            },
            {
                "id": 1408,
                "name": "Open Plan 44",
                "macaddress": "f8:f0:05:e3:ff:6b",
                "xpercent": 91.13513,
                "ypercent": 75.48176,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143656,
                "lastonl": 1540151486,
                "hidden": false
            },
            {
                "id": 1409,
                "name": "Open Plan 45",
                "macaddress": "f8:f0:05:e2:60:48",
                "xpercent": 93.72973,
                "ypercent": 75.48176,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143685,
                "lastonl": 1540151476,
                "hidden": false
            },
            {
                "id": 1410,
                "name": "Open Plan 47",
                "macaddress": "f8:f0:05:e4:06:c6",
                "xpercent": 91.22681,
                "ypercent": 79.7587,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143889,
                "lastonl": 1540151493,
                "hidden": false
            },
            {
                "id": 1411,
                "name": "Open Plan 48",
                "macaddress": "f8:f0:05:e4:04:fa",
                "xpercent": 88.626595,
                "ypercent": 79.7587,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143846,
                "lastonl": 1540151558,
                "hidden": false
            },
            {
                "id": 1412,
                "name": "Open Plan 49",
                "macaddress": "f8:f0:05:e3:d7:c3",
                "xpercent": 86.24306,
                "ypercent": 79.7587,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143916,
                "lastonl": 1540151483,
                "hidden": false
            },
            {
                "id": 1413,
                "name": "Open Plan 40",
                "macaddress": "f8:f0:05:e3:fd:23",
                "xpercent": 91.13513,
                "ypercent": 92.20992,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144301,
                "lastonl": 1540151499,
                "hidden": false
            },
            {
                "id": 1414,
                "name": "Open Plan 41",
                "macaddress": "f8:f0:05:e3:d5:eb",
                "xpercent": 93.72973,
                "ypercent": 89.011894,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539938621,
                "lastonl": 1540151594,
                "hidden": false
            },
            {
                "id": 1415,
                "name": "Free Stand 62",
                "macaddress": "f8:f0:05:e2:4c:6e",
                "xpercent": 73.51351,
                "ypercent": 63.673637,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1418,
                "name": "Ponder Room 10",
                "macaddress": "f8:f0:05:e3:d6:fb",
                "xpercent": 15.385231,
                "ypercent": 41.69699,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1419,
                "name": "Free Stand 28",
                "macaddress": "f8:f0:05:e3:ff:cb",
                "xpercent": 25.0632,
                "ypercent": 63.587852,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540149187,
                "lastonl": 1540151493,
                "hidden": false
            },
            {
                "id": 1420,
                "name": "Free Stand 29",
                "macaddress": "f8:f0:05:e3:ff:d2",
                "xpercent": 26.471651,
                "ypercent": 63.587852,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142414,
                "lastonl": 1540151531,
                "hidden": false
            },
            {
                "id": 1421,
                "name": "Free Stand 30",
                "macaddress": "f8:f0:05:e3:fd:09",
                "xpercent": 25.0632,
                "ypercent": 66.54352,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142573,
                "lastonl": 1540151553,
                "hidden": false
            },
            {
                "id": 1422,
                "name": "Free Stand 31",
                "macaddress": "f8:f0:05:e3:fd:10",
                "xpercent": 26.471651,
                "ypercent": 66.54352,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142650,
                "lastonl": 1540151475,
                "hidden": false
            },
            {
                "id": 1423,
                "name": "Free Stand 64",
                "macaddress": "f8:f0:05:e3:da:ba",
                "xpercent": 73.51351,
                "ypercent": 66.62566,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1424,
                "name": "Free Stand 63",
                "macaddress": "f8:f0:05:e3:ff:7b",
                "xpercent": 75.02702,
                "ypercent": 63.673637,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1425,
                "name": "Free Stand 65",
                "macaddress": "f8:f0:05:e3:fd:26",
                "xpercent": 75.02702,
                "ypercent": 66.62566,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": false,
                "lastocc": 0,
                "lastonl": 0,
                "hidden": false
            },
            {
                "id": 1426,
                "name": "Align Room 35",
                "macaddress": "f8:f0:05:e3:e6:d9",
                "xpercent": 38.13905,
                "ypercent": 77.91141,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143201,
                "lastonl": 1540151585,
                "hidden": false
            },
            {
                "id": 1427,
                "name": "Open Plan 73",
                "macaddress": "f8:f0:05:e4:04:e9",
                "xpercent": 82.37838,
                "ypercent": 54.448544,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143306,
                "lastonl": 1540151511,
                "hidden": false
            },
            {
                "id": 1428,
                "name": "Open Plan 61",
                "macaddress": "f8:f0:05:e4:06:ab",
                "xpercent": 82.342735,
                "ypercent": 64.610916,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143431,
                "lastonl": 1540151525,
                "hidden": false
            },
            {
                "id": 1429,
                "name": "Open Plan 46",
                "macaddress": "f8:f0:05:e3:fe:e2",
                "xpercent": 93.82703,
                "ypercent": 79.7587,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539955939,
                "lastonl": 1540151543,
                "hidden": false
            },
            {
                "id": 1430,
                "name": "FNB70",
                "macaddress": "f8:f0:05:f7:fc:f1",
                "xpercent": 11.351352,
                "ypercent": 75.48176,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142748,
                "lastonl": 1540151571,
                "hidden": false
            },
            {
                "id": 1431,
                "name": "FNB74",
                "macaddress": "f8:f0:05:f7:7e:02",
                "xpercent": 11.351352,
                "ypercent": 79.909805,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142724,
                "lastonl": 1540151572,
                "hidden": false
            },
            {
                "id": 1432,
                "name": "Open Plan 2",
                "macaddress": "f8:f0:05:e4:06:98",
                "xpercent": 8.756757,
                "ypercent": 31.242311,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142383,
                "lastonl": 1540151574,
                "hidden": false
            },
            {
                "id": 1433,
                "name": "Open Plan 3",
                "macaddress": "f8:f0:05:e3:fe:37",
                "xpercent": 8.756757,
                "ypercent": 35.670357,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142337,
                "lastonl": 1540151514,
                "hidden": false
            },
            {
                "id": 1434,
                "name": "Open Plan 4",
                "macaddress": "f8:f0:05:e4:04:ff",
                "xpercent": 11.351352,
                "ypercent": 35.670357,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142266,
                "lastonl": 1540151483,
                "hidden": false
            },
            {
                "id": 1435,
                "name": "Open Plan 5",
                "macaddress": "f8:f0:05:e3:ca:40",
                "xpercent": 11.135135,
                "ypercent": 31.201311,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142290,
                "lastonl": 1540151493,
                "hidden": false
            },
            {
                "id": 1436,
                "name": "Open Plan 6",
                "macaddress": "f8:f0:05:e3:fe:3f",
                "xpercent": 16.216217,
                "ypercent": 31.242311,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539958397,
                "lastonl": 1540151483,
                "hidden": false
            },
            {
                "id": 1437,
                "name": "Open Plan 7",
                "macaddress": "f8:f0:05:e3:fd:b4",
                "xpercent": 16.145552,
                "ypercent": 35.4853,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142252,
                "lastonl": 1540151521,
                "hidden": false
            },
            {
                "id": 1438,
                "name": "Open Plan 9",
                "macaddress": "f8:f0:05:e3:fd:07",
                "xpercent": 18.852186,
                "ypercent": 31.22901,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142384,
                "lastonl": 1540151488,
                "hidden": false
            },
            {
                "id": 1439,
                "name": "Open Plan 8",
                "macaddress": "f8:f0:05:e3:ca:41",
                "xpercent": 18.852186,
                "ypercent": 35.539352,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142269,
                "lastonl": 1540151519,
                "hidden": false
            },
            {
                "id": 1440,
                "name": "Create Room 11",
                "macaddress": "f8:f0:05:e3:ff:b7",
                "xpercent": 12.676672,
                "ypercent": 42.189598,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142099,
                "lastonl": 1540151543,
                "hidden": false
            },
            {
                "id": 1441,
                "name": "Create Room 1",
                "macaddress": "f8:f0:05:e2:4c:63",
                "xpercent": 12.676672,
                "ypercent": 39.97285,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142296,
                "lastonl": 1540151507,
                "hidden": false
            },
            {
                "id": 2177,
                "name": "Open desk - 85",
                "macaddress": "f8:f0:05:e3:ff:79",
                "xpercent": 41.945946,
                "ypercent": 12.655003,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143742,
                "lastonl": 1540151591,
                "hidden": false
            },
            {
                "id": 2178,
                "name": "Open desk - 84",
                "macaddress": "f8:f0:05:e3:fe:d6",
                "xpercent": 41.945946,
                "ypercent": 9.82945,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539797778,
                "lastonl": 1540151491,
                "hidden": false
            },
            {
                "id": 2179,
                "name": "Open desk - 92",
                "macaddress": "f8:f0:05:e4:04:eb",
                "xpercent": 54.27027,
                "ypercent": 9.9523,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539953673,
                "lastonl": 1540151521,
                "hidden": false
            },
            {
                "id": 2180,
                "name": "Open desk - 93",
                "macaddress": "f8:f0:05:e3:fe:c4",
                "xpercent": 54.279522,
                "ypercent": 12.768473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142885,
                "lastonl": 1540151586,
                "hidden": false
            },
            {
                "id": 2181,
                "name": "Open desk - 86",
                "macaddress": "f8:f0:05:e4:04:f2",
                "xpercent": 45.612133,
                "ypercent": 9.812808,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539883751,
                "lastonl": 1540151568,
                "hidden": false
            },
            {
                "id": 2182,
                "name": "Open desk - 87",
                "macaddress": "f8:f0:05:e3:fe:00",
                "xpercent": 45.612133,
                "ypercent": 12.768473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539871431,
                "lastonl": 1540151568,
                "hidden": false
            },
            {
                "id": 2183,
                "name": "Open desk - 88",
                "macaddress": "f8:f0:05:e3:ff:d4",
                "xpercent": 48.10811,
                "ypercent": 9.840098,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143241,
                "lastonl": 1540151583,
                "hidden": false
            },
            {
                "id": 2184,
                "name": "Open desk - 89",
                "macaddress": "f8:f0:05:e3:ef:7d",
                "xpercent": 48.212353,
                "ypercent": 12.768473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539956732,
                "lastonl": 1540151594,
                "hidden": false
            },
            {
                "id": 2185,
                "name": "Open desk - 90",
                "macaddress": "f8:f0:05:e3:fd:0f",
                "xpercent": 52,
                "ypercent": 9.82945,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143412,
                "lastonl": 1540151549,
                "hidden": false
            },
            {
                "id": 2186,
                "name": "Open desk - 91",
                "macaddress": "f8:f0:05:e3:d5:db",
                "xpercent": 52,
                "ypercent": 12.777852,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143187,
                "lastonl": 1540151515,
                "hidden": false
            },
            {
                "id": 2187,
                "name": "Open desk - 94",
                "macaddress": "f8:f0:05:e3:fe:bf",
                "xpercent": 58.054054,
                "ypercent": 9.95086,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142549,
                "lastonl": 1540151490,
                "hidden": false
            },
            {
                "id": 2188,
                "name": "Open desk - 95",
                "macaddress": "f8:f0:05:e4:04:e3",
                "xpercent": 58.054054,
                "ypercent": 12.777852,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142594,
                "lastonl": 1540151592,
                "hidden": false
            },
            {
                "id": 2189,
                "name": "Open desk - 96",
                "macaddress": "f8:f0:05:e3:fd:b5",
                "xpercent": 60.432434,
                "ypercent": 9.9630995,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142481,
                "lastonl": 1540151546,
                "hidden": false
            },
            {
                "id": 2190,
                "name": "Open desk - 97",
                "macaddress": "f8:f0:05:e4:05:01",
                "xpercent": 60.455036,
                "ypercent": 12.768473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142392,
                "lastonl": 1540151512,
                "hidden": false
            },
            {
                "id": 2191,
                "name": "Open desk - 98",
                "macaddress": "f8:f0:05:e3:fd:0a",
                "xpercent": 64.14122,
                "ypercent": 9.931111,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539992942,
                "lastonl": 1540151479,
                "hidden": false
            },
            {
                "id": 2192,
                "name": "Open desk - 99",
                "macaddress": "f8:f0:05:e4:04:ed",
                "xpercent": 64.24956,
                "ypercent": 12.640471,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539957671,
                "lastonl": 1540151559,
                "hidden": false
            },
            {
                "id": 2193,
                "name": "Open desk - 100",
                "macaddress": "f8:f0:05:e4:05:02",
                "xpercent": 66.5946,
                "ypercent": 9.9630995,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143648,
                "lastonl": 1540151542,
                "hidden": false
            },
            {
                "id": 2194,
                "name": "Open desk - 101",
                "macaddress": "f8:f0:05:e4:05:7c",
                "xpercent": 66.5946,
                "ypercent": 12.6691265,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142532,
                "lastonl": 1540151489,
                "hidden": false
            },
            {
                "id": 2195,
                "name": "Open desk - 102",
                "macaddress": "f8:f0:05:e3:fd:75",
                "xpercent": 70.42507,
                "ypercent": 9.807959,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143728,
                "lastonl": 1540151526,
                "hidden": false
            },
            {
                "id": 2196,
                "name": "Open desk - 103",
                "macaddress": "f8:f0:05:e3:fd:a7",
                "xpercent": 70.42507,
                "ypercent": 12.886777,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143744,
                "lastonl": 1540151590,
                "hidden": false
            },
            {
                "id": 2197,
                "name": "Open desk - 104",
                "macaddress": "f8:f0:05:e3:e7:47",
                "xpercent": 72.700264,
                "ypercent": 9.931111,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539958734,
                "lastonl": 1540151598,
                "hidden": false
            },
            {
                "id": 2198,
                "name": "Open desk - 105",
                "macaddress": "f8:f0:05:e4:05:79",
                "xpercent": 72.75676,
                "ypercent": 12.792128,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142921,
                "lastonl": 1540151592,
                "hidden": false
            },
            {
                "id": 2199,
                "name": "Open desk - 106",
                "macaddress": "f8:f0:05:e3:ff:a7",
                "xpercent": 76.70639,
                "ypercent": 9.729064,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142805,
                "lastonl": 1540151529,
                "hidden": false
            },
            {
                "id": 2200,
                "name": "Open desk - 107",
                "macaddress": "f8:f0:05:e4:04:fe",
                "xpercent": 76.75676,
                "ypercent": 12.900702,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142926,
                "lastonl": 1540151528,
                "hidden": false
            },
            {
                "id": 2201,
                "name": "Open desk - 108",
                "macaddress": "f8:f0:05:e3:ff:b8",
                "xpercent": 84.21622,
                "ypercent": 6.8796067,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143314,
                "lastonl": 1540151600,
                "hidden": false
            },
            {
                "id": 2202,
                "name": "Open desk - 109",
                "macaddress": "f8:f0:05:e3:fd:a0",
                "xpercent": 84.184555,
                "ypercent": 10.054264,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143278,
                "lastonl": 1540151500,
                "hidden": false
            },
            {
                "id": 2203,
                "name": "Open desk - 110",
                "macaddress": "f8:f0:05:e3:ee:2d",
                "xpercent": 84.184555,
                "ypercent": 12.763624,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539954450,
                "lastonl": 1540151598,
                "hidden": false
            },
            {
                "id": 2204,
                "name": "Open desk - 111",
                "macaddress": "f8:f0:05:e3:fe:d2",
                "xpercent": 87.97654,
                "ypercent": 7.098599,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142885,
                "lastonl": 1540151518,
                "hidden": false
            },
            {
                "id": 2205,
                "name": "Open desk - 112",
                "macaddress": "f8:f0:05:e3:ee:7c",
                "xpercent": 87.97654,
                "ypercent": 10.177417,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539954394,
                "lastonl": 1540151511,
                "hidden": false
            },
            {
                "id": 2206,
                "name": "Open desk - 113",
                "macaddress": "f8:f0:05:e3:fd:0d",
                "xpercent": 87.974,
                "ypercent": 12.768473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142620,
                "lastonl": 1540151489,
                "hidden": false
            },
            {
                "id": 2207,
                "name": "Open desk - 114",
                "macaddress": "f8:f0:05:e3:e7:9b",
                "xpercent": 90.37838,
                "ypercent": 7.0110703,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539884101,
                "lastonl": 1540151516,
                "hidden": false
            },
            {
                "id": 2208,
                "name": "Open desk - 115",
                "macaddress": "f8:f0:05:e2:61:7c",
                "xpercent": 90.251724,
                "ypercent": 9.931111,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539954747,
                "lastonl": 1540151561,
                "hidden": false
            },
            {
                "id": 2209,
                "name": "Open desk - 116",
                "macaddress": "f8:f0:05:e3:f4:b2",
                "xpercent": 90.27027,
                "ypercent": 12.915129,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143248,
                "lastonl": 1540151578,
                "hidden": false
            },
            {
                "id": 2210,
                "name": "Open desk - 117",
                "macaddress": "f8:f0:05:e3:fd:2a",
                "xpercent": 94.16216,
                "ypercent": 7.002457,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539948813,
                "lastonl": 1540151477,
                "hidden": false
            },
            {
                "id": 2211,
                "name": "Open desk - 118",
                "macaddress": "f8:f0:05:e3:ff:c7",
                "xpercent": 94.152054,
                "ypercent": 10.054264,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539954373,
                "lastonl": 1540151517,
                "hidden": false
            },
            {
                "id": 2212,
                "name": "Open desk - 119",
                "macaddress": "f8:f0:05:e3:fe:d3",
                "xpercent": 94.14951,
                "ypercent": 12.768473,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539954398,
                "lastonl": 1540151476,
                "hidden": false
            },
            {
                "id": 2213,
                "name": "Open desk - 120",
                "macaddress": "f8:f0:05:e4:04:f9",
                "xpercent": 78.442406,
                "ypercent": 20.768549,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144049,
                "lastonl": 1540151600,
                "hidden": false
            },
            {
                "id": 2214,
                "name": "Open desk - 121",
                "macaddress": "f8:f0:05:e3:ff:69",
                "xpercent": 78.442406,
                "ypercent": 23.601063,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539957497,
                "lastonl": 1540151489,
                "hidden": false
            },
            {
                "id": 2215,
                "name": "Open desk - 122",
                "macaddress": "f8:f0:05:e3:fd:12",
                "xpercent": 78.43987,
                "ypercent": 26.561577,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539884332,
                "lastonl": 1540151575,
                "hidden": false
            },
            {
                "id": 2216,
                "name": "Open desk - 123",
                "macaddress": "f8:f0:05:e3:fe:e3",
                "xpercent": 82.342735,
                "ypercent": 20.768549,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144080,
                "lastonl": 1540151543,
                "hidden": false
            },
            {
                "id": 2217,
                "name": "Open desk - 124",
                "macaddress": "f8:f0:05:e3:d5:e0",
                "xpercent": 82.342735,
                "ypercent": 23.47791,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540144096,
                "lastonl": 1540151495,
                "hidden": false
            },
            {
                "id": 2218,
                "name": "Open desk - 125",
                "macaddress": "f8:f0:05:e3:d7:bf",
                "xpercent": 82.342735,
                "ypercent": 26.433575,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143910,
                "lastonl": 1540151482,
                "hidden": false
            },
            {
                "id": 2219,
                "name": "Open desk - 126",
                "macaddress": "f8:f0:05:e3:ca:84",
                "xpercent": 84.61793,
                "ypercent": 20.768549,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143909,
                "lastonl": 1540151556,
                "hidden": false
            },
            {
                "id": 2220,
                "name": "Open desk - 127",
                "macaddress": "f8:f0:05:e3:ff:d3",
                "xpercent": 84.61793,
                "ypercent": 23.601063,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143929,
                "lastonl": 1540151572,
                "hidden": false
            },
            {
                "id": 2221,
                "name": "Open desk - 128",
                "macaddress": "f8:f0:05:e3:fe:c3",
                "xpercent": 84.61539,
                "ypercent": 26.561577,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143889,
                "lastonl": 1540151519,
                "hidden": false
            },
            {
                "id": 2222,
                "name": "Open desk - 129",
                "macaddress": "f8:f0:05:e3:fd:11",
                "xpercent": 88.409904,
                "ypercent": 20.768549,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143540,
                "lastonl": 1540151584,
                "hidden": false
            },
            {
                "id": 2223,
                "name": "Open desk - 130",
                "macaddress": "f8:f0:05:e3:f4:bc",
                "xpercent": 88.409904,
                "ypercent": 23.601063,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539952385,
                "lastonl": 1540151549,
                "hidden": false
            },
            {
                "id": 2224,
                "name": "Open desk - 131",
                "macaddress": "f8:f0:05:e3:ff:ac",
                "xpercent": 88.409904,
                "ypercent": 26.67988,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143464,
                "lastonl": 1540151573,
                "hidden": false
            },
            {
                "id": 2225,
                "name": "Open desk - 132",
                "macaddress": "f8:f0:05:e4:04:e6",
                "xpercent": 90.6851,
                "ypercent": 20.768549,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1536234642,
                "lastonl": 1536240657,
                "hidden": false
            },
            {
                "id": 2226,
                "name": "Open desk - 133",
                "macaddress": "f8:f0:05:e4:04:fc",
                "xpercent": 90.79344,
                "ypercent": 23.601063,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143639,
                "lastonl": 1540151552,
                "hidden": false
            },
            {
                "id": 2227,
                "name": "Open desk - 134",
                "macaddress": "f8:f0:05:e3:fe:3a",
                "xpercent": 90.79344,
                "ypercent": 26.556726,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143702,
                "lastonl": 1540151534,
                "hidden": false
            },
            {
                "id": 2228,
                "name": "Open desk - 135",
                "macaddress": "f8:f0:05:e3:fd:31",
                "xpercent": 94.69376,
                "ypercent": 20.768549,
                "inuse": false,
                "standby": false,
                "faulty": true,
                "registered": true,
                "lastocc": 1536240538,
                "lastonl": 1536240538,
                "hidden": false
            },
            {
                "id": 2229,
                "name": "Open desk - 136",
                "macaddress": "f8:f0:05:e4:04:e8",
                "xpercent": 94.58542,
                "ypercent": 23.47791,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143771,
                "lastonl": 1540151523,
                "hidden": false
            },
            {
                "id": 2230,
                "name": "Open desk - 137",
                "macaddress": "f8:f0:05:e3:d7:d1",
                "xpercent": 94.69376,
                "ypercent": 26.67988,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539756810,
                "lastonl": 1540151523,
                "hidden": false
            },
            {
                "id": 2231,
                "name": "Open desk - 138",
                "macaddress": "f8:f0:05:e3:fe:27",
                "xpercent": 40.972973,
                "ypercent": 19.411758,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143653,
                "lastonl": 1540151533,
                "hidden": false
            },
            {
                "id": 2232,
                "name": "Open desk - 139",
                "macaddress": "f8:f0:05:e3:fd:b3",
                "xpercent": 40.95595,
                "ypercent": 22.61584,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143602,
                "lastonl": 1540151522,
                "hidden": false
            },
            {
                "id": 2233,
                "name": "Open desk - 140",
                "macaddress": "f8:f0:05:e3:ff:db",
                "xpercent": 40.95595,
                "ypercent": 25.448353,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143566,
                "lastonl": 1540151515,
                "hidden": false
            },
            {
                "id": 2234,
                "name": "Open desk - 141",
                "macaddress": "f8:f0:05:e3:ff:b0",
                "xpercent": 44.853737,
                "ypercent": 19.581282,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143451,
                "lastonl": 1540151562,
                "hidden": false
            },
            {
                "id": 2235,
                "name": "Open desk - 142",
                "macaddress": "f8:f0:05:e4:05:06",
                "xpercent": 44.856277,
                "ypercent": 22.61584,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143459,
                "lastonl": 1540151595,
                "hidden": false
            },
            {
                "id": 2236,
                "name": "Open desk - 143",
                "macaddress": "f8:f0:05:e4:06:a8",
                "xpercent": 44.856277,
                "ypercent": 25.448353,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143395,
                "lastonl": 1540151488,
                "hidden": false
            },
            {
                "id": 2237,
                "name": "Open desk - 144",
                "macaddress": "f8:f0:05:e4:04:f6",
                "xpercent": 47.67064,
                "ypercent": 19.541872,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143293,
                "lastonl": 1540151577,
                "hidden": false
            },
            {
                "id": 2238,
                "name": "Open desk - 145",
                "macaddress": "f8:f0:05:e4:04:ea",
                "xpercent": 47.67064,
                "ypercent": 22.743843,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539948687,
                "lastonl": 1540151598,
                "hidden": false
            },
            {
                "id": 2239,
                "name": "Open desk - 146",
                "macaddress": "f8:f0:05:e2:60:3f",
                "xpercent": 47.67064,
                "ypercent": 25.33005,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143342,
                "lastonl": 1540151504,
                "hidden": false
            },
            {
                "id": 2240,
                "name": "Open desk - 147",
                "macaddress": "f8:f0:05:e3:ff:c2",
                "xpercent": 51.35428,
                "ypercent": 19.665024,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143068,
                "lastonl": 1540151575,
                "hidden": false
            },
            {
                "id": 2241,
                "name": "Open desk - 148",
                "macaddress": "f8:f0:05:e3:fe:ce",
                "xpercent": 51.45946,
                "ypercent": 22.483011,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143090,
                "lastonl": 1540151506,
                "hidden": false
            },
            {
                "id": 2242,
                "name": "Open desk - 149",
                "macaddress": "f8:f0:05:e3:fd:1f",
                "xpercent": 51.567566,
                "ypercent": 25.431416,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540143385,
                "lastonl": 1540151543,
                "hidden": false
            },
            {
                "id": 2243,
                "name": "Open desk - 150",
                "macaddress": "f8:f0:05:e4:05:0d",
                "xpercent": 55.690514,
                "ypercent": 19.660175,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539940791,
                "lastonl": 1540151530,
                "hidden": false
            },
            {
                "id": 2244,
                "name": "Open desk - 151",
                "macaddress": "f8:f0:05:e3:cb:2c",
                "xpercent": 55.675674,
                "ypercent": 22.604424,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142846,
                "lastonl": 1540151539,
                "hidden": false
            },
            {
                "id": 2245,
                "name": "Open desk - 152",
                "macaddress": "f8:f0:05:e3:d7:22",
                "xpercent": 55.675674,
                "ypercent": 25.308565,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142905,
                "lastonl": 1540151600,
                "hidden": false
            },
            {
                "id": 2246,
                "name": "Open desk - 153",
                "macaddress": "f8:f0:05:e3:fd:29",
                "xpercent": 59.567566,
                "ypercent": 19.534609,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142659,
                "lastonl": 1540151542,
                "hidden": false
            },
            {
                "id": 2247,
                "name": "Open desk - 154",
                "macaddress": "f8:f0:05:e3:fd:27",
                "xpercent": 59.567566,
                "ypercent": 22.483011,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142636,
                "lastonl": 1540151484,
                "hidden": false
            },
            {
                "id": 2248,
                "name": "Open desk - 155",
                "macaddress": "f8:f0:05:e3:ff:c1",
                "xpercent": 59.567566,
                "ypercent": 25.308565,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142660,
                "lastonl": 1540151548,
                "hidden": false
            },
            {
                "id": 2249,
                "name": "Open desk - 156",
                "macaddress": "f8:f0:05:e2:4c:6d",
                "xpercent": 62.37838,
                "ypercent": 19.411758,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142814,
                "lastonl": 1540151580,
                "hidden": false
            },
            {
                "id": 2250,
                "name": "Open desk - 157",
                "macaddress": "f8:f0:05:e3:cb:be",
                "xpercent": 62.37838,
                "ypercent": 22.360163,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142740,
                "lastonl": 1540151497,
                "hidden": false
            },
            {
                "id": 2251,
                "name": "Open desk - 158",
                "macaddress": "f8:f0:05:e3:d7:b0",
                "xpercent": 62.37838,
                "ypercent": 25.308565,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142686,
                "lastonl": 1540151565,
                "hidden": false
            },
            {
                "id": 2252,
                "name": "Open desk - 159",
                "macaddress": "f8:f0:05:e3:fe:3e",
                "xpercent": 66.27027,
                "ypercent": 19.411758,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539956075,
                "lastonl": 1540151575,
                "hidden": false
            },
            {
                "id": 2253,
                "name": "Open desk - 160",
                "macaddress": "f8:f0:05:e3:ff:b3",
                "xpercent": 66.27027,
                "ypercent": 22.483011,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1539955523,
                "lastonl": 1540151497,
                "hidden": false
            },
            {
                "id": 2254,
                "name": "Open desk - 161",
                "macaddress": "f8:f0:05:e4:05:7b",
                "xpercent": 66.16216,
                "ypercent": 25.584255,
                "inuse": false,
                "standby": false,
                "faulty": false,
                "registered": true,
                "lastocc": 1540142303,
                "lastonl": 1540151576,
                "hidden": false
            }
        ],
        stats: state.dataReducer.stats,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
