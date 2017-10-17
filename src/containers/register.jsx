import React from 'react';
import { register } from 'actions/authentication'
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Register extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.displayName = 'Register'
    this.state = {email: "", password: ""}
  }

  handleChange(e){
    let key = e.target.id;
    let value = e.target.value;
    this.setState ({[key] : value});
  }

  render() {

    return(
      <div className="login-page-wrapper">
         <div className="logo"></div>
           <div className="login-box-wrapper">
             <div className="login-box">
               <form action="#">
                 <label htmlFor="email">EMAIL</label>
                 <input type="email" id="email" onChange={this.handleChange.bind(this)} required />
                 <label htmlFor="password">PASSWORD</label>
                 <input type="password" id="password" onChange={this.handleChange.bind(this)} required />
                 <label htmlFor="second-password">PASSWORD AGAIN</label>
                 <input type="password" id="second-password" onChange={this.handleChange.bind(this)} required />
                 <input type="button" value="Register" onClick={this.submit} />
                  <Link to='/login'>Login</Link>
               </form>
             </div>
           </div>
      </div>
    )
  }

  submit() {
    this.props.dispatch(register(this.state))
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
