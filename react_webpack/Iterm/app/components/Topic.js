import React, { Component } from 'react'

const Topic = (props) => {
	const topic = props.topic
	
	return (
	
	
	
  <li>
	  {/*   ������Է�һ����ʾmarkdown��ʽ�����    */}
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