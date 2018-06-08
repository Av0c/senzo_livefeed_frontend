import React from 'react';
import Location from 'components/pages/locations/settings/location';

export default class Tree extends React.Component {

    render() {
        var childNodes;
        var style = "collapse in";
        var self = this;
        if (this.props.tree.children != null && this.props.tree.type != 'meeting_room' && this.props.tree.type != 'open_area') {
            childNodes = this.props.tree.children.map(function (node, index) {
                return (<Location
                    openAddLocationForm={self.props.openAddLocationForm}
                    openAddFloorplanForm={self.props.openAddFloorplanForm}
                    closeAddFloorplanForm={self.props.closeAddFloorplanForm}
                    openEditLocationForm={self.props.openEditLocationForm}
                    closeEditLocationForm={self.props.closeEditLocationForm}
                    closeDeleteLocationForm={self.props.closeDeleteLocationForm}
                    openDeleteLocationForm={self.props.openDeleteLocationForm} key={index} node={node}
                    openMoveLocationForm={self.props.openMoveLocationForm}
                    location={self.props.location}
                    >

                    <Tree openAddLocationForm={self.props.openAddLocationForm} style={style} tree={node}
                    openAddFloorplanForm={self.props.openAddFloorplanForm}
                    closeAddFloorplanForm={self.props.closeAddFloorplanForm}
                    openEditLocationForm={self.props.openEditLocationForm}
                    closeEditLocationForm={self.props.closeEditLocationForm}
                    closeDeleteLocationForm={self.props.closeDeleteLocationForm}
                    openDeleteLocationForm={self.props.openDeleteLocationForm}
                    openMoveLocationForm={self.props.openMoveLocationForm}
                    location={self.props.location}
                    />
                </Location>);
            });
        }
        return (
            <ul className={this.props.style}>
                {childNodes}
            </ul>
        );
    }
}
