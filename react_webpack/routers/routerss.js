import React, { Component }  from 'react'

import { BrowserRouter as Router, Link, withRouter, Route, Redirect } from 'react-router-dom'

const fakeAuth = {
	isAuthenticated: false,
	authenticate(cbFunc) {
		this.isAuthenticated = true
		cbFunc()//这里可以异步函数 setTimeout模拟
						//ps : 直接调用函数也是可行的 官方demos上面 注释说async应该是这里可以用 异步的 吧
						
	},
	signout(cbFunc) {
		this.isAuthenticated = false
		cbFunc()
		
	}
}

//只有登录才会 渲染实际内容 感觉可以拓展 加以验证 、、、 
//state documention {referrer:currentlocaton}
const Private = ({component:Component,...rest }) => (
	<Route {...rest}  render={
		(props) =>
		(fakeAuth.isAtuehnticated ? (
				<Comoponent {...props} />
		
		)
		:(<Redirect to={
				{pathname: '/login',
				 state:{from: props.location}
			}
		} />)
		)
	}
	/>
)

//public component
const Public= () => {
	return <h3>Public</h3>
	
}

//protected component
const Protected = ()  => {
	return <h3>Protected</h3>
}

// has logged button display above Links
// push 用于跳转吧 signout 就直接跳到‘/’
const AuthButton = withRouter(({push}) => 
	fakeAuth.isAuthenticated ? ( 
		<p>Welcome!
			<button onClick={()=>fakeAuth.signout(()=>
				push('/') )} >
				Sign Out
			</button>
		</p>
	):(<h3>you are't logged</h3>)
)


//显示组件吧 这样说ok？

const AuthExample = () => (
  <Router>
		<div>
			<AuthButton/>
			<ul>
				<li>
					<Link to='/public' >Public p </Link>
				</li>
				<li>
					<Link to='/protected' >protected p </Link>
				</li>
			</ul>
			<Route path='/public' component={Public} />
			<Route path='/login' component={Login} />
			<Private path='/protected' component={Protected}/>
		</div>
	</Router>
)

//login 提示你去登录
 class Login extends Component {
	 state={
		isRedirectToReferrer:false
	}
	
	
	 login = () => {
		 
		  fakeAuth.authenticate(
			()=>this.setState(
			{
				isRedirectToReferrer:true
			}))
			
		 }
	 
	 
	
	render() {
	const { from } = this.props.location.state ||
		{from:'/'}
		const { isRedirectToReferrer} = this.state 
	if(isRedirectToReferrer) {
		return <Redirect to={from} />
	}
	return (
		<p> you  must log in at {from.pathname}
			<button onClick={this.login}>login</button>
		</p>
	)
	
	}
}

export default AuthExample 
