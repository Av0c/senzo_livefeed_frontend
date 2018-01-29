export const RECEIVE_FIRST_LOCATION_TOTAL = 'RECEIVE_FIRST_LOCATION_TOTAL';
export const RECEIVE_SECOND_LOCATION_TOTAL = 'RECEIVE_SECOND_LOCATION_TOTAL';
export const RECEIVE_FIRST_LOCATION_RANGE = 'RECEIVE_FIRST_LOCATION_RANGE';
export const RECEIVE_SECOND_LOCATION_RANGE = 'RECEIVE_SECOND_LOCATION_RANGE';
export const RECEIVE_FIRST_LOCATION_DAILY = 'RECEIVE_FIRST_LOCATION_DAILY';
export const RECEIVE_SECOND_LOCATION_DAILY = 'RECEIVE_SECOND_LOCATION_DAILY';

export const COMPARISON_PUT_NODE = "COMPARISON_PUT_NODE"
export function putNode(node, pos) {
    return {
        type: COMPARISON_PUT_NODE,
        node, pos,
    }
}

export function receiveFirstLocationTotal(data) {
    return {
        type: RECEIVE_FIRST_LOCATION_TOTAL,
        data
    };
}

export function receiveSecondLocationTotal(data) {
    return {
        type: RECEIVE_SECOND_LOCATION_TOTAL,
        data
    };
}

export function receiveFirstLocationRange(data) {
    return {
        type: RECEIVE_FIRST_LOCATION_RANGE,
        data
    };
}

export function receiveSecondLocationRange(data) {
    return {
        type: RECEIVE_SECOND_LOCATION_RANGE,
        data
    };
}

export function receiveFirstLocationDaily(data) {
    return {
        type: RECEIVE_FIRST_LOCATION_DAILY,
        data
    };
}

export function receiveSecondLocationDaily(data) {
    return {
        type: RECEIVE_SECOND_LOCATION_DAILY,
        data
    };
}