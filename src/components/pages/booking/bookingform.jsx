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

	open(roomId, hour, slot) {
        console.log(roomId, hour, slot);

        if (hour < 10) {
            hour = "0"+hour;
        }
        if (slot == 0) {
            slot = "00";
        } else {
            slot = slot*15;
        }
        var startTime = hour + ":" + slot;
        var endTime = hour + ":" + slot;
        this.setState({
            roomId: roomId,
            startTime: startTime,
            endTime: endTime,
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
		return (
			<Modal
				ref={(elem) => {this.modal = elem}}
				clickButton={(e) => {this.props.onSubmit(e, this.state)}}
				header={"Create new booking"}
				buttonText={"Book"}
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
