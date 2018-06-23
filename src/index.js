
import React from 'react';
import ReactDOM from 'react-dom';
import favIcon from './favicon.ico';

// DELETE EVERYTHING NOT NEEDED (AND THIS LINE AFTER TOO)
import Store from './store';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory, useRouterHistory } from 'react-router';
import appHistory from 'components/common/appHistory';

import LoginForm from './containers/login';
import ForgotPWForm from './containers/forgot';
import ResetPWForm from './containers/resetpassword';

import { requireAuthentication } from 'components/common/authenticatedComponent';

// Pages
import Main from 'components/main';

// Stylesheets
import './style/main.less';

ReactDOM.render((
	<Provider store={Store}>
		<Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" >
				<IndexRoute component={Main} />
			</Route>
			<Route path="/login" component={LoginForm} />
		</Router>
	</Provider>
), document.getElementById('app'));
