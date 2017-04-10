import React, { Component } from 'react'

const Topic = (props) => {
	const topic = props.topic
	
	return (
	
	
	
  <li>
	  {/*   这里，可以放一个显示markdown格式的组件    */}
		<p>
			 {topic.title} ,
			 count:{topic.visitCount},
			 lastReply:{topic.lastReplyAt},
			 createAt:{topic.createAt}
			</p>
	</li>
)
}
export default Topic