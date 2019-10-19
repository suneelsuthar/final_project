import React from 'react'
import { Button, input,Navbar,Loader } from '../../component/index'
import { connect } from 'react-redux'
import { login, Signup,currentUser,LoginFacebook } from '../../store/Action/auth_action'
import {firebaseApp} from './../../Config/Firebase/Firebase.js'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import './css/demo.css'
import './css/style3.css'
import './css/animate-custom.css'
import { Grid } from './../../component'
import FacebookIcon from '@material-ui/icons/Facebook';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
class Loginform extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      loader:false,
   
     
    }
  }

componentDidMount(){
  
  firebaseApp.auth().onAuthStateChanged(user=>{
    console.log(user)
    if(user !== null){
     
      this.props.currentUser({uid:user.uid,email:user.email})
    }
  });

  
}


  render() {
    console.log(this.state)
    return (
      
<div>
<Navbar />
      <Grid xl={4} lg={4} md={5} sm={112} xs={12}>
        <a className="hiddenanchor" id="toregister" />
        <a className="hiddenanchor" id="tologin" />
        <div id="wrapper">
          <div id="login" className="animate form">
            <div>
              <h1>Log in</h1>
              <p>
                <label htmlFor="username" className="uname lbl" data-icon="u"> Your email or username </label>
                <input onChange={(e) => this.setState({ login_email: e.target.value })} id="username" name="username" required="required" type="text" placeholder="myusername or mymail@mail.com" />
              </p>
              <p>
                <label htmlFor="password" className="youpasswd lbl" data-icon="p"> Your password </label>
                <input onChange={(e) => this.setState({ login_password: e.target.value })} id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO" />
              </p>
             
              <p className="keeplogin" >
              <label style={{color:"red"}}>
                {this.props.loginErr} 
                <span style={{color:"green"}}>{this.props.loginSuccess}</span>
                </label>
              </p>




              <p className="login button" style={{textAlign:"center"}}>
              <span href="#" className="fb btn" onClick={(data, path) =>{return this.setState({loader:true}), this.props.login(this.state, this.props.history)}} style={{backgroundColor:"rgb(30, 201, 152)",textAlign:"center"}} >
                   Login <ArrowRightAltIcon style={{color:"green"}} />
                </span>
                <span className="fb btn" style={{color:"white",backgroundColor:"rgb(66, 103, 178)"}} onClick={()=>this.props.LoginFacebook()}>
                <FacebookIcon style={{marginBottom:"0px",marginRight:"10px"}}  />
                    Login with Facebook
                </span>
              </p>
              <p className="change_link">
                Not a member yet ?
                
                <a href="#toregister" className="to_register">Join us</a>
              </p>
            </div>
          </div>





          <div id="register" className="animate form">
            <div>
              <h1> Sign up </h1>
              <p>
                <label htmlFor="usernamesignup" className="uname lbl" data-icon="u">Your username</label>
                <input onChange={(e) => this.setState({ userName: e.target.value })} id="usernamesignup" name="usernamesignup" required="required" type="text" placeholder="mysuperusername690" />
              </p>
              <p>
                <label htmlFor="emailsignup" className="youmail lbl" data-icon="e"> Your email</label>
                <input onChange={(e) => this.setState({ email: e.target.value })} id="emailsignup" name="emailsignup" required="required" type="email" placeholder="mysupermail@mail.com" />
              </p>
              <p>
                <label htmlFor="passwordsignup" className="youpasswd lbl" data-icon="p">Your password </label>
                <input onChange={(e) => this.setState({ password: e.target.value })} id="passwordsignup" name="passwordsignup" required="required" type="password" placeholder="eg. X8df!90EO" />
              </p>
              <p>
                <label htmlFor="passwordsignup_confirm" className="youpasswd lbl" data-icon="p">Please confirm your password </label>
                <input onChange={(e) => this.setState({ confirm_pass: e.target.value })} id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO" />
              </p>

              <p className="keeplogin" >
              <label style={{color:"red"}}>
                {this.props.signupErr} <span style={{color:"green"}}>{this.props.signupSuccess}</span><br />
                {this.props.isMatch_pass}
                </label>
                
              </p>

              <p className="signin button" style={{textAlign:"center"}}>
                <span href="#" className="fb btn" onClick={(data, path) => {return this.props.Signup(this.state, this.props.history), this.setState({loader:true})}} style={{backgroundColor:"rgb(30, 201, 152)"}} >
                  <i className="fa fa-facebook fa-fw"   ></i> Signup <ArrowRightAltIcon style={{marginBottom:-10}} />
                </span>
                {this.state.loader ? <Loader />:""}
                
              </p>
              <p className="change_link">
                Already a member ?
                <a href="#tologin" className="to_register"> Go and log in </a>
              </p>
            </div>
          </div>
        </div>
      </Grid>
</div>
    );
  }
}











const mapStateToProps = state => {
  console.log("=============>",state)
  return {
    loginSuccess:state.Authreducer.loginSuccess,
    loginErr: state.Authreducer.loginErr,
    signupSuccess:state.Authreducer.signupSuccess,
    signupErr: state.Authreducer.signupErr,
    isSignup:state.Authreducer.isSignup,
    isMatch_pass:state.Authreducer.isMatch_pass,
    currentuser:state.Authreducer.currentuser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (data, path) => dispatch(login(data, path)),
    Signup: (data, path) => dispatch(Signup(data, path)),
    currentUser: (data) => dispatch(currentUser(data)),
    LoginFacebook:()=>dispatch(LoginFacebook())
    
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Loginform)

