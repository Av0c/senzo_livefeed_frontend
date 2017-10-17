import React from 'react';

export default class Delete extends React.Component {

  render () {
    let user = this.props.user;
    let name = `${user.firstName} ${user.lastName}`;
    return (
      <div className="settings-nav-li-edit">
        <br></br>
        <div className='' style={{display:'flex', paddingLeft:'25px', color:'#E25E5A'}}>
           <div style={{flex:2}}>
             <span>Sure you want to delete&nbsp;
               {name}?
            </span>
           </div>
           <div onClick={this.props.confirmDelete.bind(this,user.id)}
             style={{textDecoration: 'underline', fontWeight: 'bold'}}>
             DELETE
           </div>
           <div>
           &nbsp;&nbsp;
           </div>
           <div onClick={this.props.cancelDelete.bind(this)}
             style={{textDecoration: 'none', fontWeight: 'bold', color:'white'}}>
             CANCEL
           </div>
         </div>
         <br></br>
      </div>
    )
  }
}
