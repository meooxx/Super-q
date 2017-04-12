import { combineReducers } from 'redux'
import homePage from './homePage'
import article from './article'
import login from './login'
import profile from './profile'
import message from './message'
import  publishTopics from './publishTopics'

const rootReducers = combineReducers({
	homePage,
	article,
	login,
	profile,
	publishTopics,
	message
})

export default rootRedcucer
