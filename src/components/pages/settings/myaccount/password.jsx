import React from 'react';
import { connect } from 'react-redux';
import { updatePassword } from 'actions/myaccount';
import appHistory from 'components/common/appHistory';
import toastr from 'toastr';
import Modal from "components/common/modal"

class Password extends React.Component {
    constructor() {
        super();
        this.displayName = 'Change Password';
        this.state = {};
    }

    changePassword() {
        if (this.state.new != "") {
            if (this.state.new === this.state.confirm) {
                let data = {
                    username: this.props.auth.username,
                    old: this.state.old,
                    new: this.state.new
                }
                this.props.dispatch(updatePassword(data))
            } else {
                toastr.error("Password does not match! ");
            }
        } else {
            toastr.error("Please provide password !");
        }
    }

    handleChange(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    render() {
        return (
            <Modal
                ref={(elem) => {this.modal = elem}}
                clickButton={(e) => { this.changePassword()}}
                header={"Change Password"}
                buttonText={"Change"}
                buttonClass="btn-success"
                entry={
                    <div className="account-change-password">
                        <label></label>
                        <span className="chpwd flat-button">Change Password</span>
                    </div>
                }
            >   
                <div>
                    <label style={{textAlign:"left"}}>Old Password</label>
                    <input type="password" id="old" onChange={this.handleChange.bind(this)}/>
                </div>
                <div>
                    <label style={{textAlign:"left"}}>New Password</label>
                    <input type="password" id="new" onChange={this.handleChange.bind(this)} />
                </div>
                <div>
                    <label style={{textAlign:"left"}}>Confirm Password</label>
                    <input type="password" id="confirm" onChange={this.handleChange.bind(this)} />
                </div>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.myAccountReducer.user,
        user: state.myAccountReducer.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Password);
