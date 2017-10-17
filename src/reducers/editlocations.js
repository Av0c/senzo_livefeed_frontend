import axios from 'axios';
import config from 'config';
import { Effects, loop } from 'redux-loop';

import {
  CREATE_AREA,
  CREATE_AREA_FAILED,
  createFailed,
  CREATE_LOCATION,
  CREATE_LOCATION_FAILED,
  REMOVE_COMPLETED,
  REMOVE_FAILED,
  removeFailed,
  REMOVE_AREA,
  REMOVE_LOCATION,
  UPDATE_AREA,
  UPDATE_FAILED,
  UPDATE_LOCATION,
  updateFailed
} from 'actions/editlocations'

import {fetchCustomerOrganization} from 'actions/organization';

const initialState = {
  areaUpdated: true,
  loading: false,
  location: {
    name: '',
    type: '',
    areaType: ''
  },
  locationUpdated: false,
  newAreaAdded: false,
  newLocationAdded: false,
  removeCompleted: false,
  savedArea: {},
  savedLocation: {},
  updatedOrganization: {data:'none'}
}

function updateArea(area){
  return axios.put(config.api.root + '/api/area', {
    name: area.name,
    id: area.id,
    isMeetingRoom: area.isMeetingRoom,
    siteId:area.siteId
  })
    .then(fetchCustomerOrganization)
    .catch(updateFailed);
}

function updateLocation(location){
  let parentId = 0;
  if (location.parentId){
    parentId = location.parentId;
  }
  return axios.put(config.api.root + '/api/site', {
    name: location.name,
    customerId: location.customerId,
    id: location.id,
    parentId: parentId

  })
    .then(fetchCustomerOrganization)
    .catch(updateFailed);
}

function removeArea(areaId){
  return axios.delete(`${config.api.root}/api/area/${areaId}`)
    .then(fetchCustomerOrganization)
    .catch(removeFailed);
}
function removeLocation(locationId){
  return axios.delete(`${config.api.root}/api/site/${locationId}`)
    .then(fetchCustomerOrganization)
    .catch(removeFailed);
}


function createLocation(location){
  let parentId = 0;
  if (location.id){
    parentId = location.id;
  }
  return axios.post(config.api.root + '/api/site', {
    name: location.name,
    customerId: location.customerId,
    parentId: parentId
  })
    .then(fetchCustomerOrganization)
    .catch(createFailed);
}

function createArea(area){
  return axios.post(config.api.root + '/api/area', {
    name: area.name,
    customerId: area.customerId,
    isMeetingRoom: area.isMeetingRoom,
    siteId: area.siteId
  })
    .then(fetchCustomerOrganization)
    .catch(createFailed);
}

export default (state = initialState, action ) => {

  switch (action.type) {

    case CREATE_LOCATION: {
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.promise(createLocation,action.data)
      )
    }
    case REMOVE_AREA:{
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.promise(removeArea,action.areaId)
      )
    }
    case REMOVE_LOCATION: {
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.promise(removeLocation,action.id)
      )
    }
    case CREATE_AREA: {
      return loop (
        Object.assign({}, initialState, {loading:true}),
        Effects.promise(createArea,action.data)
      )
    }

    case REMOVE_COMPLETED: {
      return Object.assign({}, state, {
        loading: false,
        removeCompleted: true
      })
    }

    case CREATE_LOCATION_FAILED: {
      return Object.assign({}, state, {
        loading: false
      })
    }

    case CREATE_AREA_FAILED: {
      return Object.assign({}, state, {
        loading: false
      })
    }

    case UPDATE_LOCATION: {
      return loop (
        Object.assign({}, initialState, {loading:true}),
        Effects.promise(updateLocation,action.location)
      )
    }

    case UPDATE_AREA: {
      return loop (
        Object.assign({}, initialState, {loading:true}),
        Effects.promise(updateArea,action.area)
      )
    }

    case UPDATE_FAILED: {
      return Object.assign({}, state, {
        loading: false
      })
    }

    default: {
      return state
    }
  }
}
