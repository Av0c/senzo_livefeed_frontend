import React from 'react';
import DropdownItems from 'components/common/dropdownitems';
import enhanceWithClickOutside from "react-click-outside";

class DropDown extends React.Component {
    constructor(props) {
        super(props);
        this.state={opened:false};
    }

    handleClick() {
        if (this.props.toggleable) {
            this.setState({opened: !this.state.opened });
        }
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
            <div className={`${this.state.opened ? "dropdown open" : "dropdown"} ${this.props.customClass}`}>
                <div className="dropdown-toggle" onClick={this.handleClick.bind(this)}>
                    {this.props.header}
                    {
                        !this.props.noArrow ? <img src={"src/assets/images/" + (this.state.opened ? "arrow-down.svg" : "arrow-up.svg")} /> : null
                    }
                </div>
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
