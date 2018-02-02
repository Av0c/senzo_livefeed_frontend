import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import * as a from "actions/user"

class Register extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			message: "",
			messageClass: ""
		};
	}

	componentDidMount() {
		var key = this.props.location.query.k
		this.props.dispatch(a.checkInviteKey(key))
	}

	componentWillReceiveProps(nextProps) {
		switch (nextProps.stage) {
			case "create-failed" :
				this.setState({
					message: "Create new account failed : " + nextProps.respond.statusText.data,
					messageClass: "text-red"
				});
				break;
			default:
				this.setState({
					message: "",
					messageClass: ""
				})
		}
	}

	getInvitor() {
		let invitor = this.props.invitation.invitor;
		var name = invitor.firstname + " " + invitor.lastname;
		if (name.length <= 1) {
			name = invitor.username;
		}
		return name;
	}
	getRole() {
		let role = this.props.invitation.role;
		let res ="";
		config.roles.forEach((r) => {
			if (r.code == role) {
				res = r.singular;
			}
		})
		return res;
	}
	getLocation() {
		return this.props.invitation.rootnodeinfo.name;
	}
	getEmail() {
		return this.props.invitation.email;
	}

	submit(key) {
		var user = {}
		user.username = this.refs["username"].value;
		user.password = this.refs["password"].value;
		user.email = this.refs["email"].value
		user.title = this.refs["title"].value;
		user.firstname = this.refs["firstname"].value;
		user.lastname = this.refs["lastname"].value;
		user.phone = this.refs["phone"].value;
		user.position = this.refs["position"].value;
		user.address = this.refs["address"].value;
		user.rootnodeid = 0; // server won't use this value anyway.
		user.companyid = 0; // server won't use this value anyway.
		user.role = "ADMIN" // server won't use this value anyway.
		this.props.dispatch(a.createUser(key, user))
	}

	render() {
		switch (this.props.stage) {
			case "keychecked" :
			case "creating" :
			case "create-failed" :
				return (
					<Form
						inviteKey={this.props.location.query.k}
						invitor={this.getInvitor()}
						role={this.getRole()}
						location={this.getLocation()}
						submit={this.submit}
						email={this.getEmail()}
						message={this.state.message}
						messageClass={this.state.messageClass}
					/>
				);
			case "created" :
				return <Success/>
			default :
				return (<Expired/>);
		}
	}
}

function mapStateToProps(state) {
	return {
		stage: state.userRegisterReducer.stage,
		invitation: state.userRegisterReducer.invitation,
		respond: state.userRegisterReducer.respond
	};
}

function mapDispatchToProps(dispatch) {
	return	{
		dispatch
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// Child comps

class Form extends React.Component {
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
								<h2 className="account-title">Welcome to SenzoLive!</h2>
								<p>
									<b>{this.props.invitor}</b> has added you as {this.props.role} of <b>{this.props.location}</b>.<br/>
									<span>Please fill in following information to finalize your account.</span>
								</p>
								<form className="account-form welcome-form">
									<div className="account-email">
										<label>Email Address</label>
										<input type="email" value={this.props.email} disabled="disabled" ref="email"/>
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
										<select ref="title">
											<option value="Mr." default="default">Mr.</option>
											<option value="Ms/Mrs.">Ms/Mrs.</option>
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
									<div className="account-position">
										<label>Position</label>
										<input type="text" ref="position"/>
									</div>
									<div className="account-phone">
										<label>Phone		</label>
										<input type="tel" ref="phone"/>
									</div>
									<div className="account-location">
										<label>Address</label>
										<input type="text" ref="address"/>
									</div>
									<div className="register-message">
										<label></label>
										<span className={this.props.messageClass}> {this.props.message} </span>
									</div>
									<div className="account-submit">
										<input type="button" value="Sign Up" onClick={this.props.submit.bind(this, this.props.inviteKey)}/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Form = connect(null, mapDispatchToProps)(Form)

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
								<p style={{width: "50%", fontSize:"15px"}}>
									It seems that this link has expired or invalid. Please contact your company´s SenzoLive administrator and ask for a new invitation.								</p>
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
									Let's <Link to={'/login'}>log in</Link> now !
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
