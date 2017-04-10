import React, { Component } from 'react'
import '../styles/home.css' 
import { connect } from 'react-redux'
import { withRouter,Redirect,Link,Route } from 'react-router-dom'
import { signout } from '../actions/login'
import Something from '../components/Something'
import ShowTopics from '../components/ShowTopics' 
 
 
 
 
const Home = withRouter(({match,isAuth,user,push,dispatch}) => {

	if(!isAuth) return<Redirect to='/' />

	return(
	<div>
		<Link to={`${match.path}/showtopics`}>ShowTopics</Link>
		<Link to={`${match.path}/something`}>something</Link>
		
		<button 
				onClick={()=>{
					dispatch(signout(user))
					push('/')
					}}>
				signout
			</button>
			<br />
		<span>
			<p>
				hello<h3>{user}</h3> 				shaoqiu	love you  
			</p> 
			
		</span>
	
	<Route path={`${match.path}/showtopics`} component={ShowTopics} />
	<Route path={`${match.path}/something`} component={Something} />
	
		
	</div>
				) 
}		)



const mapStateToProps = state => {
		
		
		const {isAuth } = state.users
		const users = state.users.users || []
		
		
		const user=users[0] || 'No one'
  		return {
				user,
				isAuth
			}
	}
	
	
export default connect(
		mapStateToProps
)(Home)