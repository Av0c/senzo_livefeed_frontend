import axios from 'axios';
import config from 'config';
import * as Comparison from 'actions/comparison';
import store from '../store';

export const FETCH_OCCUPANCY_OVERVIEW = 'FETCH_OCCUPANCY_OVERVIEW';
export const RECEIVE_OCCUPANCY_OVERVIEW = 'RECEIVE_OCCUPANCY_OVERVIEW';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_STATS_DAILY = 'FETCH_STATS_DAILY';
export const RECEIVE_STATS_DAILY = 'RECEIVE_STATS_DAILY';
export const RECEIVE_OCCUPANCY_RANGE = 'RECEIVE_OCCUPANCY_RANGE';
export const FETCH_STATS_BREAKDOWN = 'FETCH_STATS_BREAKDOWN';
export const RECEIVE_STATS_BREAKDOWN = 'RECEIVE_STATS_BREAKDOWN';
export const FETCH_NODE_STATS = "FETCH_NODE_STATS";
export const RECEIVE_NODE_STATS = "RECEIVE_NODE_STATS";
export const RESET_OVERVIEW_STATS = "RESET_OVERVIEW_STATS";

export function resetOverviewStats() {
    return {
        type: RESET_OVERVIEW_STATS
    }
}

export function fetchOccupancyOverview() {
    return {
        type: FETCH_OCCUPANCY_OVERVIEW
    };
}

export function receiveOccupancyOverview(data) {
    return {
        type: RECEIVE_OCCUPANCY_OVERVIEW,
        data
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

export function fetchNodeStats() {
    return {
        type: FETCH_NODE_STATS
    };
}

export function receiveNodeStats(data) {
    return {
        type: RECEIVE_NODE_STATS,
        data
    };
}

export function fetchStatsDaily() {
    return {
        type: FETCH_STATS_DAILY
    };
}

export function receiveStatsDaily(data) {
    return {
        type: RECEIVE_STATS_DAILY,
        data
    };
}

export function fetchStatsBreakdown() {
    return {
        type: FETCH_STATS_BREAKDOWN
    };
}

export function receiveStatsBreakdown(data) {
    return {
        type: RECEIVE_STATS_BREAKDOWN,
        data
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
        from: nextProps.querySettings.startdate,
        to: nextProps.querySettings.enddate,
        starthour: nextProps.querySettings.starthour,
        endhour: nextProps.querySettings.endhour-1,
        weekdaymask: nextProps.querySettings.weekdaymask,
        marks: nextProps.querySettings.marks,
        groupby: nextProps.querySettings.groupby
    }
    var cards = store.getState().defaultSettingsReducer.card

    if (!(0 <= params.starthour && params.starthour <= 23)) {
        params.starthour = cards[nextProps.currentNode.info.cardid].starthour
    }
    if (!(0 <= params.endhour && params.endhour <= 23)) {
        params.endhour = cards[nextProps.currentNode.info.cardid].endhour-1
    }
    if (!checkWeekdayMask(params.weekdaymask)) {
        params.weekdaymask = cards[nextProps.currentNode.info.cardid].weekdaymask
    }

    if (nextProps.querySettings.tag == 'Occupancy') {
        params.tag = nextProps.querySettings.room.occupancyTag;
    }
    else {
        params.tag = nextProps.querySettings.room.efficiencyTag || nextProps.querySettings.room.occupancyTag;
    }
    console.log(params)
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
        dispatch(fetchOccupancyOverview());
        axios.get(config.api.root + `/stats/overview/${params.id}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}`)
            .then((response) => {
                if (params.action == Comparison.RECEIVE_FIRST_LOCATION_OVERVIEW) {
                    dispatch(Comparison.receiveFirstLocationOverview(node, response.data));
                }
                else if (params.action == Comparison.RECEIVE_SECOND_LOCATION_OVERVIEW) {
                    dispatch(Comparison.receiveSecondLocationOverview(node, response.data));
                }
                else {
                    dispatch(receiveOccupancyOverview({ data: response.data, node: node }));
                }
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })
    }
}

export function getNodeSeriesStats(params) {
    return dispatch => {
        dispatch(fetchNodeStats());
        axios.get(config.api.root + `/stats/series/${params.id}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}&groupby=${params.groupby}`)
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
        dispatch(fetchStatsDaily());
        axios.get(config.api.root + `/stats/weekdayXhour/${params.id}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}`)
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
        dispatch(fetchStatsBreakdown());
        axios.get(config.api.root + `/stats/overviewlist/${JSON.stringify(params.id)}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&weekdaymask=${params.weekdaymask}&marks=${JSON.stringify(params.marks)}`)
            .then((response) => {
                dispatch(receiveStatsBreakdown(response.data));
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })
    }
}
