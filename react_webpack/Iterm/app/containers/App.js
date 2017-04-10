import React, { Component } from 'react'
import Welcome from '../components/welcome'
import Login from '../components/login'
import {Route} from 'react-router-dom'
import Nav from '../routers/Nav'
import RouteWithSubR from '../Routers/RouteWithS'

const App = (props) => {
	
	return	(
		<div>
			<RouteWithSubR path='/' exact component={Login} />
			
			<RouteWithSubR strict path='/nav'  component={Welcome} />
		
		</div>
			
)
}

export default App