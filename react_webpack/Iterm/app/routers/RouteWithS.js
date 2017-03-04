import React, { Component } from 'react'
import { Route } from 'react-router-dom'

const RouteWithSub = ({component:Component,...rest}) => {
	
	return <Route {...rest} render={(props)=>
		{
	   return <Component {...props} />
		}
	} />
	
	
}

export default RouteWithSub