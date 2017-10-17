import React from 'react';

export default class DeleteLocation extends React.Component {

  render () {
    let nodeName = this.props.nodeName;
    return (
      <li className="settings-nav-li-edit">
        <br></br>
        <div className='' style={{display:'flex', paddingLeft:'25px', color:'#E25E5A'}}>
           <div style={{flex:2}}>
             <span style={{color:'white'}}>Sure you want to delete&nbsp;
               {nodeName}?
               All locations and areas underneath will
               also be deleted.&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
           </div>
           <div style={{fontWeight: 'bold'}}>
             <span style={{color:'white'}} onClick={this.props.cancelDeleteLocation.bind(this)}>CANCEL</span>
             &nbsp;&nbsp;
             <span style={{textDecoration: 'underline'}} onClick={this.props.confirmDeleteLocation.bind(this)}>DELETE</span>
           </div>
         </div>
         <br></br>
      </li>
    )
  }
}
