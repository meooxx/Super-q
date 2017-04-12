import { combineReducers } from 'redux'

import {
	SELECT_REDDIT, INVALIDATE_REDDIT, REQUEST_POSTS, RECEIVE_POSTS
} from '../actions/actions'


//return selectedReddit
const selectedReddit = (state = 'reactjs', action ) => {
	switch (action.type) {
		case SELECT_REDDIT: 
		  return action.reddit
		default:
		  return state
	}
}

const posts = (state={
	isFetching:false,
	didInvalidate:false,
	items:[]
},action) => {
	switch (action.type) {
		
		//set didInvalidate ture
		case INVALIDATE_REDDIT:
		  return {
				...state,
				didInvalidate:true
			}
			
	//set didInvalidate:false, isFetching:true
		case REQUEST_POSTS:
		  return {
				...state,
				isFetching:true,
				didInvalidate: false
			}
			
			//
		case RECEIVE_POSTS:
		/* 
		*return 
			*state:{
				*selectedreddit，
				*isFetching
				*didInvalidate
				*items
				*lastUpdate
				
			
				} 
		*/
		  return {
				...state,
				isFetching:false,
				didInvalidate:false,
				items:action.posts,
				lastUpdated:action.receiveAt
			}
		default:
		  return state
	}
	
	
}

const postsByReddit = (state={}, action) => {
	switch (action.type) {
		case INVALIDATE_REDDIT:
		case RECEIVE_POSTS:
		case REQUEST_POSTS:
		  return {
				...state,//selectedReddit
				/* // 这里应该直接命名为posts更好不是？
				//实际到combineReducers最终变成 
				// postsByReddit:{
					    selectedreddit：{
								isFetching:false,
								didInvalidate:false,
								items:action.posts,
								lastUpdated:action.receiveAt
							}
				}
						*/
				
				
				
				[action.reddit] : posts(state[action.reddit],action)
			}
		default :
		return state
	}
}

const rootReducer = combineReducers({
	postsByReddit,
	selectedReddit
})


export default rootReducer
