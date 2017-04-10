import React, { PropTypes, Component } from 'react'

const Selected = ({value,options, onChange}) => {
	return (
	  <span>
			<h1>{value}</h1>
			<select value={value}
							onChange={onChange}
							 >
				{options.map((op,index) => 
					(<option key={index}>
							{op}
					</option>)) 
					}
				
			</select>
		</span>
	)
} 

export default Selected