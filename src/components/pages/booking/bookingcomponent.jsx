import React from 'react';
import { connect } from 'react-redux';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData } from 'actions/node';
import { fetchCurrentUser } from 'actions/myaccount';
import { selectNodeStats, updateNode } from 'actions/node';
import { fetchBookings, createBooking, deleteBooking, updateBooking } from 'actions/booking';
import { getOccupancyOverview, getParams, findOccupancyTag } from 'actions/stats';

import LeftMenu from 'components/common/leftmenu';
import Modal from "components/common/modal";
import BookingForm from './bookingform';

// For DatePicker
import { DatePicker, Calendar, DayOfWeek } from 'office-ui-fabric-react';
import moment from 'moment';
import momentTZ from 'moment-timezone';
import Strings from 'components/common/strings';


class BookingComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedDate: null,
            specialCells: null,
            tree: [],
            deletedBooking: {},
        };
    }

    componentDidMount() {
        var today = this.onParseDateFromString(moment().format('DD-MM-YYYY'));

        this.props.dispatch(fetchBookings(this.props.currentNode.id, moment().format('DD-MM-YYYY')));
        var I = setInterval(() => {
            this.props.dispatch(fetchBookings(this.props.currentNode.id, moment(this.state.selectedDate).format("DD-MM-YYYY")));
        }, 10000)

        this.setState({
            selectedDate: today,
            I,
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.I)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.bookings) {
            var tree = [];
            for (var i = 0; i < nextProps.bookings.length; i++) {
                if (i != -2) {
                    tree.push(nextProps.bookings[i]);
                }
            }

            console.log(tree);

            this.setState(
                {tree: tree},
                () => {this.calculateRowSpan(nextProps.bookings);}
            );
        }
    }

    onFormatDate(date) {
        let day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        let month = (date.getMonth() + 1) > 9 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
        let d = day + '-' + month + '-' + date.getFullYear();
        return d;
    }

    onParseDateFromString(value) {
        if (typeof value == 'string') {
            let values = (value || '').split('-');
            let day = Math.max(1, Math.min(31, parseInt(values[0], 10)));
            let month = Math.max(1, Math.min(12, parseInt(values[1], 10))) - 1;
            let year = parseInt(values[2], 10);
            if (year < 100) {
                year += date.getFullYear();
            }
            return new Date(year, month, day);
        } else {
            return value;
        }
    }

    handleSelectDate(selectedDate) {
        this.setState({ selectedDate: selectedDate }); // Increase responsiveness when selecting dates
        this.props.dispatch(fetchBookings(null, moment(selectedDate).format("DD-MM-YYYY"))).then(() => {
            this.setState({ selectedDate: selectedDate });
        });
    }

    makeHandler(roomId, startHour, startSlot) {
        // 8:00 -> (8:00, 8:15)
        let endHour = startHour, endSlot = startSlot;
        endSlot+= 1;
        if (endSlot>3) {
            endHour+= 1;
            endSlot%= 4;
        }
        return () => {
            this.bookingForm.open(roomId, startHour, startSlot, endHour, endSlot);
        }
    }

    openDelete(booking) {
        this.setState({
            deletedBooking: booking,
        }, () => {
            this.deleteModal.open();
        })
    }
    delete(booking) {
        this.props.dispatch(deleteBooking(booking.id)).then(() => {
            this.deleteModal.close();
        });
    }
    openUpdate(booking, roomId) {
        this.updateForm.open(
            roomId,

            booking.startTime,
            booking.startSlot,

            booking.endTime,
            booking.endSlot,

            booking.id,
            booking.booker,
            booking.purpose
        );
    }
    openView(booking, roomId) {
        this.viewForm.open(
            roomId,

            booking.startTime,
            booking.startSlot,

            booking.endTime,
            booking.endSlot,

            booking.id,
            booking.booker,
            booking.purpose
        );
    }
    calculateRowSpan(tree) {
        var allBookings = [];

        for (var i = 0; i < tree.length; i++) {
            // Get all made bookings
            if (tree[i].bookings.length > 0) {
                for (var ii = 0; ii < tree[i].bookings.length; ii++) {
                    allBookings.push(tree[i].bookings[ii]);
                }
            }
        }

        var specialCells = [];
        for (var i = 0; i < allBookings.length; i++) {
            var roomId = allBookings[i].roomId;
            var purpose = allBookings[i].purpose;
            var booker = allBookings[i].booker;
            var startTime = allBookings[i].startTime;
            var startSlot = allBookings[i].startSlot;
            var endTime = allBookings[i].endTime;
            var endSlot = allBookings[i].endSlot;
            var ownerUsername = allBookings[i].ownerUsername;

            // Mine or not mine ?
            var mine = (ownerUsername == this.props.user.username);

            // First cell
            var idCheck = "hour-td-" + roomId + "-" + startTime + "-" + startSlot;
            var rowSpan = (endTime*4 + endSlot) - (startTime*4 + startSlot);
            var timeString = startTime + ":";
            timeString += (startSlot*15 < 10) ? ("0" + startSlot*15) : (startSlot*15);
            timeString += " – ";
            timeString += endTime + ":";
            timeString += (endSlot*15 < 10) ? ("0" + endSlot*15) : (endSlot*15);

            var innerHtml = [];

            if (rowSpan < 4) {
                innerHtml = [
                    <p className="booked-purpose" key={"purpose-"+idCheck}>{purpose}</p>,
                ];
            } else {
                innerHtml = [
                    <p className="booked-purpose" key={"purpose-"+idCheck}>{purpose}</p>,
                    <p className="booked-time" key={"time-"+idCheck}><b>{timeString}</b></p>,
                    <p className="booked-booker" key={"booker-"+idCheck}>{booker}</p>,
                ];
            }
            if (mine || this.props.user.role == "ADMIN") {
                // innerHtml.push(<div key={"delete-"+idCheck} className="delete-button" onMouseEnter={() => {console.log(idCheck)}} onClick={
                //     (e) => {
                //         e.stopPropagation();
                //         this.openDelete(allBookings[i])
                //     }
                // }>x</div>)
            }

            specialCells.push({
                idCheck: idCheck,
                innerHtml: innerHtml,
                rowSpan: rowSpan,
                mine: mine,
                booking: allBookings[i],
            });

            var cellsToRemove = rowSpan - 1;

            for (var ii = 0; ii < cellsToRemove; ii++) {
                if (startSlot < 3) {
                    startSlot++;
                } else {
                    startSlot = 0;
                    startTime++;
                }

                idCheck = "hour-td-" + roomId + "-" + startTime + "-" + startSlot;
                rowSpan = 0;

                specialCells.push({
                    idCheck: idCheck,
                    rowSpan: rowSpan
                })
            }
        }

        this.setState({
            specialCells: specialCells,
        });
    }
    generateTableContent() {
        var { tree } = this.state;
        var tableContent = [];

        var names = [<td key="empty"></td>]; // Top left cell of table
        for (var i = 0; i < tree.length; i++) {
            names.push(
                <td key={"name"+i}>{tree[i].name}</td>
            );
        }
        tableContent.push(
            <tr className="name-row" key="name">
                {names}
            </tr>
        )

        var globalMin = 24;
        var globalMax = 0;
        var bookings = [];
        for (var i = 0; i < tree.length; i++) {
            // Get global min, max hours
            if (tree[i].minHour < globalMin) {
                globalMin = tree[i].minHour;
            }
            if (tree[i].maxHour > globalMax) {
                globalMax = tree[i].maxHour;
            }

            // Get all made bookings
            if (tree[i].bookings.length > 0) {
                for (var ii = 0; ii < tree[i].bookings.length; ii++) {
                    bookings.push(tree[i].bookings[ii]);
                }
            }
        }

        globalMin = Math.max(0, globalMin);
        globalMax = Math.min(24, globalMax);

        for (var i = globalMin; i <= globalMax; i++) { // Hour
            var hourContent = [];

            for (var n = 0; n < 4; n++) { // Slot
                var rowContent = [];
                for (var ii = 0; ii < tree.length; ii++) {
                    var className = "booking-hour";

                    // Get Unix timestamp of the start of this slot, in this location
                    var timezone = this.props.nodeMap[tree[ii].id].info.location;
                    var timeStr = this.props.selectedDate + " " + window.custom.lpad(i, 2) + ":" + window.custom.lpad(n*15, 2) + ":00";
                    var timestamp = momentTZ.tz(timeStr, "DD-MM-YYYY hh:mm:ss", timezone).add(15, "minutes").unix();

                    // If current hour is allowed
                    if (tree[ii].minHour <= i && i <= tree[ii].maxHour) {

                        var roomId = tree[ii].id;
                        var id = "hour-td-"+roomId+"-"+i+"-"+n;

                        var rowSpan = 1;
                        var className = "booking-hour is-allowed";
                        var innerHtml =
                        [<p className="hour-guide" key={"hour-guide-"+id}>
                            { ((i <= 9) ? "0"+i : i) + ":" + ((n*15 <= 9) ? "0"+n*15 : n*15)}
                        </p>];
                        var onClick = this.makeHandler(roomId, i, n);
                        if (moment().unix() >= timestamp) { // this is the past
                            className = "booking-hour not-allowed";
                            onClick = () => {};
                        }

                        var specialCells = this.state.specialCells;

                        for (var s = 0; s < specialCells.length; s++) {
                            if (id == specialCells[s].idCheck) {
                                rowSpan = specialCells[s].rowSpan;
                                className = "booking-hour is-booked" + (specialCells[s].mine ? " mine" : "");
                                innerHtml = specialCells[s].innerHtml;

                                let booking = specialCells[s].booking;
                                if (booking) {
                                    if (specialCells[s].mine) {
                                        onClick = () => this.openUpdate(booking, roomId);
                                    } else {
                                        onClick = () => this.openView(booking, roomId);
                                    }
                                }

                                break;
                            }
                        }

                        if (rowSpan) {
                            rowContent.push(
                                <td
                                    rowSpan={rowSpan}
                                    onClick={onClick}
                                    id={"hour-td-"+ii+"-"+i+"-"+n} key={"key-hour-td-"+ii+"-"+i+"-"+n}
                                    className={className}
                                >
                                    {innerHtml}
                                </td>
                            );
                        }
                    } else {
                        rowContent.push(
                            <td key={"key-hour-td-"+ii+"-"+i+"-"+n} className="booking-hour not-allowed"></td>
                        );
                    }

                }

                hourContent.push(
                    <tr className="hour-row" key={"key-hour-tr-"+i+"-"+n}>
                        {rowContent}
                    </tr>
                );
            }

            hourContent[0].props.children.splice(0, 0,
                <td className="booking-hour-header" rowSpan="4" key={"key-hour-td-"+i+"-title"}>
                    {(i <= 12) ? i + " am" : (i-12) + " pm"}
                </td>
            );

            // hourContent[0].props.children.splice(0, 0,
            //     <td className="booking-hour-header" rowSpan="4" key={"key-hour-td-"+i+"-title"}>
            //         {(i <= 12) ? (i + " AM (" + i + ":00)") : ((i-12) + " PM (" + i + ":00)")}
            //     </td>
            // );

            tableContent.push(
                <React.Fragment key={i}>
                    {hourContent}
                </React.Fragment>
            )
        }

        return tableContent;
    }

    onCreate(e, states, fClose) {
        var timezone = this.props.nodeMap[states.roomId].info.location;

        var startStr = this.props.selectedDate + " " + states.startTime + ":00";
        var start = momentTZ.tz(startStr, "DD-MM-YYYY hh:mm:ss", timezone).unix();

        var endStr = this.props.selectedDate + " " + states.endTime + ":00";
        var end = momentTZ.tz(endStr, "DD-MM-YYYY hh:mm:ss", timezone).unix() - 1; // ending at 11:00:00 == ending at 10:59:59

        var booking = {
            starttime: start,
            endtime: end,
            booker: states.booker,
            subject: states.purpose,
        }
        this.props.dispatch(createBooking(states.roomId, booking)).then(fClose);
    }

    onUpdate(e, states, fClose) {
        var timezone = this.props.nodeMap[states.roomId].info.location;

        var startStr = this.props.selectedDate + " " + states.startTime + ":00";
        var start = momentTZ.tz(startStr, "DD-MM-YYYY hh:mm:ss", timezone).unix();

        var endStr = this.props.selectedDate + " " + states.endTime + ":00";
        var end = momentTZ.tz(endStr, "DD-MM-YYYY hh:mm:ss", timezone).unix() - 1; // ending at 11:00:00 == ending at 10:59:59

        var booking = {
            starttime: start,
            endtime: end,
            booker: states.booker,
            subject: states.purpose,
        }

        this.props.dispatch(updateBooking(states.id, booking)).then(fClose);
    }

    render() {
        var displayDate;
        if (this.state.selectedDate) {
            displayDate = moment(this.state.selectedDate).format("dddd, MMMM Do YYYY");
        } else {
            displayDate = "";
        }

        var tableContent = [];
        if (this.state.specialCells) {
            tableContent = this.generateTableContent();
        }

        return (
            <div className="booking-block">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 static-menu">
                            <LeftMenu overview='' comparison='' booking='active' />
                        </div>
                    </div>
                    <div className="row">
                        <div className="booking-container">
                            <div className="booking-left">
                                <div className="booking-calendar">
                                    <Calendar
                                        onSelectDate={(selectedDate) => {this.handleSelectDate(selectedDate)}}
                                        onDismiss={() => {}}
                                        value={this.state.selectedDate}

                                        isDayPickerVisible={true}
                                        isMonthPickerVisible={true}
                                        firstDayOfWeek={DayOfWeek.Monday}
                                        strings={Strings}
                                        showGoToToday={true}
                                        showMonthPickerAsOverlay={true}

                                        autoNavigateOnSelection={true}
                                        highlightCurrentMonth={true}
                                        highlightSelectedMonth={true}
                                        showWeekNumbers={false}
                                        />
                                </div>
                            </div>
                            <div className="booking-right">
                                <div className="booking-timetable">
                                    <div>{displayDate}</div>
                                    <h3>{this.props.currentNode.info.name}</h3>
                                    <div className="booking-table-container">
                                        <table>
                                            <tbody>
                                                {tableContent}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BookingForm
                    mode="create"
                    ref={(elem) => {this.bookingForm = elem}}
                    onSubmit={(e, states, fClose) => {this.onCreate(e, states, fClose)}}
                />
                <BookingForm
                    mode="edit"
                    ref={(elem) => {this.updateForm = elem}}
                    onSubmit={(e, states, fClose) => {this.onUpdate(e, states, fClose)}}
                />
                <BookingForm
                    mode="view"
                    ref={(elem) => {this.viewForm = elem}}
                    onSubmit={(e, states, fClose) => {fClose()}}
                />
                <Modal
                    ref={(elem) => {this.deleteModal = elem}}
                    clickButton={(e) => { this.delete(this.state.deletedBooking)}}
                    header="Delete Reservation"
                    buttonText="Delete"
                    buttonClass="btn-danger"
                    entry={ null }
                    >
                    <p>Are you sure you want to delete the reservation of <b>{this.state.deletedBooking.booker}</b> ({this.state.deletedBooking.purpose}) ?</p>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,

        nodeMap: state.overviewReducer.nodeMap,
        currentNode: state.overviewReducer.currentNode,
        cards: state.defaultSettingsReducer.card,

        bookings: state.bookingReducer.bookings,
        bookingLoading: state.bookingReducer.loading,
        selectedDate: state.bookingReducer.date,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingComponent);
