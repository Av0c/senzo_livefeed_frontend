import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

export default class DaySelector extends React.Component {

    optionClicked(day) {
        this.props.chooseDay(day);
    }

    generateDropdownItems() {
        var self = this;
        return this.props.items.map((item, index) => {
            return <DropdownItem key={index} >
                <div onClick={self.optionClicked.bind(this, item)}>
                    {item}
                </div>
            </DropdownItem>
        });
    }



    render() {
        let items = this.generateDropdownItems();
        return (
            <Dropdown header={this.props.day} toggleable>
                {items}
            </Dropdown>
        )
    }
}


