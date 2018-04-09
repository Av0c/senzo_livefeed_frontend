/*eslint-disable import/default */
/*eslint-disable import/namespace */
import React from 'react';
import ReactDOM from 'react-dom';
import favIcon from './favicon.ico';
import Frame from './frame';
import Store from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory, useRouterHistory } from 'react-router';
import appHistory from 'components/common/appHistory';

import LoginForm from './containers/login';
import ForgotPWForm from './containers/forgot';
import ResetPWForm from './containers/resetpassword';

import { requireAuthentication } from 'components/common/authenticatedComponent';

// Pages
import Overview from 'components/pages/overview';
import Comparison from 'components/pages/comparison';
import Stats from 'components/pages/stats';
import Live from 'components/pages/live';

import Locations from 'components/pages/locations/';
import DefaultSettings from 'components/pages/defaultsettings';

import MyAccount from 'components/pages/settings/myaccount';
import Password from 'components/pages/settings/myaccount/password';

import User from 'components/pages/user';
import Register from 'components/pages/user/register';

import SensorSettings from 'components/pages/sensorsettings';
import Help from 'components/pages/help';
import LiveFeedAPI from 'components/pages/livefeedapi';
// --

import CountriesAndTimezones from 'countries-and-timezones';
import { initializeIcons } from '@uifabric/icons';
import toastr from "toastr"

toastr.options = {
	"closeButton": true,
	"debug": true,
	"newestOnTop": false,
	"progressBar": false,
	"positionClass": "toast-bottom-right",
	"preventDuplicates": true,
	"onclick": null,
	"showDuration": "300",
	"hideDuration": "300",
	"timeOut": "3000",
	"extendedTimeOut": "1000",
	"showEasing": "swing",
	"hideEasing": "linear",
	"showMethod": "fadeIn",
	"hideMethod": "fadeOut"
}

CountriesAndTimezones.getAllCountries()["--"] = {
    "id": "--",
    "name": "--",
    "timezones": ["UTC"],
}
CountriesAndTimezones.getAllTimezones()["UTC"] = {
    "name": "UTC",
    "utcOffset": 0,
    "offsetStr": "00:00",
    "countries": ["--"],
}
document.charts = {};

initializeIcons();
ReactDOM.render((
	<Provider store={Store}>
		<Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={requireAuthentication(Frame)}>
				<IndexRoute component={Overview} />

				<Route path="/locations" component={Locations}/>

				<Route path="/comparison" component={Comparison} />
				<Route path="/statistic/:id" component={Stats} />
				<Route path="/live/:id" component={Live} />
				<Route path="/live/:id/heatmap" component={Live} />

				<Route path="/user" component={User} />
				<Route path="/help" component={Help} />
				<Route path="/api" component={LiveFeedAPI} />

				<Route path="/settings">
					<Route path="/settings/default" component={DefaultSettings} />
					<Route path="/settings/sensor" component={SensorSettings} />
					<Route path="/settings/ownaccount" component={MyAccount} />
					<Route path="/settings/ownaccount/password" component={Password} />
				</Route>
			</Route>
			<Route path="/login" component={LoginForm} />
			<Route path="/forgot" component={ForgotPWForm} />
			<Route path="/resetpassword" component={ResetPWForm} />
			<Route path="/invitation" component={Register} />
		</Router>
	</Provider>
), document.getElementById('app'));
