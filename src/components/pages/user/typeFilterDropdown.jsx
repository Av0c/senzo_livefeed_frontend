import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

import { connect } from 'react-redux';

export default class typeFilterDropdown extends React.Component {
	optionClicked(node) {
		this.props.click(node);
	}

	render() {
		return (
			<div className="dropdown-btn settings-dropdown pull-left">
				<Dropdown header={this.props.typeFilter.text} toggleable>
					{
						config.typeFilter.map((row)=> (
							<DropdownItem key={row.code}>
								<div onClick={this.optionClicked.bind(this, row)}>
									{row.text}
								</div>
							</DropdownItem>
						))
					}
				</Dropdown>
			</div>
		)
	}
}