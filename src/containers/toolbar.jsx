import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Tree from 'containers/tree';
import SearchBar from 'components/common/searchbar';
import SearchBarDropDown from 'components/common/searchbardropdown';
import SearchContainer from 'components/pages/overview/searchcontainer.jsx';

export class Toolbar extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            showLocation: false,
            showSetting: false,
            searchActive: false,
            headerClass: "container-fluid normal-header",
            spacingClass: "header-spacing",
        };
    }
    closeAll() {
        this.setState({
            showLocation: false,
            showSetting: false,
        });
    }
    componentDidMount() {
        this.checkStatic();
    }
    componentWillReceiveProps() {
        this.checkStatic();
    }

    checkStatic() {
        // Check if header-bar should be static
        if (this.props.location.pathname.includes("/booking") || this.props.location.pathname == "/") {
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
                                <div onClick={() => {this.setState({ showLocation: true})}} className="cursor-pointer">
                                    <div className="location-icon pull-left">
                                        <img src="src/assets/images/location-icon.svg" alt="Location" />
                                    </div>
                                    <div className="location-name pull-left">
                                        <span>{this.props.tree.info.name}</span>
                                    </div>
                                </div>
                                {this.state.showLocation && <div>
                                    <div className="location-dropdown-root">
                                        <div className="overview-search-container" style={{borderBottom: "1px solid rgba(100, 100, 100, 0.1)"}}>
                                            <SearchBarDropDown
                                                querySettings={this.props.querySettings}
                                                onChange={(node) => {this.props.statistic(node); this.closeAll();}}
                                                onFocus={() => {}}
                                                onClose={() => {}}
                                                tree={this.props.tree}
                                            />
                                        </div>
                                        <Tree tree={this.props.tree} statistic={(node) => {this.props.statistic(node); this.closeAll();}} />
                                    </div>
                                </div>}
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="header-logo"><Link to="/"><img src="src/assets/images/header-logo.svg" alt="SenzoLive" /></Link></div>
                        </div>
                        <div className="col-xs-4">
                            <div className="user-block">
                                <div className="user-icon pull-right cursor-pointer" onClick={() => this.setState({showSetting: true})}><img src="src/assets/images/user-settings.svg" alt="Settings" /></div>
                                <div className="user-name pull-right cursor-pointer" onClick={() => this.setState({showSetting: true})}><span>{this.props.user.firstname+" "+this.props.user.lastname}</span></div>
                                <div className={(this.state.showSetting ? "setting-show" : "") + " settings-dropdown-root"}>
                                    <ul>
                                        <li><Link to="/settings/ownaccount" onClick={() => {this.closeAll()}} >Own Account</Link></li>
                                        <li><Link to="/user" onClick={() => {this.closeAll()}} >{(this.props.user.role == "ADMIN") ? "User Administration" : "Contact"}</Link></li>
                                        {
                                            (this.props.user.role == "ADMIN") ? [
                                                <li key="0"><Link onClick={() => {this.closeAll()}}  to="locations">Locations Settings</Link></li>,
                                                <li key="1"><Link onClick={() => {this.closeAll()}}  to="/settings/sensor">Sensor Settings</Link></li>,
                                                <li key="2"><Link onClick={() => {this.closeAll()}} to="/api">Live Feed/SenzoAPI</Link></li>,
                                                <li key="3"><Link onClick={() => {this.closeAll()}} to="/settings/default">Default Settings</Link></li>
                                            ] : null
                                        }
                                        <li><Link onClick={() => {this.closeAll()}} to="/help">Help !</Link></li>
                                        <li><Link className="cursor-pointer" onClick={this.props.actions.logout}>Log Out</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {(this.state.showLocation || this.state.showSetting) &&
                            <div style={{ backgroundColor: 'transparent' }} className={"modal-overlay" + ((this.state.showLocation || this.state.showSetting) ? "" : " closed")} onClick={this.closeAll.bind(this)}></div>
                        }
                    </div>
                </div>
                <div className={this.state.spacingClass}></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,
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
