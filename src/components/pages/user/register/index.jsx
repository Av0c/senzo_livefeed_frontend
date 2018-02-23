import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import config from "config"
import * as a from "actions/user"
import toastr from "toastr"

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
		config.roles.forEach((r, idx) => {
			if (idx == 0) {
				if (role == "ADMIN" && this.props.invitation.rootnode.type=="customer") {
					res = r.singular;
				}
			} else {
				if (res=="" && r.code.substring(1) == role) {
					res = r.singular;
				}
			}
		})
		return res;
	}
	getLocation() {
		return this.props.invitation.rootnode.info.name;
	}
	getEmail() {
		return this.props.invitation.email;
	}

	checkUser(user) {
		var ok = true;
		var badKeys = {};
		Object.keys(user).map((key) => {
			if (user[key] === "") {
				badKeys[key] = true;
				ok = false;
			} else {
				badKeys[key] = false;
			}
		});
		if (user.password != user.password2) {
			badKeys["password2"] = true;
		}
		this.setState(badKeys);
		return ok;
	}

	submit(key, refs) {
		var user = {}
		user.username = refs["username"].value;
		user.password = refs["password"].value;
		user.password2 = refs["password2"].value;
		user.email = refs["email"].value
		user.title = refs["title"].value;
		user.firstname = refs["firstname"].value;
		user.lastname = refs["lastname"].value;
		user.phone = refs["phone"].value;
		user.position = refs["position"].value;
		user.address = refs["address"].value;
		user.rootnodeid = 0; // server won't use this value anyway.
		user.companyid = 0; // server won't use this value anyway.
		user.role = "ADMIN" // server won't use this value anyway.
		if (this.checkUser(user)) {
			this.props.dispatch(a.createUser(key, user))
		} else {
			toastr.error("Please provide all missing fields !")
		}
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
						submit={this.submit.bind(this)}
						email={this.getEmail()}
						message={this.state.message}
						messageClass={this.state.messageClass}
						badKeys={this.state}
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
		var badKeys = this.props.badKeys;
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
									<b>{this.props.invitor}</b> has added you as <b>{this.props.role}</b> of <b>{this.props.location}</b>.<br/>
									<span>Please fill in following information to finalize your account.</span>
								</p>
								<form className="account-form welcome-form">
									<div className="account-email">
										<label>Email Address</label>
										<input type="email" value={this.props.email} disabled="disabled" ref="email" className={badKeys.email ? "border-red" : ""}/>
									</div>
									<div className="account-username">
										<label>Username</label>
										<input type="text" ref="username" className={badKeys.username ? "border-red" : ""}/>
									</div>
									<div className="account-password">
										<label>Password</label>
										<input type="password" ref="password" className={badKeys.password ? "border-red" : ""}/>
									</div>
									<div className="account-password">
										<label>Password Again</label>
										<input type="password" ref="password2" className={badKeys.password2 ? "border-red" : ""}/>
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
										<input type="text" ref="firstname" className={badKeys.firstname ? "border-red" : ""}/>
									</div>
									<div className="account-lastname">
										<label>Last Name		</label>
										<input type="text" ref="lastname" className={badKeys.lastname ? "border-red" : ""}/>
									</div>
									<div className="account-position">
										<label>Position</label>
										<input type="text" ref="position" className={badKeys.position ? "border-red" : ""}/>
									</div>
									<div className="account-phone">
										<label>Phone		</label>
										<input type="tel" ref="phone" className={badKeys.phone ? "border-red" : ""}/>
									</div>
									<div className="account-location">
										<label>Address</label>
										<input type="text" ref="address" className={badKeys.address ? "border-red" : ""}/>
									</div>
									<div className="register-message">
										<label></label>
										<span className={this.props.messageClass}> {this.props.message} </span>
									</div>
									<div className="account-submit">
										<input type="button" value="Sign Up" onClick={() => this.props.submit(this.props.inviteKey, this.refs)}/>
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
