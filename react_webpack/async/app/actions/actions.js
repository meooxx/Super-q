export const REQUEST_POSTS = 'REQUEST_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const INVALIDATE_POSTS = 'INVALIDATE_POSTS'

export const selectReddit = (reddit) => ({
	type : SELECT_REDDIT,
	reddit
})

export const invalidatePosts = reddit => ({
	type: INVALIDATE_POSTS,
	reddit
})

export const requestPosts = reddit => ({
	type: REQUEST_POSTS,
	reddit
})

export const receivePosts = (reddit, json) => ({
	type: RECEIVE_POSTS,
	reddit,
	posts: json.data.children.map(item => item.data),
	receiveAt: Date.now()
})

const fetchPosts =  (reddit) => dispatch => {
	dispatch(requestPosts(reddit))
	
	let url = `https://www.reddit.com/r/${reddit}.json`
	
	return fetch(url).then(res => res.json()).then(json =>dispatch(receivePosts(reddit, json)) )
}

const shouldFetchPosts=(reddit,state) => {
	
	
	const posts =state.postsByReddit[reddit]
	
	
	if(!posts) return true 
	//console.log("fething:"+posts.isFetching)
	if(posts.isFetching) return false 
	//console.log(posts.didInvalidate)
	return posts.didInvalidate
	
}

export const fetchPostsIfNeeded=(reddit) => (dispatch, getState) => {
	if(shouldFetchPosts(reddit, getState())) {
		
		dispatch(fetchPosts(reddit))
	}
}


















