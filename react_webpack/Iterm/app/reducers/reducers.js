import { combineReducers } from 'redux'
import { USER,SIGNOUT,LOGIN } from '../actions/login'
import { RECEIVE_TOPICS, REQUEST_TOPICS } from '../actions/fetchTopic'

//Topic reducer 
const topics = (state={
	isFetching: false ,
	topics: [{}],
},action) => {
	switch(action.type) {
		case RECEIVE_TOPICS:
		
			return {
				
				topics: Object.assign({},state,action.iterms)
				
				
			}
		case REQUEST_TOPICS:
		  return {
				...state,
				isFetching:ture
			}
		default:
		  return state
		
	}
}


//users reducer
const users = (state={isAuth:false}
, action) => {
	switch(action.type) {
		case USER:
			const users=[action.user,...state]
			return {...state, users
			}
		case LOGIN:
			return {...state, isAuth:action.isAuth}
		case SIGNOUT:
			return {...state, isAuth:false}
			default:
			return state
	}
	
}


const reducers=combineReducers({
	users,
	topics
})
export default reducers