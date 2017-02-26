import React, { Component, PropTypes } from 'react'

export default class Footer extends Component{
  renderFilter(filter, name) {
	  if(filter === this.props.filter) {
		  return name
	  }
	  
	  return (
	    <a href='#' onClick={e => {
		e.preventDefault()
		this.props.onFilterChange(filter)}}>
		   {name}
	  </a>  
	  )
  }
	
	render() {
		return (
		  <p>
		    Show:
			{' '}
			{this.renderFilter('SHOW_ALL', 'ALL')}
			{', '}
			{this.renderFilter('SHOW_COMPLETED','completed')}
			{' ,'}
			{this.renderFilter('SHOW_ACTIVE','active')}
			.
		  </p>
		)
		
	}
	
}
Footer.propTypes = {
	onFilterChange:PropTypes.func.isRequired,
	filter: PropTypes.oneOf([
	  'SHOW_ALL',
	  'SHOW_COMPLETED',
	  'SHOW_ACTIVE'
	
	]).isRequired
}














