import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import RoomTypeSelector from 'components/common/roomtypeselector';
import TagSelector from 'components/common/tagselector';
import { selectTag } from 'actions/querysettings';
import { selectRoomType } from 'actions/querysettings';
import config from 'config';
import * as aStats from "actions/stats"

export class StatsMenu extends React.Component {
    constructor(props) {
        super(props);
        var cntTypes = this.countTypes(props.node);

        this.state = {
            typeCount : cntTypes,
        }
    }

    chooseTag(tag) {
        this.props.dispatch(selectTag(tag));
    }

    chooseType(type) {
        this.props.dispatch(selectRoomType(type));
    }

    componentWillReceiveProps(nextProps) {
        var typeCount = this.countTypes(nextProps.node);
        this.setState({typeCount: typeCount});

        if (typeCount.cntOA > 0 && typeCount.cntMR == 0) { // only OA
            if (nextProps.room.code != 'open_area') {
                nextProps.dispatch(selectRoomType(config.room.OPENAREA));
            }
            if (nextProps.tag == 'Efficiency') {
                nextProps.dispatch(selectTag('Occupancy'));
            }
        } else if (typeCount.cntOA == 0 && typeCount.cntMR > 0) { // only MR
            if (nextProps.room.code != 'meeting_room') {
                nextProps.dispatch(selectRoomType(config.room.MEETINGROOM));
            }
        }
    }

    render() {
        // for room type selector. If a location node has only MRs then only "Meeting rooms" is selected. So the same for OA.
        var type = this.props.node.type;
        if (this.state.typeCount.cntOA > 0 && this.state.typeCount.cntMR == 0) {
            type = "open_area";
        } else if (this.state.typeCount.cntMR > 0 && this.state.typeCount.cntOA == 0) {
            type = "meeting_room";
        }
        console.log(type)

        return (
            <div className="container-fluid" style={{ paddingLeft: '0px' }}>
                <div className="row">
                    <div className="col-sm-12 stats-menu">
                        <div className="stats-title pull-left">
                            <h1>{this.props.name}</h1>
                        </div>
                        <div className="stats-room-select stats-select pull-left" style={{ paddingTop: '0px' }}>
                            <RoomTypeSelector roomType={type} chooseType={this.chooseType.bind(this)} type={this.props.room.type} />
                        </div>
                        <div className="stats-occupancy-select stats-select pull-left" style={{ paddingTop: '0px' }}>
                            <TagSelector roomType={this.props.node.type} chooseTag={this.chooseTag.bind(this)} tag={this.props.tag} />
                        </div>
                        <Link className="stats-live-btn button-sm pull-left" to={this.props.node.info.hasfloorplan ? `live/${this.props.id}` : null} >LIVE</Link>
                        <Link className="stats-export cursor-pointer pull-left" onClick={() => aStats.downloadCSV(this.props.node, this.props.querySettings)}>
                            <img src="src/assets/images/export.svg" />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    countTypes(node) {
        var self = this;
        var res = {
            cntMR : (node.type == "meeting_room" ? 1 : 0),
            cntOA : (node.type == "open_area" ? 1 : 0),
        }
        if (node.children) {
            node.children.map((child) => {
                if (child.type != "sensor") {
                    let resChild = self.countTypes(child);
                    res.cntMR += resChild.cntMR;
                    res.cntOA += resChild.cntOA;
                }
            });
        }
        return res
    }
}

function mapStateToProps(state) {
    return {
        tag: state.querySettingsReducer.tag,
        room: state.querySettingsReducer.room
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StatsMenu);
