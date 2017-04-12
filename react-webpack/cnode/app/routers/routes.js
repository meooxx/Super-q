import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomePage from '../containers/HomePage'
import Article from '../containers/Message'
import Login from './containers/Login'
import Profile fomr '../containers/profile'
import Message from '../containers/Message'



/* *
	*<Route path='/' component={App}>
	*		<Route path='about' component={About}>
	*		<Route path='topic/:id' component={Article} />
	*		<Route path='home' component={Home}>
	* </Route>
	* 嵌套路由的结构
	***
*/

const PublishTopic = (location, cb) => {
	require.ensur([], require => {
		cb(null, require('../containers/PublishTopic').default)
	}, 'PublishTopic')
}


//有传说中的 按需加载
const routes = (


	<Route paht='/' component={App} />
		<IndexRoute component={HomePage} />
		<Route path='topic/:id' component={Article} />
		<Route path='message' component={Message}/>
		<Route path='login' component={Login}/>
		<Route path='profile' component={Profile} />
		<Route path='publishTopic' component={PublishTopic} />
	</Route>
)


export default routes
