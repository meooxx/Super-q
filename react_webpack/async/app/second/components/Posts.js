import React, { Component, PropTypes } from 'react'


const Posts = ({posts}) => (
	<ul>
		{posts.map((post,index) => 
			<li key={index} >
				{post.title}
			</li>)}
	</ul>	 

)

Posts.propTypes={
	posts:PropTypes.array.isRequired
}

export default Posts