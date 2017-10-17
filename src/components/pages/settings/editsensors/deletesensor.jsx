import React from 'react';

export default class DeleteSensor extends React.Component {

  render () {
    let nodeName = this.props.nodeName;
    return (
      <li className="settings-nav-li-edit">
        <br></br>
        <div className='' style={{display:'flex', paddingLeft:'25px', color:'#E25E5A'}}>
           <div style={{flex:2}}>
             <span>Sure you want to delete sensor&nbsp;
               {nodeName}?
            </span>
           </div>
           <div onClick={this.props.confirmDeleteSensor.bind(this)}
             style={{textDecoration: 'underline', fontWeight: 'bold'}}>
             DELETE
           </div>
         </div>
         <br></br>
      </li>
    )
  }
}
