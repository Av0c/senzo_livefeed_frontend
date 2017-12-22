import axios from 'axios';
import config from 'config';
import appHistory from 'components/common/appHistory';

export const FETCH_LIVE_DATA = "FETCH_LIVE_DATA";
export const RECEIVE_LIVE_DATA = "RECEIVE_LIVE_DATA";
export const FETCH_FAILED = "FETCH_FAILED";
export const SELECT_NODE_STATS = "SELECT_NODE_STATS";
export const UPDATE_NODE_IN_PROGRESS = "UPDATE_NODE_IN_PROGRESS";
export const UPDATE_FAILED = "UPDATE_FAILED";
export const UPDATE_NODE_SUCCESSFULLY = "UPDATE_NODE_SUCCESSFULLY";
export const CREATE_NODE_IN_PROGRESS = "CREATE_NODE_IN_PROGRESS";
export const CREATE_NODE_SUCCESSFULLY = "CREATE_NODE_SUCCESSFULLY";
export const CREATE_FAILED = "CREATED_FAILED";
export const DELETE_NODE_IN_PROGRESS = "DELETE_NODE_IN_PROGRESS";
export const DELETE_NODE_SUCCESSFULLY = "DELETE_NODE_SUCCESSFULLY";
export const DELETE_FAILED = "DELETE_FAILED";
export const ADD_FLOORPLAN_IN_PROGRESS = "ADD_FLOORPLAN_IN_PROGRESS";
export const ADD_FLOORPLAN_SUCCESSFULLY = "ADD_FLOORPLAN_SUCCESSFULLY";
export const ADD_FLOORPLAN_FAILED = "ADD_FLOORPLAN_FAILED";
export const UPLOAD_IMAGE_FAILED = 'UPLOAD_IMAGE_FAILED';
export const UPLOAD_IMAGE_SUCCESSFUL = 'UPLOAD_SUCCESSFUL';
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';
export const SET_PARENT_IN_PROGRESS = 'SET_PARENT_IN_PROGRESS';
export const SET_PARENT_SUCCESSFULLY = 'SET_PARENT_SUCCESSFULLY';
export const SET_PARENT_FAILED = 'SET_PARENT_FAILED';

export function setParentInProgess() {
  return {
    type: SET_PARENT_IN_PROGRESS
  };
}

export function setParentSuccessfully(data) {
  return {
    type: SET_PARENT_SUCCESSFULLY,
    data
  }
}

export function setParentFailed(){
  return {
    type: SET_PARENT_FAILED,
    data
  }
}

export function updateNodeInProgress() {
  return {
    type: UPDATE_NODE_IN_PROGRESS
  };
}

export function updateFailed(data) {
  return {
    type: UPDATE_FAILED,
    data
  };
}

export function updateNodeSuccessfully(data) {
  return {
    type: UPDATE_NODE_SUCCESSFULLY,
    data
  }
}

export function createNodeInProgress() {
  return {
    type: CREATE_NODE_IN_PROGRESS
  };
}

export function createFailed(data) {
  return {
    type: CREATE_FAILED,
    data
  };
}

export function createNodeSuccessfully(data) {
  return {
    type: CREATE_NODE_SUCCESSFULLY,
    data
  }
}

export function deleteNodeInProgress() {
  return {
    type: DELETE_NODE_IN_PROGRESS
  };
}

export function deleteFailed(data) {
  return {
    type: DELETE_FAILED,
    data
  };
}

export function deleteNodeSuccessfully(data) {
  return {
    type: DELETE_NODE_SUCCESSFULLY,
    data
  }
}

export function uploadImage (data){
  return {
    type:UPLOAD_IMAGE,
    data
  }
}

export function uploadImageFailed() {
  return {
    type: UPLOAD_IMAGE_FAILED
  }
}

export function uploadImageSuccessful() {
  return {
    type: UPLOAD_IMAGE_SUCCESSFUL
  }
}

export function updateNode(node) {
  return dispatch => {
    dispatch(updateNodeInProgress());
    return axios.put(config.api.root + `/node/update/${node.id}`, node)
      .then((response) => {
        dispatch(updateNodeSuccessfully(response.data));
      })
      .catch(function (response) {
        dispatch(updateFailed(response.data));
      })
  }
}

export function createNode(id, node) {
  return dispatch => {
    dispatch(createNodeInProgress());
    return axios.post(config.api.root + `/node/create/${id}`, node)
      .then((response) => {
        dispatch(createNodeSuccessfully(response.data));
        return response.data;
      })
      .catch(function (response) {
        dispatch(createFailed(response.data));
      })
  }
}

export function deleteNode(node) {
  return dispatch => {
    dispatch(deleteNodeInProgress());
    return axios.delete(config.api.root + `/node/delete/${node.id}`)
      .then((response) => {
        dispatch(deleteNodeSuccessfully(response.data));
      })
      .catch(function (response) {
        dispatch(deleteFailed(response.data));
      })
  }
}

export function uploadFloorplanView(id, image) {
  let formData = new FormData();
  formData.append('floorplan', image);
  let axiosConfig = {
    headers: {'Content-Type': 'multipart/form-data'}
  };
  return dispatch => {
    dispatch(uploadImage(image));
    return axios.post(config.api.root + `/node/image/upload/${id}`, formData, axiosConfig)
      .then((response) => {
        dispatch(uploadImageSuccessfully(response.data));
      })
      .catch(function (response) {
        dispatch(uploadImageFailed());
      })
  }
}

export function selectNodeStats(node) {
  appHistory.push("/statistic");
}

export function fetchLiveData(id) {
  return {
    type: FETCH_LIVE_DATA,
    id
  };
}

export function receiveLiveData(response) {
  return {
    type: RECEIVE_LIVE_DATA,
    data: response.data
  };
}

export function fetchFailed(data) {
  return {
    type: FETCH_FAILED,
    data
  };
}

export function getLiveData(id) {
  return dispatch => {
    dispatch(fetchLiveData(id));
    axios.get(config.api.root + '/sensor/live/' + id)
      .then((response) => {
        dispatch(receiveLiveData(response.data));
      })
      .catch(function (response) {
        dispatch(fetchFailed(response.data));
      });
  };
}

export function setParent(id1, id2) {
  return dispatch => {
    dispatch(setParentInProgess());
    return axios.put(config.api.root+`/node/setparent/${id1}/${id2}`).then((response) => {
      dispatch(setParentSuccessfully(response.data));
    })
    .catch((response) => {
      dispatch(setParentFailed(response.data));
    });
  }
}