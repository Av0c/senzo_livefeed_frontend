export const CREATE_AREA = 'CREATE_AREA';
export const CREATE_FAILED = 'CREATE_FAILED';
export const CREATE_LOCATION = 'CREATE_LOCATION';
export const REMOVE_AREA = 'REMOVE_AREA';
export const REMOVE_COMPLETED = 'REMOVE_COMPLETED';
export const REMOVE_FAILED = 'REMOVE_FAILED';
export const REMOVE_LOCATION = 'REMOVE_LOCATION';
export const UPDATE_AREA = 'UPDATE_AREA';
export const UPDATE_FAILED = 'UPDATE_FAILED';
export const UPDATE_LOCATION = 'UPDATE_LOCATION';



export function updateLocation(location){
  return {
    type: UPDATE_LOCATION,
    location
  }
}

export function updateLocationCompleted(){
  return {
    type: UPDATE_LOCATION_COMPLETED
  }
}

export function updateAreaCompleted(){
  return {
    type: UPDATE_AREA_COMPLETED
  }
}

export function updateFailed(){
  return {
    type: UPDATE_FAILED
  }
}

export function updateArea(area){
  return {
    type: UPDATE_AREA,
    area
  }
}

export function createArea(data) {
  return {
    type: CREATE_AREA,
    data
  }
}

export function createLocation(data) {
  return {
    type: CREATE_LOCATION,
    data
  }
}

export function createFailed(error) {
  return {
    type: CREATE_FAILED,
    error
  }
}

export function removeArea(areaId){
  return {
    type: REMOVE_AREA,
    areaId
  }
}

export function removeLocation(id) {
  return {
    type: REMOVE_LOCATION,
    id
  }
}

export function removeFailed() {
  return {
    type: REMOVE_FAILED
  }
}

export function removeCompleted() {
  return {
    type: REMOVE_COMPLETED
  }
}
