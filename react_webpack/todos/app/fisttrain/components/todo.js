import React, { Component, PropTypes }  from 'react'

export default class Todo extends Component {
	render() {
	  return (
	    <li onClick={ this.props.onClick } 
		  style={{
			listStyleType:this.props.text ?'default':'none',
		    textDecoration: this.props.completed ? 'line-through' : 'none',
		    cursor: this.props.completed ? 'default' : 'pointer'
		}}>
		{ 
		 this.props.text
		} 
	    </li>
		
	  )
	}
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired
}