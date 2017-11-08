import React from 'react';

export default class PeriodButton extends React.Component {
    render() {

        let active = this.props.active == this.props.value ? ' active' : '';
        let className = "button"+active;
        return(
            <li onClick={() => this.props.handleClick(this.props.value)} ><a className={className} href="#"> <span>{this.props.value}</span></a></li>
        );
    }
}