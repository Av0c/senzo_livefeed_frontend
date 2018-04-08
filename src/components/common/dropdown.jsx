import React from 'react';
import DropdownItems from 'components/common/dropdownitems';
import enhanceWithClickOutside from "react-click-outside";

class DropDown extends React.Component {
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

    handleClickOutside() {
        if (this.state.opened) {
            this.close();
        }
    }

    render() {
        return (
            <div className={`card-area-dropdown ${this.state.opened ? "dropdown open" : "dropdown"} ${this.props.customClass}`}>
                <button className="dropdown-toggle" onClick={this.handleClick.bind(this)}>
                    {this.props.header}
                    <img src={"src/assets/images/" + (this.state.opened ? "arrow-down.svg" : "arrow-up.svg")} />
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

export default enhanceWithClickOutside(DropDown);
