import React from 'react';
import { Link } from 'react-router';

export default class LeftMenu extends React.Component {

    render() {
        return (
            <div className="main-menu-left pull-left">
                <Link className={`button ${this.props.overview}`} to={'/'}><i className="fa fa-home" aria-hidden="true"></i><span> Overview   </span></Link>
                <Link className={`button ${this.props.comparison}`} to={'/comparison/'}><i className="fa fa-home" aria-hidden="true"></i><span> Comparison   </span></Link>
            </div>
        );
    }
}
