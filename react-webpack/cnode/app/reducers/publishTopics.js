import { PUBLISH_TOPICS } from '../actions/acitons'

const publishTopics = (state={success:false}, action) => {
	switch(action.type) {
		case PUBLISH_TOPICS:
		  return {
				...state,
				success:action.success,
				topicId:action.topicId
			}
		default:
		  return state
	}
}

export default publishTopics