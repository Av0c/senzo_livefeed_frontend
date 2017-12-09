import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import AddLocationForm from 'components/common/addlocationform';
import AddFloorplanForm from 'components/common/addfloorplanform';
import Tree from 'components/pages/locations/settings/tree';
import EditLocationForm from 'components/common/editlocationform';
import DeleteLocationForm from 'components/common/deletelocationform';
import { createNode, deleteNode } from 'actions/node';
import { fetchCustomerOverview } from 'actions/overview';

export class Settings extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.openAddLocationForm = this.openAddLocationForm.bind(this);
        this.state = {
            currentNode: {},
            isAddingLocation: false,
            isEditing: false,
            isAddingFloorplan: false,
            isEditingLocation: false,
            isDeletingLocation: false
        };
    }

    openDeleteLocationForm(node) {
        this.setState({ isDeletingLocation: true, currentNode: node });

    }

    closeDeleteLocationForm() {
        this.setState({ isDeletingLocation: false });
    }
    openEditLocationForm(node) {
        this.setState({ isEditingLocation: true, currentNode: node });
    }

    closeEditLocationForm() {
        this.setState({ isEditingLocation: false });
    }

    openAddFloorplanForm(node) {
        this.setState({ isAddingFloorplan: true, currentNode: node });
    }

    closeAddFloorplanForm() {
        this.setState({ isAddingFloorplan: false });
    }

    openAddLocationForm(node) {
        this.setState({ isAddingLocation: true, currentNode: node });
    }

    closeAddLocationForm() {
        this.setState({ isAddingLocation: false });
    }

    openEditDropdown() {
        this.setState({ isEditing: true });
    }

    closeEditDropdown() {
        this.setState({ isEditing: false });
    }

    addLocation(node, state, timezone) {
        let newNode = {
            info: {
                name: "",
                details: {},
                location: "",
                WH_from: 0,
                WH_to: 0,
                xpercent: -1,
                ypercent: -1
            },
            type: ""
        }
        if (node.info.details.country == 'Multi') {
            if (state.option == 'Multi') {
                newNode.info.details.country = 'Multi';
            }
            else {
                newNode.info.details.country = state.country || 'Afghanistan';
                newNode.info.location = state.timezone || timezone;
            }
        }
        else {
            newNode.info.details.country = node.info.details.country;
            newNode.info.location = node.info.location || state.timezone;
        }
        newNode.info.name = state.name || node.info.name;
        newNode.info.WH_from = node.info.WH_from;
        newNode.info.WH_to = node.info.WH_to;
        newNode.type = node.type;
        this.props.dispatch(createNode(node.id, newNode)).then(() => {
            this.props.dispatch(fetchCustomerOverview(this.props.user.rootnodeid, this.props.currentSensor));
            toastr.success(`Add ${newNode.info.name} successfully`)
        })
            .catch(error => {
                toastr.error(error);
            });
    }

    deleteLocation(node) {
        this.props.dispatch(deleteNode(node)).then(() => {
            this.props.dispatch(fetchCustomerOverview(this.props.user.rootnodeid, this.props.currentSensor));
            toastr.error(`${node.info.name} has been deleted`);
        })
            .catch(error => {
                toastr.error(error);
            });
    }

    render() {
        return (
            <div>
                <div className="settings-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="account-title">Location Settings</h2>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="heading clearfix">
                                        <h3 className="pull-left">{this.props.tree.info.name}</h3><a onClick={() => this.openAddLocationForm(this.props.tree)} className="button btn-green add-loc-button" data-toggle="modal">Add Location   </a>
                                    </div>
                                    <Tree openAddLocationForm={this.openAddLocationForm.bind(this)} style="locations-list clearfix"
                                        tree={this.props.tree}
                                        openAddFloorplanForm={this.openAddFloorplanForm.bind(this)}
                                        closeAddFloorplanForm={this.closeAddFloorplanForm.bind(this)}
                                        openEditLocationForm={this.openEditLocationForm.bind(this)}
                                        closeEditLocationForm={this.closeEditLocationForm.bind(this)}
                                        openDeleteLocationForm={this.openDeleteLocationForm.bind(this)}
                                        closeDeleteLocationForm={this.closeDeleteLocationForm.bind(this)}
                                    />
                                    {this.state.isAddingLocation && <AddLocationForm submit={this.addLocation.bind(this)} node={this.state.currentNode} tree={this.props.tree} isAddingLocation={this.state.isAddingLocation} closeAddLocationForm={this.closeAddLocationForm.bind(this)} />}
                                    {this.state.isAddingFloorplan && <AddFloorplanForm isAddingFloorplan={this.state.isAddingFloorplan} closeAddFloorplanForm={this.closeAddFloorplanForm.bind(this)} />}
                                    {this.state.isEditingLocation && <EditLocationForm isEditingLocation={this.state.isEditingLocation} closeEditLocationForm={this.closeEditLocationForm.bind(this)} />}
                                    {this.state.isDeletingLocation && <DeleteLocationForm submit={this.deleteLocation.bind(this)} node={this.state.currentNode} isDeletingLocation={this.state.isDeletingLocation} closeDeleteLocationForm={this.closeDeleteLocationForm.bind(this)} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.authReducer.user,
        currentSensor: state.nodeReducer.map,
        tree: state.overviewReducer.customerOverview
    };
}
function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);