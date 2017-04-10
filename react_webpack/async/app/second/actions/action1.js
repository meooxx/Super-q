
// type : requestPosts, receivePosts,
 //         selectReddit,invalidateReddit, 
 
 // function shouldFetch , fetchPostsIfNeeded, fetchPosts
 
 export const REQUEST_POSTS = 'REQUEST_POSTS'
 export const RECEIVE_POSTS = 'RECEIVE_POSTS'
 export const IVALIDATE_REDDIT = 'INVAliDATE_REDDIT'
 
 export const SELECT_REDDIT = 'SELECT_REDDIT'
 
 export const requestPosts=(reddit) => ({
	 type: REQUEST_POSTS,
	 reddit
 })
 export const selectPosts = (reddit) => ({
	 type: SELECT_POSTS,
	 reddit
 }) 
 export const receivePosts=(json, reddit)=> ({
	 type: RECEIVE_POSTS,
	 reddit,
	 posts: json.data.children.map(item=>item.data),
	 receiveAt: Date.now()
 })
 
 const shouldFetchPosts = (state, reddit) => {
	const posts = state.postsByReddit[reddit]
	if(!posts) return true
	if(posts.isFetching) return false 
	return posts.didInvaliReddit
 }
 
 const fetchPosts = (reddit) => {
	 // set isFetching:false
	 
	 dispatch(requestPosts(reddit))
	 
	 return fetch(`https://wwww.reddit.com/r/${reddit}.json`).then(res=>res.json).then(json=>dispatch(receivePosts(json,reddit)))
 }
 export default const fetchPostsIfNeeded=(reddit)=>{//多一对花括号
	 (dispatch,getState) => {
		 const state = getState()
		 if(shouldFetchPosts(state,reddit)) {
			 
			 //dispatch 提供给异步函数diapatch放完当进行完之后就dispatch
			 dispatch(fetchPosts(reddit))
	 }
 }
 }