import { REQUEST_ARTICLE, RECEIVE_ARTICLE, CHANGE_CURRENT_TOPICID, WITCH_SUPPORT, FETCH_COMMENT, RECORD_ARTICLE_SCROLLT } from '../actions/actions' 

const article = (
	state={
		//获取帖子id
		currentTopicId:'',
		}, action) => {
			
	let stateItem = state[action.topicId]	|| {}
	
	//什么时候change？？
	switch(action.type) {
		case CHANGE_CURRENT_TOPICID:
		  return {
				...state,
				currentTopicId:action.topicId
			}
			
			//选择support 类型 ups 或者down
		case SWITCH_SUPPORT:
		  return {
				...state,
				switchSupportInfo: {
					replyId: action.replyId,
					index:action.index,
					success:action.success,
					action: action
				}
			}
			
			
	//获取评论 成功 replyId：回复某人 参数
		case FETCH_COMMENT:
		//这里只记录 action.success 回复？？
		  return {
				...state, 
				isCommented: action.success
			}
			
		case RECORD_ARTICLE_SCROLLT:
		  stateItem = {
				...stateItem,
				scrollT:action.scrollT
			}
		  return {
				...state,
				[action.topicId]: stateItem,
				currentTopicId:action.topicId
			}
			
		case REQUEST_ARTICLE:
		  stateItem = {...stateItem, isFetching:true}
			return {
				...state,
				[action.topicId]: stateItem,
				currentTopicId:action.topicId,
				isCommented:false
			}
			
		case RECEIVE_ARTICLE:
		  stateItem = {
				...stateItem,
				isFetching:false ,
				acticle:action.article
			}
			return {...state,
				[action.topicId]: stateItem
			}
		default:
		  return state
	}
		}
		
		export default article