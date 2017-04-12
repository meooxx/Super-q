import {  SELECT_TAB, RECORD_SCROLLT, REQUEST_TOPICS, RECEIVE_TOPICS} from '../actions/actions'


// selected tab 选定的主题
const selectedTab = (state, action) => {
	switch(action.type) {
		case SELECTED_TAB:
		  return action.tab
		default :
		  return stata
		
	}
}

const tabDataItem =(state={
	isFetching:false, page:0, scrollT:0,topics:[]
},action) => {
	switch(action.type) {
		case REQUST_TOPICS:
		  return 	{
				...state,
				isFetching:true 
						
			}
		case RECEIVE_TOPICS:
			return {
				...state,
				isFetching:false,
				page:action.page,
				topics:action.topics,
				limit:cation.limit
			}
		case RECORD_SCROLLT:
		  return {
				...state,
				scrollT:action.scrollT
			}
		default:
		  return state
	}
	
}

const tabData = (state = {}, action) => {
	switch(action.type) {
		case REQUEST_TOPICS:
		case REVEIVE_TOPICS:
		case RECORD_SCROLLT:
		  return {
				...state,
				[action.tab]: tabDataItem(state[action.tab], action)
			}
		default:
		  return state
	}
	
}


//说明 homePage的作用 哦 combinReducers 执行传入函数 
//home Page作用 分别执行 selectedtab 和 tabData 相当于 f1,f2 export default f(){f1(),f2()}()
//

const homePage = (state={
	selectedTab: 'all',
	tabData:{}
}, action) => {
	if(state) {
		const sTab = selectedTab(state.selectedTab, action) 
		const tData = tData(state.tabData, action)
			return {
				...state,
				selectedTab: stab,
				tabData: tdata
				
			}
		
	}
	return state
}



export default homePage