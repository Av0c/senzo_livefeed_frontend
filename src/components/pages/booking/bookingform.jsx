import React from 'react';
import Modal from "components/common/modal";
import TimePicker from 'components/common/timepicker'

export default class BookingForm extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			id: -1,
			booker: "",
			purpose: "",
            roomId: -1,
            startTime: "",
            endTime: "",
		}
	}

	componentDidMount() {

	}

    componentWillReceiveProps(nextProps) {

    }

	open(roomId, s0, s1, e0, e1, id=-1, booker = "", purpose = "") { // s0, s1 : start time, slot;  e0, e1 : end time, slot
        var startTime = window.custom.lpad(s0+"", 2) + ":" + window.custom.lpad(s1*15+"", 2);
        var endTime = window.custom.lpad(e0+"", 2) + ":" + window.custom.lpad(e1*15+"", 2);
        this.setState({
            roomId: roomId,
            startTime: startTime,
            endTime: endTime,
            id,
            booker,
            purpose,
        });
		this.modal.open();
	}

	close(e) {
		this.modal.close(e);
	}

    reset() {
        this.setState({
			id: -1,
			booker: "",
			purpose: "",
            roomId: -1,
            startTime: "",
            endTime: "",
		});
    }

    changeHandler(e) {
		let key = e.target.id;
		let value = e.target.value;
		this.setState({ [key]: value });
	}

	render() {
		var header = "Book new reservation";
		var button = "Book"
		if (this.props.mode == "edit") {
			header = "Edit reservation"
			button = "Edit"
		}
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
				<div>
					<span>Name of booker</span>
					<input type="username" id="booker" placeholder="e.g. Your name" value={this.state.booker} onChange={this.changeHandler.bind(this)} required />
				</div>
				<div>
					<span>Purpose</span>
					<input type="username" id="purpose" value={this.state.purpose} onChange={this.changeHandler.bind(this)} placeholder="e.g. Team meeting" required />
				</div>
                <div style={{marginTop: "10px"}}>
                    <span style={{width: "80px", display: "inline-block"}}>Start time: </span>
					<input type="time" id="startTime" value={this.state.startTime} step="900" onChange={this.changeHandler.bind(this)} required />
				</div>
                <div>
                    <span style={{width: "80px", display: "inline-block"}}>End time: </span>
					<input type="time" id="endTime" value={this.state.endTime} step="900" onChange={this.changeHandler.bind(this)} min={this.state.startTime} required />
				</div>
			</Modal>
		);
	}
}
