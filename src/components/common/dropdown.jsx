import React from 'react';
import DropdownItems from 'components/common/dropdownitems';

export default class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state={opened:false};
    }

    handleClick() {
        this.setState({opened: !this.state.opened });
    }

    close() {
        this.setState({opened: false });
    }

    render() {
        return (
            <div className={`card-area-dropdown ${this.state.opened ? "dropdown open" : "dropdown"} ${this.props.customClass}`}>
                <button className="dropdown-toggle" onClick={this.handleClick.bind(this)}>
                    {this.props.header}<i className={this.state.opened ? "icon arrow-down" : "icon arrow-up"}></i>
                </button>
                <div className="dropdown-items">
                    <DropdownItems close={this.props.toggleable ? this.close.bind(this) : () => {}}>
                        {this.props.children}
                    </DropdownItems>
                </div>
            </div>
        )
    }
}
