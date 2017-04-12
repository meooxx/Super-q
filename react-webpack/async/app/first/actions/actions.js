export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'


// 选择 Reddit
export const selectReddit = reddit => {
 
 return {type: SELECT_REDDIT, reddit}
	

}

//type set invalidate:ture使其无效
export const invalidateReddit = reddit => ({
	type: INVALIDATE_REDDIT, 
	reddit
})

//type set didInvalidate false,isFetching:ture
export const requestPosts = reddit => ({
	type:REQUEST_POSTS, reddit
})

//type receive post .
/// set isFeting:false didInvalidate:false
// pass posts and time in state
export const receivePosts=(reddit, json) =>({
	type: RECEIVE_POSTS, 
	reddit,
	
	posts:json.data.children.map(child=>child.data),
	
	receiveAt: Date.now()
	
})


//函数 设置state requesPost（reddit）
//fetch(url+reddit)
const fetchPosts = reddit=>dispatch=>{
	//change state.isFething：true
	// state.didIvalidate:false
	dispatch(requestPosts(reddit))
	// fetch posts
	var posts = fetch(`https://www.reddit.com/r/${reddit}.json`)
	//response.json()
	.then(response=>response.json())
	//call调用 receivePost(reddit, json)
	
	//dispatch({type:RECEIVE_POSTS,reddit,posts:[],receiveAt:})
	.then(json=>dispatch(receivePosts(reddit, json)))
	
	return posts
}

//判断是否该fetch新的数据

const shouldFetchPosts = (state, reddit) => {
	//得到state.postsByReddit[reddit]
	const posts = state.postsByReddit[reddit]
	//posts false true
	if(!posts) {
		return true
	}
	//feting false
	if(posts.isFetching) {
		return false 
	}
	
	return posts.didInvalidate
}



export const fetchPostsIfNeeded = reddit => (dispatch, getState)=>{
	if(shouldFetchPosts(getState(), reddit)) {
	
		return dispatch(fetchPosts(reddit))
	}
	
}