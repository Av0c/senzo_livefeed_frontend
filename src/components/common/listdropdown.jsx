import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
// import config from 'config';

import { connect } from 'react-redux';

export default class ListDropdown extends React.Component {
	optionClicked(node) {
		this.props.click(node);
	}

	render() {
		var header = this.props.getText(this.props.selected);
		return (
			<div className={this.props.outsideClass}>
				<Dropdown header={header} toggleable customClass={this.props.customClass}>
					{
						this.props.items.map(
							(x, idx) => (
								<DropdownItem key={idx}>
									<div onClick={this.optionClicked.bind(this, x)}>
										{this.props.getText(x)}
									</div>
								</DropdownItem>
							)
						)
					}
				</Dropdown>
			</div>
		)
	}
}
