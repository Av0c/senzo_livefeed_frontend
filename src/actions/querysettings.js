export const SELECT_PERIOD = 'SELECT_PERIOD';
export const SELECT_MODE = 'SELECT_MODE';
export const SELECT_TAG = 'SELECT_TAG';

export function selectTag(tag) {
  return {
    type: SELECT_TAG,
    tag
  };
}

export function selectPeriod(period){
  return {
    type: SELECT_PERIOD,
    period
  };
}




