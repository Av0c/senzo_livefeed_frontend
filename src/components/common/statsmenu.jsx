import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import RoomTypeSelector from 'components/common/roomtypeselector';
import TagSelector from 'components/common/tagselector';
import { selectTag } from 'actions/querysettings';
import { selectRoomType } from 'actions/querysettings';

export class StatsMenu extends React.Component {

    chooseTag(tag) {
        this.props.dispatch(selectTag(tag));
    }

    chooseType(type) {
        this.props.dispatch(selectRoomType(type));
    }

    render() {
        return (
            <div className="stats-menu" style={{ paddingTop: '50px', marginBottom: '10px' }}>
                <div className="container-fluid" style={{ paddingLeft: '0px' }}>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="stats-title pull-left">
                                <h1>{this.props.name}</h1>
                            </div>
                            <div className="stats-room-select stats-select pull-left" style={{ paddingTop: '0px' }}>
                                <RoomTypeSelector chooseType={this.chooseType.bind(this)} type={this.props.room.type} />
                            </div>
                            <div className="stats-occupancy-select stats-select pull-left" style={{ paddingTop: '0px' }}>
                                <TagSelector chooseTag={this.chooseTag.bind(this)} tag={this.props.tag} />
                            </div>
                            <Link className="stats-live-btn button-sm pull-left" to={`live/${this.props.id}`} >LIVE</Link>
                            <a className="stats-export pull-left" href="#"><img src="src/assets/images/export.svg" /></a>
                        </div>
                    </div>
                </div>
            </div>
        );
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