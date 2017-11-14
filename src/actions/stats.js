import axios from 'axios';
import config from 'config';

export const FETCH_OCCUPANCY_OVERVIEW = 'FETCH_OCCUPANCY_OVERVIEW';
export const RECEIVE_OCCUPANCY_OVERVIEW = 'RECEIVE_OCCUPANCY_OVERVIEW';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_NODE_STATS = 'FETCH_NODE_STATS';
export const RECEIVE_NODE_STATS = 'RECEIVE_NODE_STATS';

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

export function getParams(nextProps) {
    let params = {
        id: nextProps.currentNode.id,
        from: nextProps.querySettings.startdate,
        to: nextProps.querySettings.enddate,
        starthour: nextProps.currentNode.info.WH_from,
        endhour: nextProps.currentNode.info.WH_to,
        startweekday: nextProps.querySettings.startweekday,
        endweekday: nextProps.querySettings.endweekday,
        marks: nextProps.querySettings.marks,
        groupby: nextProps.querySettings.groupby
    }
    if (nextProps.querySettings.tag == 'Occupancy') {
        params.tag = nextProps.querySettings.room.occupancyTag;
    }
    else {
        params.tag = nextProps.querySettings.room.efficiencyTag || nextProps.querySettings.room.occupancyTag;
    }
    return params;
}
export function getOccupancyOverview(params) {
    return dispatch => {
        dispatch(fetchOccupancyOverview());
        axios.get(config.api.root + `/stats/overview/${params.id}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&startweekday=${params.startweekday}&endweekday=${params.endweekday}&marks=${JSON.stringify(params.marks)}`)
            .then((response) => {
                dispatch(receiveOccupancyOverview(response.data));
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })
    }
}

export function getNodeSeriesStats(params) {
    return dispatch => {
        dispatch(fetchNodeStats());
        axios.get(config.api.root + `/stats/series/${params.id}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&startweekday=${params.startweekday}&endweekday=${params.endweekday}&marks=${JSON.stringify(params.marks)}&groupby=${params.groupby}`)
            .then((response) => {
                dispatch(receiveNodeStats(response.data));
            })
            .catch(function (response) {
                dispatch(fetchFailed(response.data));
            })
    }
}

export function getNodeStatsByHours(params) {
    return dispatch => {
        dispatch(fetchNodeStats());
        if (params.from == params.to) {
            axios.get(config.api.root + `/stats/weekdayXhour/${params.id}/${params.tag}?startdate=${params.from}&enddate=${params.to}&starthour=${params.starthour}&endhour=${params.endhour}&startweekday=${params.startweekday}&endweekday=${params.endweekday}&marks=${JSON.stringify(params.marks)}`)
                .then((response) => {
                    dispatch(receiveNodeStats(response.data));
                })
                .catch(function (response) {
                    dispatch(fetchFailed(response.data));
                })
        }
    }
}
