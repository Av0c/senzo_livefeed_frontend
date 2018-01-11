import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import toastr from 'toastr';
import { updateUser } from 'actions/myaccount';
import { fetchCurrentUser } from 'actions/myaccount';
import LeftMenu from 'components/common/leftmenu';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    submit() {
        this.props.dispatch(updateUser(this.props.user.username, this.state)).then(() => {
            toastr.success(`Update User Successfully`)
        })
        .catch(error => {
            toastr.error(error);
        });;
    }

    componentWillMount() {
        let self = this;
        this.props.dispatch(fetchCurrentUser()).then(() => {
            let user = self.props.user;
            this.setState({
                username: user.username,
                title: user.title,
                firstname: user.firstname,
                lastname: user.lastname,
                phone: user.phone,
                position: user.postion,
                address: user.address
            });
        });
    }

    changeHandler(e) {
        let key = e.target.id;
        let value = e.target.value;
        this.setState({ [key]: value });
    }

    render() {
        let user = this.props.user;
        return (
            <div className="settings-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <LeftMenu overview='' comparison='' />
                        </div>
                    </div>
                    <hr className="settings-divider"></hr>
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="account-title">Own Account</h2>
                            <form className="account-form">
                                <div className="account-email">
                                    <label>Email Address</label>
                                    <input type="email" id="email" placeholder={user.email} disabled="disabled" />
                                </div>
                                <div className="account-username">
                                    <label>Username</label>
                                    <input type="text" id="username" value={this.state.username} onChange={this.changeHandler.bind(this)} />
                                </div>
                                <div className="account-title">
                                    <label>Title</label>
                                    <select id="title" value={this.state.title} onChange={this.changeHandler.bind(this)}>
                                        <option value="Mr">Mr</option>
                                        <option value="Ms/Mrs.">Ms/Mrs.</option>
                                    </select>
                                </div>
                                <div className="account-firstname" >
                                    <label>First Name    </label>
                                    <input type="text" id="firstname" value={this.state.firstname} onChange={this.changeHandler.bind(this)} />
                                </div>
                                <div className="account-lastname">
                                    <label>Last Name    </label>
                                    <input type="text" id="lastname" value={this.state.lastname} onChange={this.changeHandler.bind(this)} />
                                </div>
                                <div className="account-phone">
                                    <label>Phone    </label>
                                    <input type="tel" id="phone" value={this.state.phone} onChange={this.changeHandler.bind(this)} />
                                </div>
                                <div className="account-position">
                                    <label>Position</label>
                                    <input type="text" id="position" value={this.state.position} onChange={this.changeHandler.bind(this)} />
                                </div>
                                <div className="account-location">
                                    <label>Location</label>
                                    <input type="text" id="address" value={this.state.address} onChange={this.changeHandler.bind(this)} />
                                </div>
                                <div className="account-change-password"><Link to="/settings/ownaccount/password" className="chpwd">Change Password    </Link></div>
                                <div className="account-submit">
                                    <input className="disabled" type="button" onClick={this.submit.bind(this)} value="Save Changes" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,
        auth: state.authReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
