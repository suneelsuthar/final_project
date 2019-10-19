import React from 'react'
import './profile_section.css'
import {logout} from './../../store/Action/auth_action'
import {connect} from 'react-redux'
import  history from './../History/history'

class Profile_sec extends React.Component{
    render(){
// console.log(this.props.path.history.push("/profile"))


return(
	<ul class="profile-wrapper">
			<li>
				<div class="profile">
					<img style={{height:25,width:25,borderRadius:100}} src="http://gravatar.com/avatar/0e1e4e5e5c11835d34c0888921e78fd4?s=80" />
					<a href="http://swimbi.com" class="name"> {this.props.currentuser.user} </a>
					
					<ul class="menu">
						<li onClick={()=>this.props.path.history.push("/profile")}><span>Advance setting</span></li>
						<li><span href="#">Change Password</span></li>
						<li onClick={(path)=>this.props.logout()}><span >Log out</span></li>
					</ul>
				</div>
			</li>
		</ul>
	)}}
	

	const mapStateToProps = state => {

	console.log(state.Authreducer.currentuser)
		return {
    currentuser:state.Authreducer.currentuser
		}
	}
	
	const mapDispatchToProps = dispatch => {
		return {
		   logout: () => dispatch(logout()),
	
		}
	}
	
	
	
	export default connect(mapStateToProps, mapDispatchToProps)(Profile_sec)
	