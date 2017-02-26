import { combineReducers } from 'redux'

import { REQUEST_POSTS, RECEIVE_POSTS, SELECT_REDDIT, INVALIDATE_POSTS} from '../actions/actions'

const selectedReddit = (state='reactjs', action) => {
	switch(action.type) {
		case SELECT_REDDIT:
			//console.log('here'  + action.reddit)
		  return action.reddit
		default:
		  return state
	}
	
}

const posts = (state ={
	isFetching:false ,
	didInvalidate:false,
	posts:[] //这里没有初始化posts的时候 ，dispatch request会因为posts没有定义报错
}, action ) => {
	switch(action.type) {
		case REQUEST_POSTS:
		  return {
				...state, 
				isFetching:true,
				didInvalidate:false
				}
		case RECEIVE_POSTS: 
		  return {
				...state,
				isFetching:false,
				didInvalidate:false ,
				posts:action.posts,
				lastUpdated: action.receiveAt
				
			}
		case INVALIDATE_POSTS:
		  return {
				...state,
				didInvalidate: true,
				isFetching:false
			}
		default:
		  return state
	}
	
}

const postsByReddit = (state={}, action) => {
	switch(action.type) {
		case REQUEST_POSTS:
		case RECEIVE_POSTS:
		case INVALIDATE_POSTS:
		//console.log(state)
		  return {
				...state,
				[action.reddit]: posts(state[action.reddit],action)//call posts action.reddit init state
			}
		default :
		  return state
	}
}

export default combineReducers({
	postsByReddit,
	selectedReddit
})