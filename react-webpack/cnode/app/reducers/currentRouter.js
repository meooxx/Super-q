import { CURRENT_ROUTER }  from '../actions/actions'

const currentRouter = (state='home', saction) => {
	switch(action.type) {
		case CURRENT_ROUTER:
		  return action.router
		default: 
		  return state
	}
}

export default currentRouter