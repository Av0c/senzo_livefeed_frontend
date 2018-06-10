import React from 'react';
import { connect } from 'react-redux';
import toastr from 'toastr';
import AddLocationForm from 'components/common/addlocationform';
import AddFloorplanForm from 'components/common/addfloorplanform';
import MoveLocationForm from 'components/common/movelocationform';
import Tree from 'components/pages/locations/settings/tree';
import EditLocationForm from 'components/common/editlocationform';
import DeleteLocationForm from 'components/common/deletelocationform';
import { createNode, deleteNode, updateNode, uploadFloorplanView, setParent } from 'actions/node';
import { fetchCustomerOverview } from 'actions/overview';
import LeftMenu from 'components/common/leftmenu';
import ConfirmDeleteLocationForm from 'components/common/confirmdeletelocation';

export class Settings extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.openAddLocationForm = this.openAddLocationForm.bind(this);
        this.confirmDeleteLocation = this.confirmDeleteLocation.bind(this);
        this.state = {
            currentNode: {},
            isAddingLocation: false,
            isEditing: false,
            isAddingFloorplan: false,
            isEditingLocation: false,
            isDeletingLocation: false,
            isConfirmingDeleteLocation: false,
            type: 'only'
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

    openMoveLocationForm(node) {
        this.setState({ isMovingLocation: true, currentNode: node }, () => {
            console.log(this.moveLocationForm)
            this.moveLocationForm.open();
        });
    }

    closeMoveLocationForm() {
        this.setState({ isMovingLocation: false });
    }

    openEditDropdown() {
        this.setState({ isEditing: true });
    }

    closeEditDropdown() {
        this.setState({ isEditing: false });
    }

    openConfirmDeleteLocationForm() {
        this.setState({ isConfirmingDeleteLocation: true });
    }

    closeConfirmDeleteLocationForm() {
        this.setState({ isConfirmingDeleteLocation: false });
    }

    addLocation(parent, state) {
        var type = "location";
        switch (state.option) {
            case "Multi":
                type = "multicountry";
                break;
            case "Customer":
                type = "customer";
                break;
            default:
                type = "location";
        }

        let newNode = {
            info: {
                name: state.name,
                details: {},
                location: state.timezone,
            },
            type: type,
        }
        if (state.name.length == 0) {
            toastr.error("Name must not be empty.")
        }

        if (state.location == 'sub') {
            this.props.dispatch(createNode(parent.id, newNode)).then(() => {
                this.props.dispatch(fetchCustomerOverview());
                toastr.success(`Add ${newNode.info.name} successfully`)
            }).catch(error => {
                toastr.error(error);
            });
        } else {
            if (parent.type=="multicountry") {
                toastr.error("Cannot add top location above a multi-country location.")
                return;
            }
            newNode.type = 'location';
            this.props.dispatch(createNode(parent.parent.id, newNode)).then((response) => {
                this.props.dispatch(setParent(parent.id, response.id)).then(() => {
                    this.props.dispatch(fetchCustomerOverview());
                    toastr.success(`Add ${newNode.info.name} successfully`)
                }).catch(error => {
                    toastr.error(error);
                });
            }).catch(error => {
                toastr.error(error);
            });
        }
    }

    moveLocation(node, newParentId, onSuccess) {
        console.log(node.type)
        this.props.dispatch(setParent(node.id, newParentId)).then(() => {
            this.props.dispatch(fetchCustomerOverview());
            toastr.success(`Moved ${node.info.name} successfully`);
            if (typeof onSuccess == "function") {
                onSuccess();
            }
        }).catch(error => {
            toastr.error(error);
        });
    }

    deleteLocation(node, type) {
        if (type == 'all') {
            this.setState({ type: 'all' });
        }
        else {
            this.setState({ type: 'only' });
        }
        this.closeDeleteLocationForm();
        this.openConfirmDeleteLocationForm();
    }

    confirmDeleteLocation(node) {
        if (this.state.type == 'all' || node.children.length == 0) {
            this.props.dispatch(deleteNode(node)).then(() => {
                this.props.dispatch(fetchCustomerOverview());
                toastr.success(`${node.info.name} has been deleted`);
            })
                .catch(error => {
                    toastr.error(error);
                });
        }
        else {
            let parent = node.parent;
            let length = node.children.length;
            for (let i = 0; i < length; i++) {
                this.props.dispatch(setParent(node.children[i].id, parent.id)).then(() => {
                    if (i == (length - 1)) {
                        this.props.dispatch(deleteNode(node)).then(() => {
                            this.props.dispatch(fetchCustomerOverview());
                            toastr.success(`${node.info.name} has been deleted`);
                        })
                            .catch(error => {
                                toastr.error(error);
                            });
                    }
                })
                    .catch(error => {
                        toastr.error(error);
                    });
            }
        }
    }

    updateLocation(node, state) {
        if (!state.name && !state.timezone && !state.country) {
            toastr.info("Nothing changed");
        }
        else {
            var newNode = {
                id: node.id,
                info: {
                    name: state.name,
                    location: state.timezone,
                }
            };
            if (state.country == "Multi") {
                newNode.info.type = "multicountry"
            }
            this.props.dispatch(updateNode(newNode));
        }

    }

    uploadImage(node, image, state) {
        if (!node.info.hasfloorplan && state.hasfloorplan && state.useownfp && !image) {
            return [false, "This location doesn't have any floorplan yet. Please upload a new one !"]
        }
        if (image) {
            this.props.dispatch(uploadFloorplanView(node, image, state.type));
            return [true, ""];
        } else {
            var hasfloorplan = state.hasfloorplan;
            var useownfp = hasfloorplan && state.useownfp;
            var newNode = {
                id: node.id,
                info: {
                    name: node.info.name,
                    hasfloorplan: hasfloorplan,
                    useownfp: useownfp
                },
                type: state.type
            }
            this.props.dispatch(updateNode(newNode));
            return [true, ""];
        }
    }

    render() {
        return (
            <div>
                <div className="settings-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <LeftMenu overview='' comparison='' />
                            </div>
                        </div>
                        <hr className="setting-divider"></hr>
                        <div className="row">
                            <div className="col-md-12">
                                <h2 style={{marginBottom: "20px"}}>Location Settings</h2>
                                <div className="popup-container" style={{width: "50%"}}>
                                    <div className="heading clearfix">
                                        <h3 className="pull-left">{this.props.tree.info.name}</h3><a onClick={() => this.openAddLocationForm(this.props.tree)} className="button btn-green add-loc-button" data-toggle="modal">Add {this.props.tree.type == "root" ? "Customer" : "Location"}   </a>
                                    </div>
                                    <Tree openAddLocationForm={this.openAddLocationForm.bind(this)} style="location-list clearfix"
                                        tree={this.props.tree}
                                        openAddFloorplanForm={this.openAddFloorplanForm.bind(this)}
                                        closeAddFloorplanForm={this.closeAddFloorplanForm.bind(this)}
                                        openEditLocationForm={this.openEditLocationForm.bind(this)}
                                        closeEditLocationForm={this.closeEditLocationForm.bind(this)}
                                        openDeleteLocationForm={this.openDeleteLocationForm.bind(this)}
                                        closeDeleteLocationForm={this.closeDeleteLocationForm.bind(this)}
                                        openMoveLocationForm={this.openMoveLocationForm.bind(this)}
                                        location={this.props.location}
                                    />
                                    {this.state.isAddingLocation && <AddLocationForm submit={this.addLocation.bind(this)} node={this.state.currentNode} tree={this.props.tree} isAddingLocation={this.state.isAddingLocation} closeAddLocationForm={this.closeAddLocationForm.bind(this)} />}
                                    {this.state.isAddingFloorplan && <AddFloorplanForm submit={this.uploadImage.bind(this)} node={this.state.currentNode} isAddingFloorplan={this.state.isAddingFloorplan} closeAddFloorplanForm={this.closeAddFloorplanForm.bind(this)} />}
                                    {this.state.isEditingLocation && <EditLocationForm submit={this.updateLocation.bind(this)} node={this.state.currentNode} isEditingLocation={this.state.isEditingLocation} closeEditLocationForm={this.closeEditLocationForm.bind(this)} />}
                                    {this.state.isDeletingLocation && <DeleteLocationForm submit={this.deleteLocation.bind(this)} node={this.state.currentNode} isDeletingLocation={this.state.isDeletingLocation} closeDeleteLocationForm={this.closeDeleteLocationForm.bind(this)} />}
                                    {this.state.isConfirmingDeleteLocation && <ConfirmDeleteLocationForm submit={this.confirmDeleteLocation.bind(this)} type={this.state.type == 'all'} node={this.state.currentNode} isConfirmingDeleteLocation={this.state.isConfirmingDeleteLocation} closeConfirmDeleteLocationForm={this.closeConfirmDeleteLocationForm.bind(this)} />}
                                    <MoveLocationForm ref={(e) => this.moveLocationForm = e} submit={this.moveLocation.bind(this)} node={this.state.currentNode} tree={this.props.tree} nodeMap={this.props.nodeMap} me={this.props.me}/>
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
        user: state.myAccountReducer.user,
        currentSensor: state.nodeReducer.map,
        tree: state.overviewReducer.customerOverview,
        nodeMap: state.overviewReducer.nodeMap,
        me: state.myAccountReducer.user,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
