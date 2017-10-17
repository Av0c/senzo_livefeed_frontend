import React from 'react';

export default class DeleteArea extends React.Component {

  render () {
    let name = this.props.area.name;
    return (
      <li className="settings-nav-li-edit">
        <br></br>
        <div className='delete-row'>
           <div style={{flex:2}}>
             <span style={{color:'white'}}>Sure you want to delete&nbsp;
               {name}?
            </span>
           </div>
           <div style={{fontWeight: 'bold'}}>
             <span style={{color:'white'}} onClick={this.props.cancelDeleteArea.bind(this)}>CANCEL</span>
             &nbsp;&nbsp;
             <span style={{textDecoration: 'underline'}} onClick={this.props.confirmDeleteArea.bind(this)}>DELETE</span>
           </div>
         </div>
         <br></br>
      </li>
    )
  }
}
