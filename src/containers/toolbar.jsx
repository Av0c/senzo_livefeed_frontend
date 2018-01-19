import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Tree from 'containers/tree';

export class Toolbar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            show: false,
            headerClass: "container-fluid normal-header",
            spacingClass: "header-spacing",
        };
    }

    showChildren() {
        this.setState({ show: true });
    }

    closeChildren() {
        this.setState({ show: false });
    }

    componentDidMount() {
        this.checkStatic();
    }
    componentWillReceiveProps() {
        this.checkStatic();
    }

    checkStatic() {
        // Check if header-bar should be static
        if (this.props.location.pathname.includes("/statistic") || this.props.location.pathname == "/") {
            var header = this.state.headerClass;
            header += " static-header";
            var spacing = this.state.spacingClass;
            spacing += " spacing-active";
            this.setState({
                headerClass: header,
                spacingClass: spacing,
            });
        } else {
            this.setState({
                headerClass: "container-fluid normal-header",
                spacingClass: "header-spacing",
            });
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.headerClass}>
                    <div className="row">
                        <div className="col-xs-4">
                            <div className="location-block clearfix">
                                <div className="location-icon pull-left" onMouseOver={this.showChildren.bind(this)}>
                                    <img src="src/assets/images/location-icon.svg" alt="Location" />
                                </div>
                                <div className="location-name pull-left">
                                    <span>{this.props.tree.info.name}</span>
                                </div>
                                {this.state.show && <div>
                                    <div style={{ marginTop: '13px', zIndex: '1001' }} className={"location-dropdown-root"}>
                                        <Tree tree={this.props.tree} statistic={(node) => { this.props.statistic(node); this.closeChildren(); }} />
                                    </div>
                                    <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + (this.state.show ? "" : " closed")} onClick={this.closeChildren.bind(this)}></div>
                                </div>}
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
                        </div>
                        <div className="col-xs-4">
                            <div className="user-block">
                                <div className="user-icon pull-right"><img src="src/assets/images/user-settings.svg" alt="Settings" /></div>
                                <div className="user-name pull-right"><span>{this.props.user.firstname+" "+this.props.user.lastname}</span></div>
                                <div className="settings-dropdown-root">
                                    <ul>
                                        <li><Link to="/settings/ownaccount">Own Account</Link></li>
                                        <li><Link to="/user">{(this.props.user.role == "ADMIN") ? "User Administration" : "Contact"}</Link></li>
                                        {
                                            (this.props.user.role == "ADMIN") ? [
                                                <li key="0"><Link to="locations">Locations Settings</Link></li>,
                                                <li key="1"><Link to="/settings/sensor">Sensor Settings</Link></li>,
                                                <li key="2"><Link to="/api">Live Feed/SenzoAPI</Link></li>,
                                                <li key="3"><Link to="/settings/default">Default Settings</Link></li>
                                            ] : null
                                        }
                                        <li><Link to="/help">Help !</Link></li>
                                        <li><Link className="cursor-pointer" onClick={this.props.actions.logout}>Log Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={this.state.spacingClass}></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        tree: state.overviewReducer.customerOverview,
        cards: state.defaultSettingsReducer.card,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
