import React from 'react';
import AreaLink from './arealink';
import PlusIcon from 'components/common/icons/plus';
import MinusIcon from 'components/common/icons/minus';
import lodash from 'lodash'

export default class Navbutton extends React.Component {

    render() {
      let node = this.props.node;
      let active = lodash.includes(this.props.breadcrumbs, node);
      let selectedClass = this.props.selectedSite.id == node.id ? 'selected' : '';
      let activeClass = active ? 'active' : '' ;
      var paddingValue = this.props.step > 0 ? 25 * (this.props.step + 1) : 25;

      return (
        <div className={"nav-li " + activeClass + " " + selectedClass}>
          <div className="link" onClick={() => {this.props.actions.selectSite(node)}} >
            <div style={{paddingLeft: paddingValue}}>
              {node.name}
              {this.renderIcon(active)}
            </div>
          </div>
          <div className="nav-li-content">
            <div style={{paddingLeft: paddingValue + 25}} className="area-list">
              {
                node.areas.map( (area, idx) => {
                  return <AreaLink key={idx}
                                   isMeetingRoom={area.isMeetingRoom}
                                   area={area}
                                   selectedId={this.props.selectedArea.id}
                                   selectLocation={this.props.actions.selectLocation} />
                })
              }
            </div>
            {this.props.children}
          </div>
      </div>
      );
    }

    renderIcon(isOpen) {
      if (this.props.node.children.length > 0 || this.props.node.areas.length > 0) {
        if (isOpen) {
          return <MinusIcon />
        } else {
          return <PlusIcon />
        }
      }
    }
}
