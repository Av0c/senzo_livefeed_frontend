import React from 'react';
import { connect } from 'react-redux';
import { fetchCustomerOverview, getNodeStatistic } from 'actions/overview';
import { fetchLiveData } from 'actions/node';
import { fetchCurrentUser } from 'actions/myaccount';
import { selectNodeStats, updateNode } from 'actions/node';
import { fetchBookings, createBooking } from 'actions/booking';
import { getOccupancyOverview, getParams, findOccupancyTag } from 'actions/stats';

import LeftMenu from 'components/common/leftmenu';
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
        };
    }

    componentDidMount() {
        var today = this.onParseDateFromString(moment().format('DD-MM-YYYY'));
        this.setState({
            selectedDate: today,
        });

        this.props.dispatch(fetchBookings(null, moment().format('DD-MM-YYYY')));

    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.bookings);
        if (nextProps.bookings) {
            this.setState({tree: nextProps.bookings}, () => {
                this.calculateRowSpan(nextProps.bookings);
            });
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
        this.props.dispatch(fetchBookings(null, moment(selectedDate).format("DD-MM-YYYY"))).then(() => {
            this.setState({ selectedDate: selectedDate });
        });
    }

    makeHandler(id, hour, slot) {
        return () => {
            this.bookingForm.open(id, hour, slot);
        }
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

        console.log(allBookings);

        var specialCells = [];
        for (var i = 0; i < allBookings.length; i++) {
            var roomId = allBookings[i].roomId;
            var purpose = allBookings[i].purpose;
            var booker = allBookings[i].booker;
            var startTime = allBookings[i].startTime;
            var startSlot = allBookings[i].startSlot;
            var endTime = allBookings[i].endTime;
            var endSlot = allBookings[i].endSlot;

            // First cell
            var idCheck = "hour-td-" + roomId + "-" + startTime + "-" + startSlot;
            var rowSpan = (endTime*4 + endSlot) - (startTime*4 + startSlot);
            var timeString = startTime + ":";
            timeString += (startSlot*15 < 10) ? ("0" + startSlot*15) : (startSlot*15);
            timeString += " – ";
            timeString += endTime + ":";
            timeString += (endSlot*15 < 10) ? ("0" + endSlot*15) : (endSlot*15);

            var innerHtml = [
                <h4 key={"time-"+idCheck}><b>{timeString}</b></h4>,
                <p key={"booker-"+idCheck}>by <b>{booker}</b></p>,
                <p key={"purpose-"+idCheck}>"{purpose}"</p>
            ];

            specialCells.push({
                idCheck: idCheck,
                innerHtml: innerHtml,
                rowSpan: rowSpan,
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
                innerHtml = [];

                specialCells.push({
                    idCheck: idCheck,
                    rowSpan: rowSpan
                })
            }
        }

        this.setState({
            specialCells: specialCells,
        });
        console.log(specialCells);
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

        for (var i = globalMin; i < globalMax; i++) {
            var hourContent = [];

            for (var n = 0; n < 4; n++) {
                var rowContent = [];
                for (var ii = 0; ii < tree.length; ii++) {
                    var className = "booking-hour";
                    // If current hour is allowed
                    if (i >= tree[ii].minHour && i < tree[ii].maxHour) {

                        var id = "hour-td-"+ii+"-"+i+"-"+n;
                        var rowSpan = 1;
                        var className = "booking-hour is-allowed";
                        var innerHtml = [];
                        var onClick = this.makeHandler(tree[ii].id, i, n);

                        var specialCells = this.state.specialCells;

                        for (var s = 0; s < specialCells.length; s++) {
                            if (id == specialCells[s].idCheck) {
                                rowSpan = specialCells[s].rowSpan;
                                className = "booking-hour is-booked";
                                innerHtml = specialCells[s].innerHtml;
                                onClick = () => {};
                            }
                        }

                        if (rowSpan) {
                            rowContent.push(
                                <td
                                    rowSpan={rowSpan}
                                    onClick={onClick}
                                    id={"hour-td-"+ii+"-"+i+"-"+n} key={"key-hour-td-"+ii+"-"+i+"-"+n}
                                    className={className}>
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
                    {(i <= 12) ? i + " AM" : (i-12) + " PM"}
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

    onSubmit(e, states) {
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

        console.log(booking)

        this.props.dispatch(createBooking(states.roomId, booking));
    }

    render() {
        console.log(this.props)
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
                    ref={(elem) => {this.bookingForm = elem}}
                    onSubmit={(e, states) => {this.onSubmit(e, states)}}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.myAccountReducer.user,

        nodeMap: state.overviewReducer.nodeMap,
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
