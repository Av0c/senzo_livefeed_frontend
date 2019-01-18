import React from 'react';
import { login } from 'actions/authentication'
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Login extends React.Component {

    constructor() {
        super();
        this.submit = this.submit.bind(this);
        this.displayName = 'LoginPage'
        this.state = { username: '', password: '' }
    }

    handleChange(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.submit();
        }
    }

    render() {
        return (
            <div className="login-wrapper">
                <div className="login-card">
                    <Link to="/">
                        <img src="/src/assets/images/header-logo.svg" className="login-logo" />
                    </Link>
                    <div className="welcome-message">Welcome to SenzoLive Livefeed</div>
                    <div className="login-box-wrapper">
                        <div className="login-box">
                            <form action="#">
                                <div className="input-container">
                                    <input type="username" id="username" placeholder="Email" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                                    <img className="login-icon" src="/src/assets/images/email.svg"></img>
                                </div>
                                <div className="input-container">
                                    <input type="password" placeholder="Password" id="password" onKeyDown={this.handleKeyDown.bind(this)} onChange={this.handleChange.bind(this)} required />
                                    <img className="login-icon" src="/src/assets/images/vpn_key.svg"></img>
                                </div>
                                <div>
                                    <input type="button" name="user_submit" value="Log in" onClick={this.submit} />
                                </div>
                                {<div className='red-500' >{this.props.auth.errorMessage}</div>}
                                <div className='forgot-password'>
                                  <Link to='/forgot'> Forgot your password?</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    submit() {
        this.props.dispatch(login(this.state));
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
