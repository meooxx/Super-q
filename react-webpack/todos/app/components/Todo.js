import React, { Component, PropTypes } from 'react'

export default function Todo(props){
	
	const { onClick, completed, text} =props
		return (
		  <li 
		    onClick={onClick}
		    style={{
			  textDecoration: completed? 'line-through' : "none",
			  cursor: completed ? 'default' : 'pointer'
				
			}}>
			  {text}{'hello here todo'}
	       </li>
		)
}


Todo.propTypes= {
	onClick: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	completed: PropTypes.bool.isRequired
}