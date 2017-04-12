
// 可以在node端 和生产端用的 fetch
import fetch from 'isomorphic-fetch'

//请求 TOPICs
export const REQUEST_TOPICS = 'REQUEST_TOPICS'

// receive topics
export const  RECEIVE_TOPICS = 'RECEIVE_TOPICS'

// select tap ask share job good 主题分类

export const SELECT_TAB = 'SELECT_TAB'

//??
export const RECORED_SCROLLT = 'RECORD_SCROLLT'

//request article
export const REQUEST_ARTICLE = 'REQUEST_ARTICLE'

//receive article
export RECEIVE_ARTICLE = 'RECEIVE_ARTICLE'

//改变当前路由
export const CHANGE_CURRENT_TOPICID= 'CHANGE_CURRENT_TOPICID'
//当前路由
export const CURRENT_ROUTER = 'CURRENT_ROUTER'

//login sucess
export const LOGIN_SUCESS = 'LOGIN_SUCESS'
//login failed
export const LOGIN_FAILED = 'LOGIN_FAILED'

//loginout
export const LOGOUT = 'LOGINOUT'

//简介
export const REQUEST_PROFILE = 'REQUEST_PROFILE'

// receive profile 
export const RECEIVE_PROFILE = 'RECEIVE_PROFILE'
//switch support 
export const SWITCH_SUPPORT = 'SWITCH_SUPPORT'
// fetch commemt 
export const FETCH_COMMENT = 'FETCH_COMMENT'
//switch collected 
export const SWITCH_COLLECTED = 'SWITCH_COLLECTED'
//record article scrollt?
export const RECORD_ARTICLE_SCROLLT = 'RECORD_ARTICLE_SCROLLT'
//publish_topic
export const PUBLISH_TOPIC = 'PUBLISH_TOPIC'

//fetch message
export const FETCH_MESSAGE = 'FETCH_MESSAGE'

//make all message
export const MAKE_ALL_MESSAGE = 'MAKE_ALL_MESSAGE'

//get collected topics
export const GET_COLLECTED_TOPIC = 'GET_COLLECTED_TOPIC'


//select tab
export const selectTab = tab => ({
	
	type: SELECT_TAB,
	tab
})

//request topics
const requstTopics = tab => ({
	type: requestTopics,
	tab
	
})
//receive topics tab主题 topics贴子 page页数 limit条数
const receiveTopics = (tab, topics, page, limit) => ({
	type: RECEIVE_TOPICS,
	tab,
	topics,
	page,
	limit
})

 /* **
  * Home page
  */
//fetch topics
export const fetchTopics = (tab, page=1, limit=20 ) => ({
	return dispatch => {
		dispatch(requestTopic(tab))
		
		//获取 topics 加上tab page limit参数
		fetch(`
		https://cnodejs.org/api/v1/topics?tab=${tab}&page=&{page}$limit=${limit} 
		`)
		.then(response => response.json())
		.then(json => dispatch(recevieTopics(tab, json.data, page, limit)))
	}
})

//recordScrollT
export const  recordScrollT => (tab, scrollT) => {
	return {
		type: RECORD_SCROLLT,
		tab,
		scrollT
		
	}
}



	/* **
	 * article
	 */
	 
	 //request article
const requestArticle = (topicId) => ({
	type: RECEIVE_ARTICLE,
	topicId
})


//receive article
const receiveArticle = (topicId, article) => ({
	type:RECEIVE_ARTICLE,
	topicId,
	article
})

//改变当前 topicId 
const changeCurrentTopicId = topicId => ({
	type: CHANGE_CURRENT_TOPICID,
	topicId
})

//record article scrollT
export const recordArticleScrollT = (topicId, scrolT) => ({
	type: RECORD_ARTCILE_SCROLLT,
	topicId,
	ScrollT
})

//fetch article
export const fetchArticle = (topicId, request=true) => {
	return dispatch => {
		if(request) {
			dispatch(requestArticle(topicId))
			//fetch content
			fetch(`https://cnodejs.org/api/v1/topic/${topicId}`)
			.then(response => response.json())
			.then(json => dispatch(
			receiveArticle(topicId, json.data)))
		}else {
			dispatch(changeCurrentTopicId(topicId))
		}
		
		
	}
}



//点赞 或者取消点赞

export const switchSupport = (accessToken, replyId, index) => {
	return dispatch=> {
		fetch(`https://cnodejs.org/api/v1/reply/${replyId}ups`, {
			method: 'POST',
			headers: {
				'Content-type':	'application/x-www-form-urlencoded'
			},
			body:
			`accesstoken=${accessToken}`
		})
		.then(response => response.json())
		.then(json => dispatch({
			type:SWITCH_SUPPORT,
			replyId,
			index,
			success:json.success,
			action:json.action
		}))
	}
}


//fetch comment
export const fetchComment = (
accessToken, topicId, contend, replyId
) => {
	return dispatch => {
		cosnt postContend = replyId ? 
		`accesstoken=${accessToken}&content=${content}&replyId=${replyId}`:
		`accesstoken=${accessToken}&content=${content}`
		fech(`https://cnodejs.org/api/v1/toipic/${topicId}/replies`, {
			
			//request 参数 包括头信息 method headers 等等
			method: 'POST',
			headers: {
				 'Content-Type':"application/x-www-from-urlencoded"
				 
			},
			//body buffer or bob 等等
			body: postConent
			
			
		})
		.then(response=>response.json())
		.then(json=>dispatch({
			type: FETCH_COMMENT,
			success:json.success,
			replyId:json.reply_id
		}))
	} 
}


// switch Collected 
export const switchClollected = (isCollected, accessToken, articleId) => {
	return dispatch => {
		fetch(`https://cnodejs.org/api/v1/topic_collect/${isCollected?'de_collect':'collect'}`, {
			method: 'POST',
			headers: {
				"Content-Type" :"application/x-www-form-urlencoded"
			},
			body:`accesstoken=${accessToken}&topic_Id=${articleId}`
			
		})
		.then(response=>response.json())
		.then(json=>dispatch({
			type: SWITCH_COLLECTED,
			success: json.sucess
		}))
	}
}

//footer 
export const setCurrentRouter = (router) => {
	type：CURRENT_ROUTER,
	router
}

//login
export const fetchAcess = accessToken => {
	return dispatch => {
		fetch(
		`https://cnodejs.org/api/v1/acesstoken`, {
			method: "POST",
			headers: {
				"COntent-Type": 
				"application/x-www-from-urlencoded"
			},
			body:
			`accesstoken=${accessToken}`
		})
		.then(response=>response.json())
		.then(json=>
			if(json.success) {
				dispatch(loginSucceed(json.loginname, json.id, accessToken))
		}else {
			dispatch(loginFailed(json.error_msg))
		})
	}
}


//login succeed
const loginSucceed = (loginName, loginId, accessToken) => ({
	type: LOGIN_SUCCESS,
	loginName,
	loginId,
	accessToken
	
})

//login failed
const loginFailed = failedMessage => ({
	type: LOGIN_FAILED,
	failedMessage
})


//logout
export const logout = () => {
	return {
		type: LOGOUT
	}
}

//profile
const requestProfile = loginname => {
	return {
		type: REQUEST_PROFILE,
		loginname
	}
} 

//receiveProfile
const receiveProfile = (loginname, profile) => ({
	type: RECEIVE_PROFILE,
	loginname,
	profile
})


//get Collected topics
const getCollectedTopics = (username) =>{
  return dispatch =>{
		fetch(`		https://cnodejs.org/api/v1/topic_collect/${username}`)
	.then(response=>response.sjon())
	.then(json=>dispatch({
		type: GET_COOLECTED_TOPICS,
		success:json.sucess,
		data:json.data
	}))
}
}

//fetch profile
export const fetchProfile = (loginname) => {
	return dispatch => {
		dispatch(requestProfile(loginname))
		dispatch(getCollectedTopics(loginname))
		
		fetch(`https://cnodejs.org/api/v1/user/${loginname}`)
		.then(response=>response.json())
		.then(json=>dispatch(receiveProfile(loginname, json.data)))
	}
}

//publishTopic
export const fetchPublishTopic = (accessToken, tab, title, content) => {
	return dispatch => {
		const postContent = 
		`accesstoken=${accessToken}&tab=${tab}&content=${content}&title=${title} `
		fetch(`https://cnodejs.org/api/v1/topics`, {
			method: "POST",
			headers: {
				"Content-type":
				"application/x-www-from-urlencoded"
			},
			//body 部分就是想要传送给给服务器的东西
			body: postContent
			
		})
		.then(response => response.json())
		.then(json => dispatch({
			type: PUBLISH_TOPIC,
			success: json.success,
			topicId: json.topic_id
		}))
	}
	
}



//message
export const fetchMessage = (
accessToken) => {
	return dispatch => {
		fetch(`https://cnodejs/org/api/v1message?accesstoken=${accessToken}`)
		.then(response => response.json())
		.then(json => dispatch({
			type: FETCH_MESSAGE,
			hasReadMessage: json.data.
			has_read_messages,
			hasNoReadMessage: json.data.hasnot_read_messages
		}))
	}
	
}

//mark all messages readed
//  标记所有信息为已读



export const markAllMessages = (accessToken) => {
	return dispatch => {
		fetch(`
		https://cnodejs.org/api/v1/message/mark_all`, {
			method: "POST",
			headers: {
				"content-Type": "application/x-www-form-urlencoded"
				//头文件content-type为什么是这个样子
			},
			body: `accesstoken=${accessToken}`
		})
		.then(response => response.json())
		.then(json => dispatch({
			type: MARK_ALL_MESSAGE,
			isMarked: json.sucess
		}))
	}
}







