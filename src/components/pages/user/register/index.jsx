import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import {
	inviteUser,
	getInvite,
	createUser
} from "actions/user"

class Register extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			stage: 0,
			verified: false,
			registered: false
		};
	}

	componentDidMount() {
		var key = this.props.location.query.k
		this.props.dispatch(getInvite(key))
	}

	getInvitorName() {
		let invitor = this.props.respond.data.invitor;
		var name = invitor.firstname + " " + invitor.lastname;
		if (name.length <= 1) {
			name = invitor.username;
		}
		return name;
	}

	getRoleText() {
		let role = this.props.respond.data.role;
		let res ="";
		config.roles.forEach((r) => {
			if (r.code == role) {
				res = r.singular;
			}
		})
		return res;
	}

	componentWillReceiveProps(nextProps) {
		console.log(this.state.stage, (nextProps.respond.status==200 || nextProps.respond.status==201));
		if (this.state.stage!=3 && (nextProps.respond.status==200 || nextProps.respond.status==201)) {
			if (!this.state.verified) {
				this.setState({stage: 1, verified: true});
			} else if (!this.state.registered) {
				this.setState({stage: 2, registered: true});
			}
		} else if (this.props.stage>0) {
			this.setState({stage: 3});
		}
	}

	submit() {
		var key = this.props.location.query.k
		var user = {}
		user.username = this.refs["username"].value;
		user.password = this.refs["password"].value;
		user.title = this.refs["title"].value;
		user.firstname = this.refs["firstname"].value;
		user.lastname = this.refs["lastname"].value;
		user.phone = this.refs["phone"].value;
		user.rootnodeid = 0; // server won't use this value anyway.
		user.companyid = 0; // server won't use this value anyway.
		this.props.dispatch(createUser(key, user))
	}

	render() {
		console.log(this.props, this.state)
		if (this.state.stage==0) { // 0 : key not verified
			return (<Expired/>);
		} else if (this.state.stage==1) { // 1 : key verified, not registered.
			return (
				<div>
					<div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
						<div className="row" style={{textAlign:"center"}}>
							<div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
						</div>
					</div>

					<div className="settings-wrapper">
						<div className="container-fluid">
							<div className="row">
								<div className="col-md-12">
									<h2 className="account-title">Welcome to SenzoLive!</h2>
									<p>
										<b>{this.getInvitorName()}</b> has added you as {this.getRoleText()} of <b>{this.props.respond.data.rootnodeinfo.name}</b>.<br/>
										<span>Please fill in following information to finalize your account.</span>
									</p>
									<form className="account-form welcome-form">
										<div className="account-email">
											<label>Email Address</label>
											<input type="email" value={this.props.respond.data.email} disabled="disabled"/>
										</div>
										<div className="account-username">
											<label>Username</label>
											<input type="text" ref="username"/>
										</div>
										<div className="account-password">
											<label>Password</label>
											<input type="password" ref="password"/>
										</div>
										<div className="account-title">
											<label>Title</label>
											<select disabled="disabled" ref="title">
												<option value="Mr." default="default">Mr</option>
												<option value="Ms.">Ms </option>
											</select>
										</div>
										<div className="account-firstname">
											<label>First Name		</label>
											<input type="text" ref="firstname"/>
										</div>
										<div className="account-lastname">
											<label>Last Name		</label>
											<input type="text" ref="lastname"/>
										</div>
										<div className="account-phone">
											<label>Phone		</label>
											<input type="tel" ref="phone"/>
										</div>
										{/*<div className="account-position">
											<label>Position</label>
											<input type="text" disabled="disabled" value={this.props.respond.data.role}/>
										</div>
										<div className="account-location">
											<label>Location</label>
											<select disabled="disabled">
												<option>{this.props.respond.data.rootnodeinfo.name}</option>
											</select>
										</div>*/}
										<div className="account-submit">
											<input type="button" value="Sign Up" onClick={this.submit.bind(this)}/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else if (this.state.stage==2) { // 2 : key verified, registered successfully.
			return <Success/>
		} else if (this.state.stage=3) { // 3 : key verified, registered failed.
			return <Fail/>
		} else {
			return (<div></div>);
		}
	}
}

function mapStateToProps(state) {
	return {
		respond: state.userReducer.respond,
		loading: state.userReducer.loading
	};
}

function mapDispatchToProps(dispatch) {
	return	{
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

class Expired extends React.Component {
	render() {
		return (
			<div>
				<div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
					<div className="row" style={{textAlign:"center"}}>
						<div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
					</div>
				</div>

				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12">
								<h2 className="account-title">What are you doing here ?</h2>
								<p>
								This invitation link is either invalid or has expired :(
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Success extends React.Component {
	render() {
		return (
			<div>
				<div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
					<div className="row" style={{textAlign:"center"}}>
						<div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
					</div>
				</div>

				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12" style={{textAlign:"center"}}>
								<h2 className="account-title text-green">Registered successfully !</h2>
								<p>
									Let's <a href="/login">log in</a> now !
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

class Fail extends React.Component {
	render() {
		return (	
			<div>
				<div style={{ width: '100%', backgroundColor: 'white', paddingBottom: '15px' }} className="container-fluid">
					<div className="row" style={{textAlign:"center"}}>
						<div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
					</div>
				</div>

				<div className="settings-wrapper">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-12" style={{textAlign:"center"}}>
								<h2 className="account-title text-red">Registered failed !</h2>
								<p>{this.props.message}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
