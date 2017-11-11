/*eslint-disable import/default */
/*eslint-disable import/namespace */
import React from 'react';
import ReactDOM from 'react-dom';
import favIcon from './favicon.ico';
import Frame from './frame';
import Store from './store';
import login from './containers/login';
import register from './containers/register';
import Settings from './components/pages/settings/settings';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory, useRouterHistory } from 'react-router';
import { requireAuthentication } from 'components/common/authenticatedComponent';
import appHistory from 'components/common/appHistory';

import Locations from 'components/pages/locations/';
import LocationsIntroPage from 'components/pages/locations/intropage';
import SiteView from 'components/pages/locations/site';
import AreaView from 'components/pages/locations/area';
import MeetingRoomView from 'components/pages/locations/meetingroom';

import Overview from 'components/pages/overview/index';

import MyAccount from 'components/pages/settings/myaccount/index';
import Password from 'components/pages/settings/myaccount/password';
import EditLocations from 'components/pages/settings/editlocations/index';
import EditAreas from 'components/pages/settings/editareas/index';
import EditSensors from 'components/pages/settings/editsensors/index';
import Users from 'components/pages/settings/users';
import CreateUser from 'components/pages/settings/users/create';
import EditUser from 'components/pages/settings/users/edit';

import Customers from 'components/pages/settings/customers';
import CreateCustomer from 'components/pages/settings/customers/create';
import EditCustomer from 'components/pages/settings/customers/edit';

import Profile from 'components/pages/profile';
import FloorPlan from 'components/pages/locations/area/floorplan/index';
import AddFloorPlan from 'components/pages/addfloorplan';
import Stats from 'components/pages/stats';



ReactDOM.render((
  <Provider store={Store}>
    <Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={requireAuthentication(Frame)}>
        <IndexRoute component={Overview} />

        <Route path="/locations" component={Locations}>
          <IndexRoute component={LocationsIntroPage} />
          <Route path="/locations/site/:id" component={SiteView} />
          <Route path="/locations/area/:id" component={AreaView} />
          <Route path="/locations/meetingroom/:id" component={MeetingRoomView} />
          <Route path="/locations/area/:id/floorplan" component={FloorPlan} />
          <Route path="/locations/area/:id/sensor/:sensorId" component={FloorPlan} />
        </Route>
        <Route path="/profile" component={Profile} />
        <Route path="/statistic/:id" component={Stats} />

        <Route path="/locations/area/:id/floorplan/add" component={AddFloorPlan} />
        <Route path="/settings" component={Settings}>
          <Route path="/settings/myaccount/password" component={Password} />
          <Route path="/settings/myaccount" component={MyAccount} />
          <Route path="/settings/locations/edit" component={EditLocations} />
          <Route path="/settings/areas/edit" component={EditAreas} />
          <Route path="/settings/sensors/edit" component={EditSensors} />
          <Route path="/settings/users/" >
            <IndexRoute component={Users} />
            <Route path="/settings/users/create" component={CreateUser} />
            <Route path="/settings/users/edit/:id" component={EditUser} />
          </Route>
          <Route path="/settings/customers/" >
            <IndexRoute component={Customers} />
            <Route path="/settings/customers/create" component={CreateCustomer} />
            <Route path="/settings/customers/edit/:id" component={EditCustomer} />
          </Route>
        </Route>
      </Route>
      <Route path="/login" component={login} />
      <Route path="/register" component={register} />
    </Router>
  </Provider>
), document.getElementById('app'));
