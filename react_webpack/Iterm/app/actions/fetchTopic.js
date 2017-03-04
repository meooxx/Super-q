export const REQUEST_TOPICS = 'REQUEST_TOPICS'
export const RECEIVE_TOPICS = 'RECEIVE_TOPICS'


const requestTopics = (topic) => ({
	type:REQUEST_TOPICS,
	topic
	
	
})

const receiveTopics = (iterms,topics ) => {
  
	
	return{ type:RECEIVE_TOPICS,
				iterms,
				topics
		/*
		 * content:{
		 * auth: iterm.loginname,
		 * topic: iterm.content,
		 * createAt: iterm.create_at,
	   * lastReplyAt:iterm.last_reply_at,
		 *  title: iterm.title,
		 * visitCount: iterm.visit_count,
		 *  type:topics
		

	   * }
			 */
}
}

const fetchTopics =(topics)=> (dispatch) => {
	dispatch(requestTopics)
	return fetch( `https://cnodejs.org/api/v1/${topics}`).then(res => res.json()).then((json,topic)=>{ 
		
		dispatch(receiveTopics(json,topics))
		
		})
}

const shouldFetchTopics =()=> {
	//just place
	
	
}



export const fetchIfNeeded = (topics) => dispatch=> {
	dispatch(fetchTopics(topics))
}

