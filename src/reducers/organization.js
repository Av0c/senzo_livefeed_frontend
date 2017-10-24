import axios from 'axios';
import config from 'config';
import history from 'components/common/appHistory';
import { Effects, loop } from 'redux-loop';
import {
  FETCH_CUSTOMER_ORGANIZATION,
  receiveCustomerOrganization,
  RECEIVE_CUSTOMER_ORGANIZATION,
  fetchingFailed,
  FETCHING_FAILED,
  SELECT_LOCATION,
  SELECT_SITE
} from 'actions/organization';

import lodash from 'lodash';

const initialState = {
  customer: "Senzoit Oy",
  selectedSite: {
    name: '',
    id: 0
  },
  selectedArea: {
    name: '',
    id: 0
  },
  organization: [],
  loading: false,
  breadcrumbs: []
};

function fetchCustomerOrganization() {
  return axios.get(config.api.root + '/api/customer/organization')
    .then( (result) => {
      return receiveCustomerOrganization(result);
    })
    .catch( (error) => {
      return fetchingFailed(error);
    });
}

// Reducing function
export default (state = initialState, action ) => {
  switch (action.type) {

    case FETCH_CUSTOMER_ORGANIZATION: {
      return loop (
        Object.assign({}, initialState, {loading: true}),
        Effects.promise(fetchCustomerOrganization)
      );
    }

    case RECEIVE_CUSTOMER_ORGANIZATION: {
      var customerRoot = {
        name: state.customer,
        children: action.data
      };
      let stack = buildBreadcrumbPath(customerRoot, action.data[0].id, []);
      return Object.assign({}, initialState, {
        organization: customerRoot.children,
        breadcrumbs: stack
      })
    }
    case SELECT_LOCATION: {
      return Object.assign({}, state, {
        selectedArea: action.area,
        selectedSite: initialState.selectedSite
      })
    }

    case SELECT_SITE: {
      let root = {
        id: 0,
        children: state.organization
      };
      let endOfStack = [].concat(state.breadcrumbs).pop();
      let stack = buildBreadcrumbPath(root, action.site.id, []);

      if (endOfStack && endOfStack.id == action.site.id) {
        stack.pop()
      }

      return Object.assign({}, state, {
        selectedSite: action.site,
        selectedArea: initialState.selectedArea,
        breadcrumbs: stack
      })
    }

    default: {
      return state;
    }
  }
}

/**
 * Collects all sensorIds for selected organization level.
 */
function collectSensorIds(organization) {
  var areas = organization.areas || [];
  var sensorIds = areas.map( area => {
    return area.sensors
  });
  var children = organization.children || [];
  var childSensors = lodash.flattenDeep(children.map(collectSensorIds));
  return sensorIds.concat(childSensors)
}

 /**
 * Builds path stack to be used in breadcrumbs.
 */
function buildBreadcrumbPath(organization, id, stack) {
  if (organization.id == id) {
    return stack;
  }
  let children = organization.children || [];

  return children.map( (org) =>{
    return buildBreadcrumbPath(org, id, stack.concat(org))
  }).filter(arr => arr.length > 0)[0] || [];
}

/**
 * Used to flatten hierarchial structure to list of ids
 */
function traverseChildren(organization) {
  var flat = lodash.concat([organization], lodash.pick('children'));
  var children = organization.children || [];
  var grandChildren = children.map(traverseChildren);
  return flat.concat(grandChildren)
}
