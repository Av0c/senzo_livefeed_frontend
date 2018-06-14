import React from 'react';
import Modal from "components/common/modal";
import Select from 'react-select';

export default class LiveFeedForm extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			id: -1,
			logo: "",
			themeColor: "#123456",
            locations: [],
            slideDuration: 20,
            userEmail: [],
			options: [],
		}
	}

	getRandomColor() {
		var letters = '0123456789ABCDEF';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	componentDidMount() {
		var options = [];
		this.getAreaChildren(this.props.tree, options);
		this.setState({
		    themeColor: this.getRandomColor(),
			options: options,
		});
	}

    componentWillReceiveProps(nextProps) {
    }

	open() {
		this.modal.open();
	}

	close(e) {
		this.modal.close(e);
	}

    reset() {
        this.setState({
			id: -1,
			logo: "",
			themeColor: "#FFFFFF",
            locations: [],
            slideDuration: 20,
            userEmail: "",
		});
    }

    changeHandler(e) {
		let key = e.target.id;
		let value = e.target.value;
		this.setState({ [key]: value });
	}

	getAreaChildren(tree, options) {
        var self = this;
        tree.children.forEach((node) => {
            if (node.type != "sensor") {
				if (node.info.hasfloorplan) {
					options.push({value: node.id, label: node.info.name, selected: false});
				} else {
					options.push({value: node.id, label: node.info.name, disabled: true});
				}
            }

            self.getAreaChildren(node, options);
        });
    }

	handleChange(key, value) {
		this.setState({[key]: value});
	}

	render() {
		var header = "Create new live feed";
		var button = "Create";

		return (
			<Modal
				ref={(elem) => {this.modal = elem}}
				clickButton={(e) => {this.props.onSubmit(e, this.state, (e) => this.close(e))}}
				header={header}
				buttonText={button}
				buttonClass="btn-success"
				entry={ null }
				onClose={this.props.onClose}
			>
				<div className="live-feed-form">
					<div>
						<span className="input-label">Custom logo</span>
						<label className="input-file">
							<input type="file" id="logo" value={this.state.logo} onChange={this.changeHandler.bind(this)} required />
							<i className="material-icons">photo</i> Upload logo
						</label>
						{(this.state.logo != "") &&
						<span className="input-file-text">{this.state.logo}</span>}
					</div>
					<div>
						<span className="input-label">Theme color</span>
						<div className="input-color" style={{backgroundColor: this.state.themeColor}}>
							<input type="color" id="themeColor" value={this.state.themeColor} onChange={this.changeHandler.bind(this)} required />
						</div>
					</div>
					<div>
						<span className="input-label">Locations</span>
						<Select
							multi
							closeOnSelect={false}
							onChange={(value) => {this.handleChange("locations", value)}}
							options={this.state.options}
							placeholder="Select rooms for slideshow"
					        removeSelected={true}
							value={this.state.locations}
						/>
					</div>
					<div>
						<span className="input-label">Slide duration (seconds)</span>
						<input type="number" id="slideDuration" value={this.state.slideDuration} onChange={this.changeHandler.bind(this)} required />
					</div>
					<div>
						<span className="input-label">Viewing user</span>
						<Select.Creatable
							multi
							closeOnSelect={false}
							onChange={(value) => {this.handleChange("userEmail", value)}}
							options={[]}
							placeholder="viewing@user.com"
					        removeSelected={true}
							value={this.state.userEmail}
							arrowRenderer={() => {}}
							noResultsText={"Enter each email then press 'Enter'"}
						/>
					</div>
				</div>
			</Modal>
		);
	}
}
