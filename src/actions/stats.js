import axios from 'axios';
import config from 'config';
import * as Comparison from 'actions/comparison';
import store from '../store';

export const FETCH_OCCUPANCY_OVERVIEW = 'FETCH_OCCUPANCY_OVERVIEW';
export const RECEIVE_OCCUPANCY_OVERVIEW = 'RECEIVE_OCCUPANCY_OVERVIEW';

export const FETCH_STATS_DAILY = 'FETCH_STATS_DAILY';
export const RECEIVE_STATS_DAILY = 'RECEIVE_STATS_DAILY';
export const RECEIVE_OCCUPANCY_RANGE = 'RECEIVE_OCCUPANCY_RANGE';

export const FETCH_STATS_BREAKDOWN = 'FETCH_STATS_BREAKDOWN';
export const RECEIVE_STATS_BREAKDOWN = 'RECEIVE_STATS_BREAKDOWN';

export const FETCH_NODE_STATS = "FETCH_NODE_STATS";
export const RECEIVE_NODE_STATS = "RECEIVE_NODE_STATS";

export const FETCH_SENSOR_AVERAGE = 'FETCH_SENSOR_AVERAGE';
export const RECEIVE_SENSOR_AVERAGE = 'RECEIVE_SENSOR_AVERAGE';

export const FETCH_FAILED = 'FETCH_FAILED';


export function fetchOccupancyOverview(params, node) {
    return {
        type: FETCH_OCCUPANCY_OVERVIEW,
        node,
        params,
    };
}

export function receiveOccupancyOverview(node, params, data) {
    return {
        type: RECEIVE_OCCUPANCY_OVERVIEW,
        node,
        params, 
        data,
    };
}

export function fetchFailed(data) {
    return {
        type: FETCH_FAILED,
        data
    }
}

export function receiveOccupancyRange(data) {
    return {
        type: RECEIVE_OCCUPANCY_RANGE,
        data
    }
}

export function fetchNodeStats(params) {
    return {
        type: FETCH_NODE_STATS,
        params,
    };
}

export function receiveNodeStats(data) {
    return {
        type: RECEIVE_NODE_STATS,
        data
    };
}

export function fetchStatsDaily(params) {
    return {
        type: FETCH_STATS_DAILY,
        params,
    };
}

export function receiveStatsDaily(data) {
    return {
        type: RECEIVE_STATS_DAILY,
        data
    };
}

export function fetchStatsBreakdown(params) {
    return {
        type: FETCH_STATS_BREAKDOWN,
        params,
    };
}

export function receiveStatsBreakdown(data) {
    return {
        type: RECEIVE_STATS_BREAKDOWN,
        data
    };
}

export function fetchSensorAverage(params, node) {
    return {
        type: FETCH_SENSOR_AVERAGE,
        node,
        params,
    };
}

export function receiveSensorAverage(node, params, data) {
    return {
        type: RECEIVE_SENSOR_AVERAGE,
        node,
        params, 
        data,
    };
}



function checkWeekdayMask(mask) {
    if (!mask || mask.length != 7) {
        return false;
    }
    for(var i=0; i<mask.length; i++) {
        if (mask[i] != "1" && mask[i] != "0") {
            return false;
        }
    }
    return true;
}

export function getParams(nextProps) {
    let params = {
        id: nextProps.currentNode.id,
        startdate: nextProps.querySettings.startdate,
        enddate: nextProps.querySettings.enddate,
        starthour: nextProps.querySettings.starthour,
        endhour: nextProps.querySettings.endhour, 
        weekdaymask: nextProps.querySettings.weekdaymask,
        marks: nextProps.querySettings.marks,
        groupby: nextProps.querySettings.groupby
    }
    var cards = store.getState().defaultSettingsReducer.card
    var card = cards[nextProps.currentNode.info.cardid];

    if (card) {
        if (!(params.starthour != null && 0 <= params.starthour && params.starthour <= 23)) {
            params.starthour = card.starthour
        }
        if (!(params.endhour != null && 0 <= params.endhour && params.endhour <= 23)) {
            params.endhour = card.endhour
        }
        if (!checkWeekdayMask(params.weekdaymask)) {
            params.weekdaymask = card.weekdaymask
        }
    }


    if (nextProps.querySettings.tag == 'Occupancy') {
        params.tag = nextProps.querySettings.room.occupancyTag;
    }
    else {
        params.tag = nextProps.querySettings.room.efficiencyTag || nextProps.querySettings.room.occupancyTag;
    }
    return params;
}

export function findOccupancyTag(node) {
    if (node.type == 'meeting_room') {
        return 'MRO';
    }
    else if (node.type == 'open_area') {
        return 'OAO';
    }
    else {
        return 'TTO';
    }
}

export function findEfficiencyTag(node) {
    if (node.type == 'meeting_room') {
        return 'MRE';
    }
    else {
        return findOccupancyTag(node);
    }
}

export function getOccupancyOverview(params, node) {
    return dispatch => {
        dispatch(fetchOccupancyOverview(params, node));
        axios.get(config.api.root + `/stats/overview/${params.id}/${params.tag}?startdate=${params.startdate}&enddate=${params.enddate}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}`)
            .then((response) => {
                dispatch(receiveOccupancyOverview(node, params, response.data));
            }).catch(function (response) {
                console.log(response)
                dispatch(fetchFailed(response.data));
            })
    }
}

export function getNodeSeriesStats(params) {
    return dispatch => {
        dispatch(fetchNodeStats(params));
        axios.get(config.api.root + `/stats/series/${params.id}/${params.tag}?startdate=${params.startdate}&enddate=${params.enddate}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}&groupby=${params.groupby}`)
            .then((response) => {
                if (params.action == Comparison.RECEIVE_FIRST_LOCATION_TOTAL) {
                    dispatch(Comparison.receiveFirstLocationTotal(response.data));
                }
                else if (params.action == Comparison.RECEIVE_SECOND_LOCATION_TOTAL) {
                    dispatch(Comparison.receiveSecondLocationTotal(response.data));
                }
                else if (params.action == Comparison.RECEIVE_FIRST_LOCATION_RANGE) {
                    dispatch(Comparison.receiveFirstLocationRange(response.data));
                }
                else if (params.action == Comparison.RECEIVE_SECOND_LOCATION_RANGE) {
                    dispatch(Comparison.receiveSecondLocationRange(response.data));
                }
                else if (params.chart == 'range') {
                    dispatch(receiveOccupancyRange(response.data));
                }
                else {
                    dispatch(receiveNodeStats(response.data));
                }
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })
    }
}

export function getStatsDaily(params) {
    return dispatch => {
        dispatch(fetchStatsDaily(params));
        axios.get(config.api.root + `/stats/weekdayXhour/${params.id}/${params.tag}?startdate=${params.startdate}&enddate=${params.enddate}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}`)
            .then((response) => {
                if (params.action == Comparison.RECEIVE_FIRST_LOCATION_DAILY) {
                    dispatch(Comparison.receiveFirstLocationDaily(response.data));
                }
                else if (params.action == Comparison.RECEIVE_SECOND_LOCATION_DAILY) {
                    dispatch(Comparison.receiveSecondLocationDaily(response.data));
                }
                else {
                    dispatch(receiveStatsDaily(response.data));
                }
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })

    }
}

export function getStatsBreakdown(params) {
    return dispatch => {
        dispatch(fetchStatsBreakdown(params));
        axios.get(config.api.root + `/stats/overviewlist/${JSON.stringify(params.id)}/${params.tag}?startdate=${params.startdate}&enddate=${params.enddate}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}`)
            .then((response) => {
                dispatch(receiveStatsBreakdown(response.data));
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })
    }
}

export function downloadCSV(node, querySettings) {
    let params = Object.assign({}, {
        currentNode: node,
        querySettings: querySettings,
    });
    params = getParams(params);
    console.log(params)

    let url = config.api.root+`/csv/sensor/raw/${node.id}?startdate=${params.startdate}&enddate=${params.enddate}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}`;

    let cf = {
        onDownloadProgress: e => {
            console.log(e)
        }
    }

    axios.get(url, cf).then(response => {
        var file = new Blob([response.data], {type: 'text/plain'});
        let objectUrl = window.URL.createObjectURL(file);

        let anchor = document.createElement("a");
        anchor.href = objectUrl;
        anchor.download = 'sensor-records.csv';
        anchor.click();

        window.URL.revokeObjectURL(objectUrl);
    });
}

export function getSensorAverage(params, node) {
    return dispatch => {
        dispatch(fetchSensorAverage(params, node));
        axios.get(config.api.root + `/stats/sensoraverage/${params.id}?startdate=${params.startdate}&enddate=${params.enddate}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}`)
            .then((response) => {
                dispatch(receiveSensorAverage(node, params, response.data));
            }).catch(function (response) {
                console.log(response)
                dispatch(fetchFailed(response.data));
            })
    }
}