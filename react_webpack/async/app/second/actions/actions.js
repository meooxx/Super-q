export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const SELECT_REDDIT = 'SELECT_REDDIT'

export const selectReddit = reddit => ({
	type:SELECT_REDDIT,
	reddit
})

export const invalidateReddit = reddit => ({
	type: INVALIDATE_REDDIT,
	reddit
})

export const requestPosts = reddit => ({
	type: REQUEST_POSTS,
	reddit
})

export const receivePosts = (reddit, json) => {
	
	return {	 
	type: RECEIVE_POSTS,
	reddit,
	posts: json.data.children.map(item=>item.data),
 
	receiveAt: Date.now()
}
}

const fetchPosts = (reddit) => dispatch=> {
	
	dispatch(requestPosts(reddit))
	//console.log(reddit)
	return fetch(`https://www.reddit.com/r/${reddit}.json`)
	.then(res=>{
	  return res.json()
		//用 return 返回 否则传递不到下个状态
	}
	).then(json=>dispatch(receivePosts(reddit,json)))
} 
/* const fetchPosts = reddit => dispatch => {
  dispatch(requestPosts(reddit))
  return fetch(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(reddit, json)))
} */
const shouldFetchPosts=(state, reddit) => {
	const posts= state.postsByReddit[reddit]
	
	if(!posts) return true

	if (posts.isFetching) return false 
	
	return posts.didInvalidate
}


export const fetchPostsIfNeeded=(reddit) => (dispatch, getState) => {
	
	//console.log(reddit)
	if(shouldFetchPosts(getState(), reddit)) {
		
		return dispatch(fetchPosts(reddit))
	}
}


