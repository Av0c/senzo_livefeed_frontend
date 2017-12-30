import React from 'react';
import Dropdown from 'components/common/dropdown';
import DropdownItem from 'components/common/dropdownitem';
import config from 'config';

import { connect } from 'react-redux';

export default class NodeDropdown extends React.Component {
	optionClicked(node) {
		this.props.click(node);
	}

	render() {
		var areas = [];
		var self = this;
		this.props.root.children.forEach((child) => {
			self.props.list(child, areas);
		})
		var header = (this.props.nodeFilter.id==this.props.root.id) ? this.props.header : this.props.nodeFilter.info.name;

		return (
			<div className={this.props.outsideClass}>
				<Dropdown header={header} toggleable customClass={this.props.customClass}>
					<DropdownItem>
						<div onClick={this.optionClicked.bind(this, this.props.root)}>
							{this.props.header}
						</div>
					</DropdownItem>
					{
						areas.map(
							(x, idx) => (
								<DropdownItem key={x.id}>
									<div onClick={this.optionClicked.bind(this, x)}>
										{x.info.name}
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