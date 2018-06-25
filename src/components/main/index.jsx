import React from 'react';
import MainComponent from './maincomponent';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkData: {
                key: "1575b6f4-5680-4b47-92f7-6a41ac3aeff7",
                name: "New Live Feed",
                owner: "fnb",
                logo: "https://www.launchaco.com/static/twitter.png",
                color: "#DF8461",
                duration: 10,
                details: null,
                subscribers: null,
                locations: [
                    10010,
                    10020,
                    10030,
                    478,
                    185,
                    478,
                    185,
                    185,
                ],
                treeMap: {
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
                                                "macaddress": "f8:f0:05:f7:fc:ec",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 23.079462,
                                            "ypercent": 88.25623,
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
                                                "macaddress": "f8:f0:05:f7:fc:f8",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 25.67968,
                                            "ypercent": 88.25623,
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
                                                "macaddress": "f8:f0:05:f7:7e:26",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 28.386122,
                                            "ypercent": 88.28702,
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
                                                "macaddress": "f8:f0:05:f8:07:a1",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 20.587587,
                                            "ypercent": 92.689735,
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
                                                "macaddress": "f8:f0:05:f7:46:a5",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 23.185265,
                                            "ypercent": 92.69294,
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
                                                "macaddress": "f8:f0:05:f7:46:a7",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 25.677755,
                                            "ypercent": 92.64862,
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
                                                "macaddress": "f8:f0:05:f7:46:7f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 8.9930315,
                                            "ypercent": 75.28409,
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
                                                "macaddress": "f8:f0:05:f7:46:a3",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 6.1761303,
                                            "ypercent": 79.47128,
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
                                                "macaddress": "f8:f0:05:f7:7e:25",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 8.776347,
                                            "ypercent": 79.47128,
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
                                                "macaddress": "f8:f0:05:f7:46:ab",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 13.976781,
                                            "ypercent": 79.47128,
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
                                                "macaddress": "f8:f0:05:e3:d5:e6",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 12.570253,
                                            "ypercent": 50.140472,
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
                                                "macaddress": "f8:f0:05:e3:fd:9c",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 17.768763,
                                            "ypercent": 50.194527,
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
                                                "macaddress": "f8:f0:05:e3:d7:31",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 17.660421,
                                            "ypercent": 54.258564,
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
                                                "macaddress": "f8:f0:05:e4:04:f0",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 15.168547,
                                            "ypercent": 54.258564,
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
                                                "macaddress": "f8:f0:05:e3:fd:22",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 12.570253,
                                            "ypercent": 54.327663,
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
                                                "macaddress": "f8:f0:05:e3:ff:d0",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 10.078379,
                                            "ypercent": 54.327663,
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
                                                "macaddress": "f8:f0:05:e3:d7:a1",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 82.342735,
                                            "ypercent": 50.078896,
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
                                                "macaddress": "f8:f0:05:e3:d6:7f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 87.326485,
                                            "ypercent": 50.078896,
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
                                                "macaddress": "f8:f0:05:e3:fd:21",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 90.0325,
                                            "ypercent": 50.221676,
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
                                                "macaddress": "f8:f0:05:e3:da:58",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 89.9267,
                                            "ypercent": 54.38924,
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
                                                "macaddress": "f8:f0:05:e3:fd:1c",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 87.326485,
                                            "ypercent": 54.38924,
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
                                                "macaddress": "f8:f0:05:e3:ca:78",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 84.941025,
                                            "ypercent": 54.23617,
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
                                                "macaddress": "f8:f0:05:e3:cb:48",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 82.34081,
                                            "ypercent": 60.270657,
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
                                                "macaddress": "f8:f0:05:e4:04:e4",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 87.326485,
                                            "ypercent": 64.610916,
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
                                                "macaddress": "f8:f0:05:e2:4c:59",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 86.24306,
                                            "ypercent": 75.3252,
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
                                                "macaddress": "f8:f0:05:e3:d5:e1",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 88.626595,
                                            "ypercent": 75.3252,
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
                                                "macaddress": "f8:f0:05:e3:ff:6b",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 91.22681,
                                            "ypercent": 75.3252,
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
                                                "macaddress": "f8:f0:05:e2:60:48",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 93.82703,
                                            "ypercent": 75.3252,
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
                                                "macaddress": "f8:f0:05:e3:fd:23",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 90.89986,
                                            "ypercent": 91.79775,
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
                                                "macaddress": "f8:f0:05:e3:d5:eb",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 93.71657,
                                            "ypercent": 88.65602,
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
                                                "macaddress": "f8:f0:05:e4:04:e9",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 82.342735,
                                            "ypercent": 54.38924,
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
                                                "macaddress": "f8:f0:05:f7:fc:f1",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 11.268222,
                                            "ypercent": 75.28409,
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
                                                "macaddress": "f8:f0:05:f7:7e:02",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 11.484906,
                                            "ypercent": 79.71759,
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
                                                "macaddress": "f8:f0:05:e4:06:98",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 8.559663,
                                            "ypercent": 31.105856,
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
                                                "macaddress": "f8:f0:05:e3:fe:37",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 8.559663,
                                            "ypercent": 35.662506,
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
                                                "macaddress": "f8:f0:05:e4:04:ff",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 11.484906,
                                            "ypercent": 35.539352,
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
                                                "macaddress": "f8:f0:05:e3:ca:40",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 11.484714,
                                            "ypercent": 31.214445,
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
                                                "macaddress": "f8:f0:05:e3:fe:3f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 16.143627,
                                            "ypercent": 31.22901,
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
                                                "macaddress": "f8:f0:05:f7:fc:f2",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 47.12893,
                                            "ypercent": 69.78654,
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
                                                "macaddress": "f8:f0:05:f7:7e:23",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 50.92091,
                                            "ypercent": 69.86864,
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
                                                "macaddress": "f8:f0:05:f8:07:9e",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 50.81257,
                                            "ypercent": 71.38916,
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
                                                "macaddress": "f8:f0:05:f7:7e:2d",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 69.77502,
                                            "ypercent": 76.310425,
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
                                                "macaddress": "f8:f0:05:f7:fc:ed",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 72.48358,
                                            "ypercent": 76.310425,
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
                                                "macaddress": "f8:f0:05:f8:07:a3",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 3.1425443,
                                            "ypercent": 94.619064,
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
                                                "macaddress": "f8:f0:05:f7:fd:7a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 3.5759137,
                                            "ypercent": 89.93926,
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
                                                "macaddress": "f8:f0:05:f7:46:85",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 36.40365,
                                            "ypercent": 69.630264,
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
                                                "macaddress": "f8:f0:05:f7:46:84",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 37.595417,
                                            "ypercent": 71.3544,
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
                                                "macaddress": "f8:f0:05:f7:46:a4",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 36.403034,
                                            "ypercent": 73.11166,
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
                                                "macaddress": "f8:f0:05:f7:7e:2a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 35.102924,
                                            "ypercent": 73.11166,
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
                                                "macaddress": "f8:f0:05:f7:7e:30",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 33.80282,
                                            "ypercent": 73.11166,
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
                                                "macaddress": "f8:f0:05:f7:7e:08",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 22.2108,
                                            "ypercent": 33.076298,
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
                                                "macaddress": "f8:f0:05:f7:46:a0",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 24.91936,
                                            "ypercent": 31.598467,
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
                                                "macaddress": "f8:f0:05:f7:46:79",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 24.269304,
                                            "ypercent": 72.57473,
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
                                                "macaddress": "f8:f0:05:f7:46:94",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 25.461071,
                                            "ypercent": 73.313644,
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
                                                "macaddress": "f8:f0:05:f8:07:9f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 26.761179,
                                            "ypercent": 73.313644,
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
                                                "macaddress": "f8:f0:05:f7:7e:36",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 27.952946,
                                            "ypercent": 72.57473,
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
                                                "macaddress": "f8:f0:05:f7:46:92",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 23.510908,
                                            "ypercent": 75.7767,
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
                                                "macaddress": "f8:f0:05:f7:46:9b",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 27.411234,
                                            "ypercent": 76.63877,
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
                                                "macaddress": "f8:f0:05:f7:46:7a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 28.819685,
                                            "ypercent": 76.761925,
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
                                                "macaddress": "f8:f0:05:f7:fd:7d",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 24.269304,
                                            "ypercent": 76.88508,
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
                                                "macaddress": "f8:f0:05:f8:07:b8",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 25.677755,
                                            "ypercent": 76.39246,
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
                                                "macaddress": "f8:f0:05:f7:46:8d",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 31.63851,
                                            "ypercent": 65.78087,
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
                                                "macaddress": "f8:f0:05:f7:46:9a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 31.530167,
                                            "ypercent": 64.30303,
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
                                                "macaddress": "f8:f0:05:f7:46:91",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 34.88878,
                                            "ypercent": 62.8252,
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
                                                "macaddress": "f8:f0:05:f7:46:7e",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 34.886242,
                                            "ypercent": 64.32677,
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
                                                "macaddress": "f8:f0:05:f7:46:a2",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 34.780437,
                                            "ypercent": 65.657715,
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
                                                "macaddress": "f8:f0:05:f7:fc:f7",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 63.491165,
                                            "ypercent": 77.78825,
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
                                                "macaddress": "f8:f0:05:f7:fd:1a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 64.791275,
                                            "ypercent": 77.6651,
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
                                                "macaddress": "f8:f0:05:f7:fd:18",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 71.941864,
                                            "ypercent": 73.35476,
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
                                                "macaddress": "f8:f0:05:f7:fc:f4",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 73.35032,
                                            "ypercent": 73.231606,
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
                                                "macaddress": "f8:f0:05:f7:46:8a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 74.75684,
                                            "ypercent": 73.313644,
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
                                                "macaddress": "f8:f0:05:f7:7e:2c",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 74.648506,
                                            "ypercent": 69.74222,
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
                                                "macaddress": "f8:f0:05:f7:46:8e",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 73.3484,
                                            "ypercent": 69.74222,
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
                                                "macaddress": "f8:f0:05:f7:7e:14",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 71.941864,
                                            "ypercent": 69.783325,
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
                                                "macaddress": "f8:f0:05:f7:fd:1d",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 81.36765,
                                            "ypercent": 35.546875,
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
                                                "macaddress": "f8:f0:05:e4:06:b8",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 16.902023,
                                            "ypercent": 70.861786,
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
                                                "macaddress": "f8:f0:05:e2:4c:6e",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 73.567,
                                            "ypercent": 63.50254,
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
                                                "macaddress": "f8:f0:05:e3:da:ba",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 73.56446,
                                            "ypercent": 66.502464,
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
                                                "macaddress": "f8:f0:05:e3:ff:7b",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 75.08125,
                                            "ypercent": 63.5468,
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
                                                "macaddress": "f8:f0:05:e3:fd:26",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 75.08125,
                                            "ypercent": 66.502464,
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
                                                "macaddress": "f8:f0:05:e3:fd:95",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 74.86711,
                                            "ypercent": 78.157715,
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
                                                "macaddress": "f8:f0:05:e4:05:7e",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 74.86711,
                                            "ypercent": 76.18727,
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
                                                "macaddress": "f8:f0:05:e3:d7:c9",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 77.1423,
                                            "ypercent": 78.03456,
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
                                                "macaddress": "f8:f0:05:e2:60:c6",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 77.1423,
                                            "ypercent": 76.310425,
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
                                                "macaddress": "f8:f0:05:e2:4c:e9",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 82.99279,
                                            "ypercent": 70.8917,
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
                                                "macaddress": "f8:f0:05:e3:fe:be",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 91.33515,
                                            "ypercent": 69.04441,
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
                                                "macaddress": "f8:f0:05:e3:ff:8f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 85.80777,
                                            "ypercent": 41.551445,
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
                                                "macaddress": "f8:f0:05:e3:ff:d7",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 8.342978,
                                            "ypercent": 69.014496,
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
                                                "macaddress": "f8:f0:05:e3:ff:79",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 41.820152,
                                            "ypercent": 13.054187,
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
                                                "macaddress": "f8:f0:05:e3:fe:d6",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 41.929623,
                                            "ypercent": 9.763699,
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
                                                "macaddress": "f8:f0:05:e4:04:eb",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 54.282063,
                                            "ypercent": 10.177417,
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
                                                "macaddress": "f8:f0:05:e3:ff:d4",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 48.212353,
                                            "ypercent": 10.0591135,
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
                                                "macaddress": "f8:f0:05:e3:fd:0f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 51.89853,
                                            "ypercent": 9.931111,
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
                                                "macaddress": "f8:f0:05:e3:d5:db",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 51.787647,
                                            "ypercent": 12.768473,
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
                                                "macaddress": "f8:f0:05:e3:fe:bf",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 58.18239,
                                            "ypercent": 9.931111,
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
                                                "macaddress": "f8:f0:05:e4:04:e3",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 58.18239,
                                            "ypercent": 12.886777,
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
                                                "macaddress": "f8:f0:05:e3:fd:b5",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 60.346695,
                                            "ypercent": 9.935961,
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
                                                "macaddress": "f8:f0:05:e4:05:02",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 66.52475,
                                            "ypercent": 9.807959,
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
                                                "macaddress": "f8:f0:05:e4:05:7c",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 66.52475,
                                            "ypercent": 12.640471,
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
                                                "macaddress": "f8:f0:05:e4:05:79",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 72.59192,
                                            "ypercent": 12.763624,
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
                                                "macaddress": "f8:f0:05:e4:04:fe",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 76.600586,
                                            "ypercent": 12.886777,
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
                                                "macaddress": "f8:f0:05:e3:ff:b8",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 84.07621,
                                            "ypercent": 7.2217517,
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
                                                "macaddress": "f8:f0:05:e3:e7:9b",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 90.251724,
                                            "ypercent": 7.2217517,
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
                                                "macaddress": "f8:f0:05:e3:f4:b2",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 90.251724,
                                            "ypercent": 12.763624,
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
                                                "macaddress": "f8:f0:05:e3:fd:2a",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 94.152054,
                                            "ypercent": 6.975446,
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
                                                "macaddress": "f8:f0:05:e3:fe:27",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 40.84761,
                                            "ypercent": 19.660175,
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
                                                "macaddress": "f8:f0:05:e3:fe:ce",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 51.245937,
                                            "ypercent": 22.374384,
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
                                                "macaddress": "f8:f0:05:e3:fd:1f",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 51.35428,
                                            "ypercent": 25.453201,
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
                                            "xpercent": 55.57963,
                                            "ypercent": 22.62069,
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
                                                "macaddress": "f8:f0:05:e3:d7:22",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 55.57963,
                                            "ypercent": 25.453201,
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
                                                "macaddress": "f8:f0:05:e3:fd:29",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 59.482494,
                                            "ypercent": 19.660175,
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
                                                "macaddress": "f8:f0:05:e3:fd:27",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 59.479958,
                                            "ypercent": 22.62069,
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
                                                "macaddress": "f8:f0:05:e3:ff:c1",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 59.479958,
                                            "ypercent": 25.33005,
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
                                                "macaddress": "f8:f0:05:e2:4c:6d",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 62.191055,
                                            "ypercent": 19.660175,
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
                                                "macaddress": "f8:f0:05:e3:cb:be",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 62.191055,
                                            "ypercent": 22.61584,
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
                                                "macaddress": "f8:f0:05:e3:d7:b0",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 62.191055,
                                            "ypercent": 25.448353,
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
                                                "macaddress": "f8:f0:05:e3:fe:3e",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 66.09138,
                                            "ypercent": 19.660175,
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
                                                "macaddress": "f8:f0:05:e3:ff:b3",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 66.09138,
                                            "ypercent": 22.61584,
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
                                                "macaddress": "f8:f0:05:e4:05:7b",
                                                "redisid": 0
                                            },
                                            "location": "Africa/Johannesburg",
                                            "xpercent": 66.09138,
                                            "ypercent": 25.571505,
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
                    "10010": {
                        "id": 10010,
                        "info": {
                            "name": "Test Chart 1",
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
                                "id": 10010,
                                "info": {
                                    "name": "SS - 1",
                                    "details": {
                                        "macaddress": "f8:f0:05:f7:7e:2d",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 69.77502,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            },
                            {
                                "id": 10011,
                                "info": {
                                    "name": "SS - 4",
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
                                "id": 10012,
                                "info": {
                                    "name": "SS - 3",
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
                                "id": 10013,
                                "info": {
                                    "name": "SS - 2",
                                    "details": {
                                        "macaddress": "f8:f0:05:f7:fc:ed",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 72.48358,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            }
                        ]
                    },
                    "10020": {
                        "id": 10020,
                        "info": {
                            "name": "Test Chart 1",
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
                                "id": 10020,
                                "info": {
                                    "name": "SS - 1",
                                    "details": {
                                        "macaddress": "f8:f0:05:f7:7e:2d",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 69.77502,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            },
                            {
                                "id": 10021,
                                "info": {
                                    "name": "SS - 4",
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
                                "id": 10022,
                                "info": {
                                    "name": "SS - 3",
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
                                "id": 10023,
                                "info": {
                                    "name": "SS - 2",
                                    "details": {
                                        "macaddress": "f8:f0:05:f7:fc:ed",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 72.48358,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            }
                        ]
                    },
                    "10030": {
                        "id": 10030,
                        "info": {
                            "name": "Test Chart 1",
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
                                "id": 10030,
                                "info": {
                                    "name": "SS - 1",
                                    "details": {
                                        "macaddress": "f8:f0:05:f7:7e:2d",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 69.77502,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            },
                            {
                                "id": 10031,
                                "info": {
                                    "name": "SS - 4",
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
                                "id": 10032,
                                "info": {
                                    "name": "SS - 3",
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
                                "id": 10033,
                                "info": {
                                    "name": "SS - 2",
                                    "details": {
                                        "macaddress": "f8:f0:05:f7:fc:ed",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 72.48358,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            }
                        ]
                    },
                    "478": {
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
                                        "macaddress": "f8:f0:05:f7:7e:2d",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 69.77502,
                                    "ypercent": 76.310425,
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
                                        "macaddress": "f8:f0:05:f7:fc:ed",
                                        "redisid": 0
                                    },
                                    "location": "Africa/Johannesburg",
                                    "xpercent": 72.48358,
                                    "ypercent": 76.310425,
                                    "hasfloorplan": false,
                                    "useownfp": false,
                                    "cardid": 30
                                },
                                "type": "sensor",
                                "children": []
                            }
                        ]
                    },
                },
                sensorsData: [
                    {
                        "id": 10010,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10011,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10012,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10013,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10020,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10021,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10022,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10023,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10030,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10031,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10032,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10033,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10040,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10041,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10042,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 10043,
                        "name": "FNB57",
                        "macaddress": "f8:f0:05:f7:7e:29",
                        "xpercent": 20.479246,
                        "ypercent": 88.37939,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
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
                        "lastocc": 1529071628,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 966,
                        "name": "FNB58",
                        "macaddress": "f8:f0:05:f7:fc:ec",
                        "xpercent": 23.079462,
                        "ypercent": 88.25623,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071616,
                        "lastonl": 1529090025,
                        "hidden": false
                    },
                    {
                        "id": 967,
                        "name": "FNB59",
                        "macaddress": "f8:f0:05:f7:fc:f8",
                        "xpercent": 25.67968,
                        "ypercent": 88.25623,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071672,
                        "lastonl": 1529089959,
                        "hidden": false
                    },
                    {
                        "id": 968,
                        "name": "FNB60",
                        "macaddress": "f8:f0:05:f7:7e:26",
                        "xpercent": 28.386122,
                        "ypercent": 88.28702,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071224,
                        "lastonl": 1529090028,
                        "hidden": false
                    },
                    {
                        "id": 969,
                        "name": "FNB61",
                        "macaddress": "f8:f0:05:f8:07:a1",
                        "xpercent": 20.587587,
                        "ypercent": 92.689735,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529073587,
                        "lastonl": 1529090035,
                        "hidden": false
                    },
                    {
                        "id": 970,
                        "name": "FNB62",
                        "macaddress": "f8:f0:05:f7:46:a5",
                        "xpercent": 23.185265,
                        "ypercent": 92.69294,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529072172,
                        "lastonl": 1529089979,
                        "hidden": false
                    },
                    {
                        "id": 971,
                        "name": "FNB63",
                        "macaddress": "f8:f0:05:f7:46:a7",
                        "xpercent": 25.677755,
                        "ypercent": 92.64862,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071859,
                        "lastonl": 1529089992,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1528461535,
                        "lastonl": 1528497086,
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
                        "lastocc": 1529071951,
                        "lastonl": 1529089930,
                        "hidden": false
                    },
                    {
                        "id": 974,
                        "name": "FNB69",
                        "macaddress": "f8:f0:05:f7:46:7f",
                        "xpercent": 8.9930315,
                        "ypercent": 75.28409,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067809,
                        "lastonl": 1529089981,
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
                        "lastocc": 1529060813,
                        "lastonl": 1529090030,
                        "hidden": false
                    },
                    {
                        "id": 976,
                        "name": "FNB72",
                        "macaddress": "f8:f0:05:f7:46:a3",
                        "xpercent": 6.1761303,
                        "ypercent": 79.47128,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067855,
                        "lastonl": 1529089968,
                        "hidden": false
                    },
                    {
                        "id": 977,
                        "name": "FNB73",
                        "macaddress": "f8:f0:05:f7:7e:25",
                        "xpercent": 8.776347,
                        "ypercent": 79.47128,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063464,
                        "lastonl": 1529089940,
                        "hidden": false
                    },
                    {
                        "id": 978,
                        "name": "FNB75",
                        "macaddress": "f8:f0:05:f7:46:ab",
                        "xpercent": 13.976781,
                        "ypercent": 79.47128,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071037,
                        "lastonl": 1529089971,
                        "hidden": false
                    },
                    {
                        "id": 987,
                        "name": "Xplore - 1",
                        "macaddress": "f8:f0:05:f7:fc:f2",
                        "xpercent": 47.12893,
                        "ypercent": 69.78654,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528893440,
                        "lastonl": 1529089922,
                        "hidden": false
                    },
                    {
                        "id": 988,
                        "name": "Xplore - 4",
                        "macaddress": "f8:f0:05:f7:7e:23",
                        "xpercent": 50.92091,
                        "ypercent": 69.86864,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070198,
                        "lastonl": 1529090026,
                        "hidden": false
                    },
                    {
                        "id": 989,
                        "name": "Xplore - 3",
                        "macaddress": "f8:f0:05:f8:07:9e",
                        "xpercent": 50.81257,
                        "ypercent": 71.38916,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070213,
                        "lastonl": 1529090027,
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
                        "lastocc": 1528997711,
                        "lastonl": 1529090017,
                        "hidden": false
                    },
                    {
                        "id": 991,
                        "name": "Xceler8 - 1",
                        "macaddress": "f8:f0:05:f7:7e:2d",
                        "xpercent": 69.77502,
                        "ypercent": 76.310425,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529047630,
                        "lastonl": 1529090028,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529054997,
                        "lastonl": 1529090038,
                        "hidden": false
                    },
                    {
                        "id": 993,
                        "name": "Xponential - 3",
                        "macaddress": "f8:f0:05:f8:07:a3",
                        "xpercent": 3.1425443,
                        "ypercent": 94.619064,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529057611,
                        "lastonl": 1529090025,
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
                        "lastocc": 1528887336,
                        "lastonl": 1529090031,
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
                        "registered": true,
                        "lastocc": 1529061172,
                        "lastonl": 1529089999,
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
                        "registered": true,
                        "lastocc": 1529060936,
                        "lastonl": 1529089969,
                        "hidden": false
                    },
                    {
                        "id": 997,
                        "name": "Infuse - 3",
                        "macaddress": "f8:f0:05:f7:46:85",
                        "xpercent": 36.40365,
                        "ypercent": 69.630264,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067346,
                        "lastonl": 1529089975,
                        "hidden": false
                    },
                    {
                        "id": 998,
                        "name": "Infuse - 4",
                        "macaddress": "f8:f0:05:f7:46:84",
                        "xpercent": 37.595417,
                        "ypercent": 71.3544,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067371,
                        "lastonl": 1529089950,
                        "hidden": false
                    },
                    {
                        "id": 999,
                        "name": "Infuse - 5",
                        "macaddress": "f8:f0:05:f7:46:a4",
                        "xpercent": 36.403034,
                        "ypercent": 73.11166,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528997519,
                        "lastonl": 1529089950,
                        "hidden": false
                    },
                    {
                        "id": 1000,
                        "name": "Infuse - 6",
                        "macaddress": "f8:f0:05:f7:7e:2a",
                        "xpercent": 35.102924,
                        "ypercent": 73.11166,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529061066,
                        "lastonl": 1529090035,
                        "hidden": false
                    },
                    {
                        "id": 1001,
                        "name": "Infuse - 7",
                        "macaddress": "f8:f0:05:f7:7e:30",
                        "xpercent": 33.80282,
                        "ypercent": 73.11166,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529057054,
                        "lastonl": 1529090042,
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
                        "lastocc": 1528970037,
                        "lastonl": 1529090001,
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
                        "lastocc": 1529068155,
                        "lastonl": 1529089968,
                        "hidden": false
                    },
                    {
                        "id": 1004,
                        "name": "Xtreme - 3",
                        "macaddress": "f8:f0:05:f7:7e:08",
                        "xpercent": 22.2108,
                        "ypercent": 33.076298,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529066498,
                        "lastonl": 1529090028,
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
                        "lastocc": 1529068451,
                        "lastonl": 1529090029,
                        "hidden": false
                    },
                    {
                        "id": 1006,
                        "name": "Xtreme - 5",
                        "macaddress": "f8:f0:05:f7:46:a0",
                        "xpercent": 24.91936,
                        "ypercent": 31.598467,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068158,
                        "lastonl": 1529089939,
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
                        "lastocc": 1529068072,
                        "lastonl": 1529089997,
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
                        "lastocc": 1529056756,
                        "lastonl": 1529089944,
                        "hidden": false
                    },
                    {
                        "id": 1009,
                        "name": "Whatsup - 1.2",
                        "macaddress": "f8:f0:05:f7:46:79",
                        "xpercent": 24.269304,
                        "ypercent": 72.57473,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056711,
                        "lastonl": 1529089966,
                        "hidden": false
                    },
                    {
                        "id": 1010,
                        "name": "Whatsup - 1.3",
                        "macaddress": "f8:f0:05:f7:46:94",
                        "xpercent": 25.461071,
                        "ypercent": 73.313644,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056798,
                        "lastonl": 1529089932,
                        "hidden": false
                    },
                    {
                        "id": 1011,
                        "name": "Whatsup - 1.4",
                        "macaddress": "f8:f0:05:f8:07:9f",
                        "xpercent": 26.761179,
                        "ypercent": 73.313644,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529053239,
                        "lastonl": 1529090019,
                        "hidden": false
                    },
                    {
                        "id": 1012,
                        "name": "Whatsup - 1.5",
                        "macaddress": "f8:f0:05:f7:7e:36",
                        "xpercent": 27.952946,
                        "ypercent": 72.57473,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056770,
                        "lastonl": 1529090020,
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
                        "lastocc": 1529056802,
                        "lastonl": 1529089979,
                        "hidden": false
                    },
                    {
                        "id": 1014,
                        "name": "Whatsup - 2.1",
                        "macaddress": "f8:f0:05:f7:46:92",
                        "xpercent": 23.510908,
                        "ypercent": 75.7767,
                        "inuse": false,
                        "standby": false,
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1528901541,
                        "lastonl": 1528901541,
                        "hidden": false
                    },
                    {
                        "id": 1015,
                        "name": "Whatsup - 3.1",
                        "macaddress": "f8:f0:05:f7:46:9b",
                        "xpercent": 27.411234,
                        "ypercent": 76.63877,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056735,
                        "lastonl": 1529089999,
                        "hidden": false
                    },
                    {
                        "id": 1016,
                        "name": "Whatsup - 3.2",
                        "macaddress": "f8:f0:05:f7:46:7a",
                        "xpercent": 28.819685,
                        "ypercent": 76.761925,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056390,
                        "lastonl": 1529089972,
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
                        "lastocc": 1529052388,
                        "lastonl": 1529090033,
                        "hidden": false
                    },
                    {
                        "id": 1018,
                        "name": "Illuminate - 1",
                        "macaddress": "f8:f0:05:f7:46:8d",
                        "xpercent": 31.63851,
                        "ypercent": 65.78087,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529066655,
                        "lastonl": 1529090002,
                        "hidden": false
                    },
                    {
                        "id": 1019,
                        "name": "Illuminate - 2",
                        "macaddress": "f8:f0:05:f7:46:9a",
                        "xpercent": 31.530167,
                        "ypercent": 64.30303,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063738,
                        "lastonl": 1529089980,
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
                        "lastocc": 1529066632,
                        "lastonl": 1529089933,
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
                        "lastocc": 1529066683,
                        "lastonl": 1529089965,
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
                        "lastocc": 1529063705,
                        "lastonl": 1529090000,
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
                        "lastocc": 1529064959,
                        "lastonl": 1529089977,
                        "hidden": false
                    },
                    {
                        "id": 1024,
                        "name": "Illuminate - 7",
                        "macaddress": "f8:f0:05:f7:46:91",
                        "xpercent": 34.88878,
                        "ypercent": 62.8252,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529064979,
                        "lastonl": 1529090012,
                        "hidden": false
                    },
                    {
                        "id": 1025,
                        "name": "Illuminate - 8",
                        "macaddress": "f8:f0:05:f7:46:7e",
                        "xpercent": 34.886242,
                        "ypercent": 64.32677,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063678,
                        "lastonl": 1529089988,
                        "hidden": false
                    },
                    {
                        "id": 1026,
                        "name": "Illuminate - 9",
                        "macaddress": "f8:f0:05:f7:46:a2",
                        "xpercent": 34.780437,
                        "ypercent": 65.657715,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063730,
                        "lastonl": 1529089934,
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
                        "lastocc": 1529056547,
                        "lastonl": 1529089980,
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
                        "lastocc": 1529059336,
                        "lastonl": 1529089918,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1525388356,
                        "lastonl": 1525388356,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1525391275,
                        "lastonl": 1525391275,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1525390777,
                        "lastonl": 1525390777,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1525391383,
                        "lastonl": 1525391383,
                        "hidden": false
                    },
                    {
                        "id": 1033,
                        "name": "Unravel - 7",
                        "macaddress": "f8:f0:05:f7:fc:f7",
                        "xpercent": 63.491165,
                        "ypercent": 77.78825,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529055960,
                        "lastonl": 1529089929,
                        "hidden": false
                    },
                    {
                        "id": 1034,
                        "name": "Unravel - 8",
                        "macaddress": "f8:f0:05:f7:fd:1a",
                        "xpercent": 64.791275,
                        "ypercent": 77.6651,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529069116,
                        "lastonl": 1529089941,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1524187677,
                        "lastonl": 1524187677,
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
                        "lastocc": 1529056546,
                        "lastonl": 1529090041,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1525393219,
                        "lastonl": 1525393219,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1525392250,
                        "lastonl": 1525392250,
                        "hidden": false
                    },
                    {
                        "id": 1039,
                        "name": "Decode - 1",
                        "macaddress": "f8:f0:05:f7:fd:18",
                        "xpercent": 71.941864,
                        "ypercent": 73.35476,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528969527,
                        "lastonl": 1529089940,
                        "hidden": false
                    },
                    {
                        "id": 1040,
                        "name": "Decode - 2",
                        "macaddress": "f8:f0:05:f7:fc:f4",
                        "xpercent": 73.35032,
                        "ypercent": 73.231606,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529065363,
                        "lastonl": 1529090033,
                        "hidden": false
                    },
                    {
                        "id": 1041,
                        "name": "Decode - 3",
                        "macaddress": "f8:f0:05:f7:46:8a",
                        "xpercent": 74.75684,
                        "ypercent": 73.313644,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068569,
                        "lastonl": 1529089988,
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
                        "lastocc": 1528985204,
                        "lastonl": 1529089973,
                        "hidden": false
                    },
                    {
                        "id": 1043,
                        "name": "Decode - 5",
                        "macaddress": "f8:f0:05:f7:7e:2c",
                        "xpercent": 74.648506,
                        "ypercent": 69.74222,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070108,
                        "lastonl": 1529089985,
                        "hidden": false
                    },
                    {
                        "id": 1044,
                        "name": "Decode - 6",
                        "macaddress": "f8:f0:05:f7:46:8e",
                        "xpercent": 73.3484,
                        "ypercent": 69.74222,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070127,
                        "lastonl": 1529090026,
                        "hidden": false
                    },
                    {
                        "id": 1045,
                        "name": "Decode - 7",
                        "macaddress": "f8:f0:05:f7:7e:14",
                        "xpercent": 71.941864,
                        "ypercent": 69.783325,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067970,
                        "lastonl": 1529090024,
                        "hidden": false
                    },
                    {
                        "id": 1047,
                        "name": "Whatsup - 2.2",
                        "macaddress": "f8:f0:05:f7:fd:7d",
                        "xpercent": 24.269304,
                        "ypercent": 76.88508,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056835,
                        "lastonl": 1529090016,
                        "hidden": false
                    },
                    {
                        "id": 1048,
                        "name": "Whatsup - 2.3",
                        "macaddress": "f8:f0:05:f8:07:b8",
                        "xpercent": 25.677755,
                        "ypercent": 76.39246,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529088108,
                        "lastonl": 1529090021,
                        "hidden": false
                    },
                    {
                        "id": 1049,
                        "name": "Xponential - 2",
                        "macaddress": "f8:f0:05:f7:fd:7a",
                        "xpercent": 3.5759137,
                        "ypercent": 89.93926,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056341,
                        "lastonl": 1529089927,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529056036,
                        "lastonl": 1529089994,
                        "hidden": false
                    },
                    {
                        "id": 1051,
                        "name": "Xceler8 - 2",
                        "macaddress": "f8:f0:05:f7:fc:ed",
                        "xpercent": 72.48358,
                        "ypercent": 76.310425,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529044405,
                        "lastonl": 1529089971,
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
                        "lastocc": 1529067435,
                        "lastonl": 1529090019,
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
                        "lastocc": 1529059558,
                        "lastonl": 1529089986,
                        "hidden": false
                    },
                    {
                        "id": 1054,
                        "name": "FNB3",
                        "macaddress": "f8:f0:05:f7:fd:1d",
                        "xpercent": 81.36765,
                        "ypercent": 35.546875,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071160,
                        "lastonl": 1529089957,
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
                        "lastocc": 1529071193,
                        "lastonl": 1529089949,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529065578,
                        "lastonl": 1529089948,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529065568,
                        "lastonl": 1529089938,
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
                        "lastocc": 1522939251,
                        "lastonl": 1522939251,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528998864,
                        "lastonl": 1529089943,
                        "hidden": false
                    },
                    {
                        "id": 1361,
                        "name": "Think Room 32",
                        "macaddress": "f8:f0:05:e4:06:b8",
                        "xpercent": 16.902023,
                        "ypercent": 70.861786,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063586,
                        "lastonl": 1529089965,
                        "hidden": false
                    },
                    {
                        "id": 1362,
                        "name": "Analyse Room 33",
                        "macaddress": "f8:f0:05:e3:ff:d7",
                        "xpercent": 8.342978,
                        "ypercent": 69.014496,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068289,
                        "lastonl": 1529089970,
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
                        "lastocc": 1529078883,
                        "lastonl": 1529089933,
                        "hidden": false
                    },
                    {
                        "id": 1364,
                        "name": "Impact Room 36",
                        "macaddress": "f8:f0:05:e3:fd:95",
                        "xpercent": 74.86711,
                        "ypercent": 78.157715,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067516,
                        "lastonl": 1529089940,
                        "hidden": false
                    },
                    {
                        "id": 1365,
                        "name": "Impact Room 37",
                        "macaddress": "f8:f0:05:e4:05:7e",
                        "xpercent": 74.86711,
                        "ypercent": 76.18727,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529060261,
                        "lastonl": 1529089929,
                        "hidden": false
                    },
                    {
                        "id": 1366,
                        "name": "Impact Room 38",
                        "macaddress": "f8:f0:05:e3:d7:c9",
                        "xpercent": 77.1423,
                        "ypercent": 78.03456,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068700,
                        "lastonl": 1529090009,
                        "hidden": false
                    },
                    {
                        "id": 1367,
                        "name": "Impact Room 39",
                        "macaddress": "f8:f0:05:e2:60:c6",
                        "xpercent": 77.1423,
                        "ypercent": 76.310425,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068639,
                        "lastonl": 1529090017,
                        "hidden": false
                    },
                    {
                        "id": 1368,
                        "name": "Focus Room 50",
                        "macaddress": "f8:f0:05:e2:4c:e9",
                        "xpercent": 82.99279,
                        "ypercent": 70.8917,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068616,
                        "lastonl": 1529089980,
                        "hidden": false
                    },
                    {
                        "id": 1369,
                        "name": "Reflect Room 51",
                        "macaddress": "f8:f0:05:e3:fe:be",
                        "xpercent": 91.33515,
                        "ypercent": 69.04441,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067661,
                        "lastonl": 1529089961,
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
                        "lastocc": 1528100042,
                        "lastonl": 1529089984,
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
                        "lastocc": 1528997216,
                        "lastonl": 1529089973,
                        "hidden": false
                    },
                    {
                        "id": 1372,
                        "name": "Review Room 76",
                        "macaddress": "f8:f0:05:e3:ff:8f",
                        "xpercent": 85.80777,
                        "ypercent": 41.551445,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529055145,
                        "lastonl": 1529090018,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529055118,
                        "lastonl": 1529090035,
                        "hidden": false
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
                        "lastocc": 1529060538,
                        "lastonl": 1529089973,
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
                        "lastocc": 1529071087,
                        "lastonl": 1529089982,
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
                        "lastocc": 1529064870,
                        "lastonl": 1529090024,
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
                        "lastocc": 1529069712,
                        "lastonl": 1529089931,
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
                        "lastocc": 1529061079,
                        "lastonl": 1529090032,
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
                        "lastocc": 1529071086,
                        "lastonl": 1529090035,
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
                        "lastocc": 1529063573,
                        "lastonl": 1529089964,
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
                        "lastocc": 1529068291,
                        "lastonl": 1529090013,
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
                        "lastocc": 1529075582,
                        "lastonl": 1529089937,
                        "hidden": false
                    },
                    {
                        "id": 1383,
                        "name": "Open Plan 13",
                        "macaddress": "f8:f0:05:e3:d5:e6",
                        "xpercent": 12.570253,
                        "ypercent": 50.140472,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068484,
                        "lastonl": 1529090032,
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
                        "lastocc": 1529068476,
                        "lastonl": 1529089982,
                        "hidden": false
                    },
                    {
                        "id": 1385,
                        "name": "Open Plan 15",
                        "macaddress": "f8:f0:05:e3:fd:9c",
                        "xpercent": 17.768763,
                        "ypercent": 50.194527,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070972,
                        "lastonl": 1529089922,
                        "hidden": false
                    },
                    {
                        "id": 1386,
                        "name": "Open Plan 16",
                        "macaddress": "f8:f0:05:e3:d7:31",
                        "xpercent": 17.660421,
                        "ypercent": 54.258564,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529073507,
                        "lastonl": 1529089985,
                        "hidden": false
                    },
                    {
                        "id": 1387,
                        "name": "Open Plan 17",
                        "macaddress": "f8:f0:05:e4:04:f0",
                        "xpercent": 15.168547,
                        "ypercent": 54.258564,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070121,
                        "lastonl": 1529089957,
                        "hidden": false
                    },
                    {
                        "id": 1388,
                        "name": "Open Plan 18",
                        "macaddress": "f8:f0:05:e3:fd:22",
                        "xpercent": 12.570253,
                        "ypercent": 54.327663,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067840,
                        "lastonl": 1529089986,
                        "hidden": false
                    },
                    {
                        "id": 1389,
                        "name": "Open Plan 19",
                        "macaddress": "f8:f0:05:e3:ff:d0",
                        "xpercent": 10.078379,
                        "ypercent": 54.327663,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068540,
                        "lastonl": 1529089955,
                        "hidden": false
                    },
                    {
                        "id": 1390,
                        "name": "Open Plan 66",
                        "macaddress": "f8:f0:05:e3:d7:a1",
                        "xpercent": 82.342735,
                        "ypercent": 50.078896,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529086769,
                        "lastonl": 1529089949,
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
                        "lastocc": 1529062115,
                        "lastonl": 1529090026,
                        "hidden": false
                    },
                    {
                        "id": 1392,
                        "name": "Open Plan 68",
                        "macaddress": "f8:f0:05:e3:d6:7f",
                        "xpercent": 87.326485,
                        "ypercent": 50.078896,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528997310,
                        "lastonl": 1529089943,
                        "hidden": false
                    },
                    {
                        "id": 1393,
                        "name": "Open Plan 69",
                        "macaddress": "f8:f0:05:e3:fd:21",
                        "xpercent": 90.0325,
                        "ypercent": 50.221676,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068066,
                        "lastonl": 1529089940,
                        "hidden": false
                    },
                    {
                        "id": 1394,
                        "name": "Open Plan 70",
                        "macaddress": "f8:f0:05:e3:da:58",
                        "xpercent": 89.9267,
                        "ypercent": 54.38924,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063408,
                        "lastonl": 1529089948,
                        "hidden": false
                    },
                    {
                        "id": 1395,
                        "name": "Open Plan 71",
                        "macaddress": "f8:f0:05:e3:fd:1c",
                        "xpercent": 87.326485,
                        "ypercent": 54.38924,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529044906,
                        "lastonl": 1529090019,
                        "hidden": false
                    },
                    {
                        "id": 1396,
                        "name": "Open Plan 72",
                        "macaddress": "f8:f0:05:e3:ca:78",
                        "xpercent": 84.941025,
                        "ypercent": 54.23617,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529052974,
                        "lastonl": 1529089943,
                        "hidden": false
                    },
                    {
                        "id": 1397,
                        "name": "Open Plan 52",
                        "macaddress": "f8:f0:05:e3:cb:48",
                        "xpercent": 82.34081,
                        "ypercent": 60.270657,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529069347,
                        "lastonl": 1529090015,
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
                        "lastocc": 1529070309,
                        "lastonl": 1529089992,
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
                        "lastocc": 1529070299,
                        "lastonl": 1529090038,
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
                        "lastocc": 1529069905,
                        "lastonl": 1529089985,
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
                        "lastocc": 1528998440,
                        "lastonl": 1529090004,
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
                        "lastocc": 1528981303,
                        "lastonl": 1529090023,
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
                        "lastocc": 1528981898,
                        "lastonl": 1529089742,
                        "hidden": false
                    },
                    {
                        "id": 1404,
                        "name": "Open Plan 59",
                        "macaddress": "f8:f0:05:e4:04:e4",
                        "xpercent": 87.326485,
                        "ypercent": 64.610916,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070186,
                        "lastonl": 1529089996,
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
                        "lastocc": 1529067156,
                        "lastonl": 1529090035,
                        "hidden": false
                    },
                    {
                        "id": 1406,
                        "name": "Open Plan 42",
                        "macaddress": "f8:f0:05:e2:4c:59",
                        "xpercent": 86.24306,
                        "ypercent": 75.3252,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067295,
                        "lastonl": 1529090011,
                        "hidden": false
                    },
                    {
                        "id": 1407,
                        "name": "Open Plan 43",
                        "macaddress": "f8:f0:05:e3:d5:e1",
                        "xpercent": 88.626595,
                        "ypercent": 75.3252,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068424,
                        "lastonl": 1529089992,
                        "hidden": false
                    },
                    {
                        "id": 1408,
                        "name": "Open Plan 44",
                        "macaddress": "f8:f0:05:e3:ff:6b",
                        "xpercent": 91.22681,
                        "ypercent": 75.3252,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529048833,
                        "lastonl": 1529089956,
                        "hidden": false
                    },
                    {
                        "id": 1409,
                        "name": "Open Plan 45",
                        "macaddress": "f8:f0:05:e2:60:48",
                        "xpercent": 93.82703,
                        "ypercent": 75.3252,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529043335,
                        "lastonl": 1529090030,
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
                        "lastocc": 1528998312,
                        "lastonl": 1529089995,
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
                        "lastocc": 1529070358,
                        "lastonl": 1529090005,
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
                        "lastocc": 1529070414,
                        "lastonl": 1529090042,
                        "hidden": false
                    },
                    {
                        "id": 1413,
                        "name": "Open Plan 40",
                        "macaddress": "f8:f0:05:e3:fd:23",
                        "xpercent": 90.89986,
                        "ypercent": 91.79775,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070166,
                        "lastonl": 1529089983,
                        "hidden": false
                    },
                    {
                        "id": 1414,
                        "name": "Open Plan 41",
                        "macaddress": "f8:f0:05:e3:d5:eb",
                        "xpercent": 93.71657,
                        "ypercent": 88.65602,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529050747,
                        "lastonl": 1529090042,
                        "hidden": false
                    },
                    {
                        "id": 1415,
                        "name": "Free Stand 62",
                        "macaddress": "f8:f0:05:e2:4c:6e",
                        "xpercent": 73.567,
                        "ypercent": 63.50254,
                        "inuse": false,
                        "standby": false,
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1526040938,
                        "lastonl": 1526233392,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1527172206,
                        "lastonl": 1527232161,
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
                        "lastocc": 1529069376,
                        "lastonl": 1529090036,
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
                        "lastocc": 1529065343,
                        "lastonl": 1529089893,
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
                        "lastocc": 1529069625,
                        "lastonl": 1529089766,
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
                        "lastocc": 1529068509,
                        "lastonl": 1529089836,
                        "hidden": false
                    },
                    {
                        "id": 1423,
                        "name": "Free Stand 64",
                        "macaddress": "f8:f0:05:e3:da:ba",
                        "xpercent": 73.56446,
                        "ypercent": 66.502464,
                        "inuse": false,
                        "standby": false,
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1526232659,
                        "lastonl": 1526233295,
                        "hidden": false
                    },
                    {
                        "id": 1424,
                        "name": "Free Stand 63",
                        "macaddress": "f8:f0:05:e3:ff:7b",
                        "xpercent": 75.08125,
                        "ypercent": 63.5468,
                        "inuse": false,
                        "standby": false,
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1526232680,
                        "lastonl": 1526233316,
                        "hidden": false
                    },
                    {
                        "id": 1425,
                        "name": "Free Stand 65",
                        "macaddress": "f8:f0:05:e3:fd:26",
                        "xpercent": 75.08125,
                        "ypercent": 66.502464,
                        "inuse": false,
                        "standby": false,
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1526232723,
                        "lastonl": 1526233367,
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
                        "lastocc": 1529071528,
                        "lastonl": 1529089971,
                        "hidden": false
                    },
                    {
                        "id": 1427,
                        "name": "Open Plan 73",
                        "macaddress": "f8:f0:05:e4:04:e9",
                        "xpercent": 82.342735,
                        "ypercent": 54.38924,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529078853,
                        "lastonl": 1529089988,
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
                        "lastocc": 1529062387,
                        "lastonl": 1529089918,
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
                        "lastocc": 1529068025,
                        "lastonl": 1529089948,
                        "hidden": false
                    },
                    {
                        "id": 1430,
                        "name": "FNB70",
                        "macaddress": "f8:f0:05:f7:fc:f1",
                        "xpercent": 11.268222,
                        "ypercent": 75.28409,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528989732,
                        "lastonl": 1529089993,
                        "hidden": false
                    },
                    {
                        "id": 1431,
                        "name": "FNB74",
                        "macaddress": "f8:f0:05:f7:7e:02",
                        "xpercent": 11.484906,
                        "ypercent": 79.71759,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529059833,
                        "lastonl": 1529089998,
                        "hidden": false
                    },
                    {
                        "id": 1432,
                        "name": "Open Plan 2",
                        "macaddress": "f8:f0:05:e4:06:98",
                        "xpercent": 8.559663,
                        "ypercent": 31.105856,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529074985,
                        "lastonl": 1529090039,
                        "hidden": false
                    },
                    {
                        "id": 1433,
                        "name": "Open Plan 3",
                        "macaddress": "f8:f0:05:e3:fe:37",
                        "xpercent": 8.559663,
                        "ypercent": 35.662506,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529076165,
                        "lastonl": 1529089919,
                        "hidden": false
                    },
                    {
                        "id": 1434,
                        "name": "Open Plan 4",
                        "macaddress": "f8:f0:05:e4:04:ff",
                        "xpercent": 11.484906,
                        "ypercent": 35.539352,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529074740,
                        "lastonl": 1529089976,
                        "hidden": false
                    },
                    {
                        "id": 1435,
                        "name": "Open Plan 5",
                        "macaddress": "f8:f0:05:e3:ca:40",
                        "xpercent": 11.484714,
                        "ypercent": 31.214445,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529064544,
                        "lastonl": 1529090019,
                        "hidden": false
                    },
                    {
                        "id": 1436,
                        "name": "Open Plan 6",
                        "macaddress": "f8:f0:05:e3:fe:3f",
                        "xpercent": 16.143627,
                        "ypercent": 31.22901,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529073112,
                        "lastonl": 1529089929,
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
                        "lastocc": 1529068219,
                        "lastonl": 1529089951,
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
                        "lastocc": 1529076460,
                        "lastonl": 1529089940,
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
                        "lastocc": 1529076540,
                        "lastonl": 1529090017,
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
                        "lastocc": 1529079679,
                        "lastonl": 1529090011,
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
                        "lastocc": 1529079527,
                        "lastonl": 1529089906,
                        "hidden": false
                    },
                    {
                        "id": 2177,
                        "name": "Open desk - 85",
                        "macaddress": "f8:f0:05:e3:ff:79",
                        "xpercent": 41.820152,
                        "ypercent": 13.054187,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063228,
                        "lastonl": 1529089593,
                        "hidden": false
                    },
                    {
                        "id": 2178,
                        "name": "Open desk - 84",
                        "macaddress": "f8:f0:05:e3:fe:d6",
                        "xpercent": 41.929623,
                        "ypercent": 9.763699,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529053447,
                        "lastonl": 1529089636,
                        "hidden": false
                    },
                    {
                        "id": 2179,
                        "name": "Open desk - 92",
                        "macaddress": "f8:f0:05:e4:04:eb",
                        "xpercent": 54.282063,
                        "ypercent": 10.177417,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528996789,
                        "lastonl": 1529089985,
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
                        "lastocc": 1529071714,
                        "lastonl": 1529090016,
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
                        "lastocc": 1529068227,
                        "lastonl": 1529089458,
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
                        "lastocc": 1529067956,
                        "lastonl": 1529089708,
                        "hidden": false
                    },
                    {
                        "id": 2183,
                        "name": "Open desk - 88",
                        "macaddress": "f8:f0:05:e3:ff:d4",
                        "xpercent": 48.212353,
                        "ypercent": 10.0591135,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067034,
                        "lastonl": 1529090021,
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
                        "lastocc": 1529068738,
                        "lastonl": 1529089992,
                        "hidden": false
                    },
                    {
                        "id": 2185,
                        "name": "Open desk - 90",
                        "macaddress": "f8:f0:05:e3:fd:0f",
                        "xpercent": 51.89853,
                        "ypercent": 9.931111,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529064259,
                        "lastonl": 1529089991,
                        "hidden": false
                    },
                    {
                        "id": 2186,
                        "name": "Open desk - 91",
                        "macaddress": "f8:f0:05:e3:d5:db",
                        "xpercent": 51.787647,
                        "ypercent": 12.768473,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529063713,
                        "lastonl": 1529089970,
                        "hidden": false
                    },
                    {
                        "id": 2187,
                        "name": "Open desk - 94",
                        "macaddress": "f8:f0:05:e3:fe:bf",
                        "xpercent": 58.18239,
                        "ypercent": 9.931111,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529068893,
                        "lastonl": 1529089934,
                        "hidden": false
                    },
                    {
                        "id": 2188,
                        "name": "Open desk - 95",
                        "macaddress": "f8:f0:05:e4:04:e3",
                        "xpercent": 58.18239,
                        "ypercent": 12.886777,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528996306,
                        "lastonl": 1529089922,
                        "hidden": false
                    },
                    {
                        "id": 2189,
                        "name": "Open desk - 96",
                        "macaddress": "f8:f0:05:e3:fd:b5",
                        "xpercent": 60.346695,
                        "ypercent": 9.935961,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529069177,
                        "lastonl": 1529089866,
                        "hidden": false
                    },
                    {
                        "id": 2190,
                        "name": "Open desk - 97",
                        "macaddress": "f8:f0:05:e4:05:01",
                        "xpercent": 60.455036,
                        "ypercent": 12.768473,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529089752,
                        "lastonl": 1529089752,
                        "hidden": false
                    },
                    {
                        "id": 2191,
                        "name": "Open desk - 98",
                        "macaddress": "f8:f0:05:e3:fd:0a",
                        "xpercent": 64.14122,
                        "ypercent": 9.931111,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529090038,
                        "lastonl": 1529090038,
                        "hidden": false
                    },
                    {
                        "id": 2192,
                        "name": "Open desk - 99",
                        "macaddress": "f8:f0:05:e4:04:ed",
                        "xpercent": 64.24956,
                        "ypercent": 12.640471,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529089967,
                        "lastonl": 1529089967,
                        "hidden": false
                    },
                    {
                        "id": 2193,
                        "name": "Open desk - 100",
                        "macaddress": "f8:f0:05:e4:05:02",
                        "xpercent": 66.52475,
                        "ypercent": 9.807959,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071022,
                        "lastonl": 1529089944,
                        "hidden": false
                    },
                    {
                        "id": 2194,
                        "name": "Open desk - 101",
                        "macaddress": "f8:f0:05:e4:05:7c",
                        "xpercent": 66.52475,
                        "ypercent": 12.640471,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529082255,
                        "lastonl": 1529090028,
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
                        "faulty": true,
                        "registered": true,
                        "lastocc": 1528187886,
                        "lastonl": 1528187886,
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
                        "lastocc": 1529081529,
                        "lastonl": 1529089933,
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
                        "lastocc": 1529081793,
                        "lastonl": 1529089945,
                        "hidden": false
                    },
                    {
                        "id": 2198,
                        "name": "Open desk - 105",
                        "macaddress": "f8:f0:05:e4:05:79",
                        "xpercent": 72.59192,
                        "ypercent": 12.763624,
                        "inuse": false,
                        "standby": true,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529089853,
                        "lastonl": 1529089980,
                        "hidden": false
                    },
                    {
                        "id": 2199,
                        "name": "Open desk - 106",
                        "macaddress": "f8:f0:05:e3:ff:a7",
                        "xpercent": 76.70639,
                        "ypercent": 9.729064,
                        "inuse": true,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529089968,
                        "lastonl": 1529089968,
                        "hidden": false
                    },
                    {
                        "id": 2200,
                        "name": "Open desk - 107",
                        "macaddress": "f8:f0:05:e4:04:fe",
                        "xpercent": 76.600586,
                        "ypercent": 12.886777,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529069828,
                        "lastonl": 1529089434,
                        "hidden": false
                    },
                    {
                        "id": 2201,
                        "name": "Open desk - 108",
                        "macaddress": "f8:f0:05:e3:ff:b8",
                        "xpercent": 84.07621,
                        "ypercent": 7.2217517,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529076001,
                        "lastonl": 1529089967,
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
                        "lastocc": 1529061768,
                        "lastonl": 1529089937,
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
                        "lastocc": 1529067731,
                        "lastonl": 1529089721,
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
                        "lastocc": 1528980826,
                        "lastonl": 1529089656,
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
                        "lastocc": 1529071945,
                        "lastonl": 1529089583,
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
                        "lastocc": 1529067497,
                        "lastonl": 1529089566,
                        "hidden": false
                    },
                    {
                        "id": 2207,
                        "name": "Open desk - 114",
                        "macaddress": "f8:f0:05:e3:e7:9b",
                        "xpercent": 90.251724,
                        "ypercent": 7.2217517,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529057543,
                        "lastonl": 1529089629,
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
                        "lastocc": 1529070554,
                        "lastonl": 1529089991,
                        "hidden": false
                    },
                    {
                        "id": 2209,
                        "name": "Open desk - 116",
                        "macaddress": "f8:f0:05:e3:f4:b2",
                        "xpercent": 90.251724,
                        "ypercent": 12.763624,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070734,
                        "lastonl": 1529089685,
                        "hidden": false
                    },
                    {
                        "id": 2210,
                        "name": "Open desk - 117",
                        "macaddress": "f8:f0:05:e3:fd:2a",
                        "xpercent": 94.152054,
                        "ypercent": 6.975446,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1528999778,
                        "lastonl": 1529089572,
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
                        "lastocc": 1529068746,
                        "lastonl": 1529089542,
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
                        "lastocc": 1529064333,
                        "lastonl": 1529089779,
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
                        "lastocc": 1529065116,
                        "lastonl": 1529089526,
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
                        "lastocc": 1529070927,
                        "lastonl": 1529089908,
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
                        "lastocc": 1529075288,
                        "lastonl": 1529089808,
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
                        "lastocc": 1529067247,
                        "lastonl": 1529089915,
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
                        "lastocc": 1529067346,
                        "lastonl": 1529089812,
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
                        "lastocc": 1529067020,
                        "lastonl": 1529089664,
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
                        "lastocc": 1529077276,
                        "lastonl": 1529090024,
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
                        "lastocc": 1529056292,
                        "lastonl": 1529089652,
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
                        "lastocc": 1529056405,
                        "lastonl": 1529089731,
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
                        "lastocc": 1528983326,
                        "lastonl": 1529089869,
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
                        "lastocc": 1529074318,
                        "lastonl": 1529089618,
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
                        "lastocc": 1529039130,
                        "lastonl": 1529090002,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529066661,
                        "lastonl": 1529089839,
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
                        "lastocc": 1529062995,
                        "lastonl": 1529089748,
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
                        "lastocc": 1529077738,
                        "lastonl": 1529089962,
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
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529062844,
                        "lastonl": 1529089650,
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
                        "lastocc": 1529088480,
                        "lastonl": 1529089691,
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
                        "lastocc": 1529066338,
                        "lastonl": 1529089590,
                        "hidden": false
                    },
                    {
                        "id": 2231,
                        "name": "Open desk - 138",
                        "macaddress": "f8:f0:05:e3:fe:27",
                        "xpercent": 40.84761,
                        "ypercent": 19.660175,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529075307,
                        "lastonl": 1529089831,
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
                        "lastocc": 1529075232,
                        "lastonl": 1529089830,
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
                        "lastocc": 1529066942,
                        "lastonl": 1529089528,
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
                        "lastocc": 1529068998,
                        "lastonl": 1529089513,
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
                        "lastocc": 1529073908,
                        "lastonl": 1529089647,
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
                        "lastocc": 1529075749,
                        "lastonl": 1529089837,
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
                        "lastocc": 1529068456,
                        "lastonl": 1529089714,
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
                        "lastocc": 1529064477,
                        "lastonl": 1529089547,
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
                        "lastocc": 1529074189,
                        "lastonl": 1529090000,
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
                        "lastocc": 1529067124,
                        "lastonl": 1529089512,
                        "hidden": false
                    },
                    {
                        "id": 2241,
                        "name": "Open desk - 148",
                        "macaddress": "f8:f0:05:e3:fe:ce",
                        "xpercent": 51.245937,
                        "ypercent": 22.374384,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529070808,
                        "lastonl": 1529089612,
                        "hidden": false
                    },
                    {
                        "id": 2242,
                        "name": "Open desk - 149",
                        "macaddress": "f8:f0:05:e3:fd:1f",
                        "xpercent": 51.35428,
                        "ypercent": 25.453201,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529069187,
                        "lastonl": 1529089831,
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
                        "lastocc": 1529071522,
                        "lastonl": 1529089720,
                        "hidden": false
                    },
                    {
                        "id": 2244,
                        "name": "Open desk - 151",
                        "macaddress": "f8:f0:05:e3:cb:2c",
                        "xpercent": 55.57963,
                        "ypercent": 22.62069,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071188,
                        "lastonl": 1529089461,
                        "hidden": false
                    },
                    {
                        "id": 2245,
                        "name": "Open desk - 152",
                        "macaddress": "f8:f0:05:e3:d7:22",
                        "xpercent": 55.57963,
                        "ypercent": 25.453201,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071530,
                        "lastonl": 1529089828,
                        "hidden": false
                    },
                    {
                        "id": 2246,
                        "name": "Open desk - 153",
                        "macaddress": "f8:f0:05:e3:fd:29",
                        "xpercent": 59.482494,
                        "ypercent": 19.660175,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529081262,
                        "lastonl": 1529089721,
                        "hidden": false
                    },
                    {
                        "id": 2247,
                        "name": "Open desk - 154",
                        "macaddress": "f8:f0:05:e3:fd:27",
                        "xpercent": 59.479958,
                        "ypercent": 22.62069,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071593,
                        "lastonl": 1529089914,
                        "hidden": false
                    },
                    {
                        "id": 2248,
                        "name": "Open desk - 155",
                        "macaddress": "f8:f0:05:e3:ff:c1",
                        "xpercent": 59.479958,
                        "ypercent": 25.33005,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071436,
                        "lastonl": 1529089846,
                        "hidden": false
                    },
                    {
                        "id": 2249,
                        "name": "Open desk - 156",
                        "macaddress": "f8:f0:05:e2:4c:6d",
                        "xpercent": 62.191055,
                        "ypercent": 19.660175,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529076055,
                        "lastonl": 1529089954,
                        "hidden": false
                    },
                    {
                        "id": 2250,
                        "name": "Open desk - 157",
                        "macaddress": "f8:f0:05:e3:cb:be",
                        "xpercent": 62.191055,
                        "ypercent": 22.61584,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529067812,
                        "lastonl": 1529089899,
                        "hidden": false
                    },
                    {
                        "id": 2251,
                        "name": "Open desk - 158",
                        "macaddress": "f8:f0:05:e3:d7:b0",
                        "xpercent": 62.191055,
                        "ypercent": 25.448353,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071307,
                        "lastonl": 1529089704,
                        "hidden": false
                    },
                    {
                        "id": 2252,
                        "name": "Open desk - 159",
                        "macaddress": "f8:f0:05:e3:fe:3e",
                        "xpercent": 66.09138,
                        "ypercent": 19.660175,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071011,
                        "lastonl": 1529089862,
                        "hidden": false
                    },
                    {
                        "id": 2253,
                        "name": "Open desk - 160",
                        "macaddress": "f8:f0:05:e3:ff:b3",
                        "xpercent": 66.09138,
                        "ypercent": 22.61584,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529071345,
                        "lastonl": 1529089499,
                        "hidden": false
                    },
                    {
                        "id": 2254,
                        "name": "Open desk - 161",
                        "macaddress": "f8:f0:05:e4:05:7b",
                        "xpercent": 66.09138,
                        "ypercent": 25.571505,
                        "inuse": false,
                        "standby": false,
                        "faulty": false,
                        "registered": true,
                        "lastocc": 1529069874,
                        "lastonl": 1529089838,
                        "hidden": false
                    }
                ],
                floorplan: [
                    "https://v3-floorplan.s3-eu-west-1.amazonaws.com/floorplans-v2/185?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJ7UXY5M3HYOL2N7A%2F20180624%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180624T111310Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5f2e86d1f9f32d50539ddb23c837dabcba9dd899279109d0fa74f4aabc521a6c",
                    "https://v3-floorplan.s3-eu-west-1.amazonaws.com/floorplans-v2/185?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJ7UXY5M3HYOL2N7A%2F20180624%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180624T111310Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5f2e86d1f9f32d50539ddb23c837dabcba9dd899279109d0fa74f4aabc521a6c",
                    "https://v3-floorplan.s3-eu-west-1.amazonaws.com/floorplans-v2/185?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAJ7UXY5M3HYOL2N7A%2F20180624%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20180624T111310Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=5f2e86d1f9f32d50539ddb23c837dabcba9dd899279109d0fa74f4aabc521a6c",
                    "https://static1.squarespace.com/static/59ea3191ace8642168c202fa/t/59ea3ce40abd047d1b327d97/1508523379548/Enclave+Cottage+Floorplan+insert.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/e/e0/Long_March_2D_launching_VRSS-1.jpg",
                    "https://bellewoods.sg/wp-content/uploads/2015/01/CS4-1345sqft.jpg",
                    "http://wvs.topleftpixel.com/photos/2008/12/san-fransisco_long-street_-01.jpg",
                    "https://ipost.files.wordpress.com/2012/05/long_cat1_2.gif",
                ],
            }
        };
    }

    render() {
        return (
            <MainComponent
                key={this.state.linkData.key}
                name={this.state.linkData.name}
                owner={this.state.linkData.owner}
                logo={this.state.linkData.logo}
                color={this.state.linkData.color}
                duration={this.state.linkData.duration}
                details={this.state.linkData.details}
                subscribers={this.state.linkData.subscribers}
                locations={this.state.linkData.locations}
                treeMap={this.state.linkData.treeMap}
                sensorsData={this.state.linkData.sensorsData}
                floorplan={this.state.linkData.floorplan}
            />
        );
    }
}
