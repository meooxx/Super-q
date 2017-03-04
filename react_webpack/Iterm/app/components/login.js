import React, { Component } from 'react'
import '../styles/login.css'
import { Redirect ,Route} from 'react-router-dom'
import Nav from '../routers/Nav'
import Page from '../components/welcome'
import { user,login } from '../actions/login'
import { connect } from 'react-redux'


class Login extends Component{
	
	//获取用户输入
	
	handleSubmit= (e) => {
		const { dispatch } =this.props
		e.preventDefault()
		
		const userValue = e.target[0].value;
		const password = e.target[1].value
		if(!user || !password) return
		dispatch(user(userValue))
		
		//这里可以使用redux管理一下user状态吧  
		e.target.reset()
		dispatch(login(userValue))
		//
		
		
	}
	
	render() {
		const { isAuth } =this.props
		if(isAuth) return <Redirect to='/nav' />
		return (
			<form className='form' onSubmit={this.handleSubmit
				
				}>
				<div className='welcome'>
				<p>
					Welcome to super-q webpages!
				</p>
				<img src='' /> 
				<i>
				{	/*  可以放图片在上面 */}
				</i>
				</div>
				<input className='user' type='text' placeholder='input anything' onChange={this.handleChange} />
				<br/>
				<br/>
				<input className='password' type='password' placeholder='anything ' />
				<br/>		
				<br/>
				<br/>	
				<button type='submit' className='login'>login</button>
				<button className='holder'>holder</button>
				
	</form>
	
)
	}
	}
	
	const mapStateToProps =(state) => {
		
		const { isAuth } = state.users || false 
		return {
			isAuth 
			}
		
	}
	
	
	export default connect(mapStateToProps)(Login)