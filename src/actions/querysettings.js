export const SELECT_PERIOD = 'SELECT_PERIOD';
export const SELECT_MODE = 'SELECT_MODE';
export const APPLY_DATES = 'APPLY_DATES';

export function selectPeriod(period) {
  return {
    type: SELECT_PERIOD,
    period
  }
}

export function selectMode(mode) {
  return {
    type: SELECT_MODE,
    mode
  }
}

export function applyDates(dates) {
  return {
    type: APPLY_DATES,
    dates
  }
}
