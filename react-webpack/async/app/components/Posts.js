import React, { Component, PropTypes } from 'react'
//这里posts in {}
const Posts = ({posts}) => (
	<ul>
	{posts.map((post,index) => 
		(<li key={index}>
			{post.title}
		</li>) )}
	</ul>
)

export default Posts