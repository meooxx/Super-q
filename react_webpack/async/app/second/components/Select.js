import React, { Component, PropTypes } from 'react'
/* {
		//这边不能用{}用（） 包起来jsx
	} */
const Select= ({selectedReddit, onChange, options}) => (
	<div>
		<h1>{selectedReddit}</h1>
		<select value={selectedReddit}
						onChange={e=>{onChange(e.target.value)}}
						 >
			{options.map(value=>
				<option value={value} key={value}>
					{value}
				</option>)
				}
		</select>
	</div>
)

Select.propTypes={
	selectedReddit: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	options:PropTypes.arrayOf(
	 PropTypes.string.isRequired
	).isRequired
		
	}

export default Select

