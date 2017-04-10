import React, { Component, PropTypes } from 'react'

import { connect } from 'react-redux'
import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends Component {
	constructor(){
		super()
		this.handleChange=this.handleChange.bind(this)
	}
	// didMount fetch posts
	componentDidMount() {
		
		//selectedReddit one of [reactjs, frontend]
		
		const { dispatch, selectedReddit } =this.props
		dispatch(fetchPostsIfNeeded(selectedReddit))
	}
	//如果下一个porps是否需要重新dispatch 改变state
	//注释掉之后 and not fetch any more
	 componentWillReceiveProps(nextProps) {//nextProps newPorps
		if(nextProps.selectedReddit !== this.props.selectedReddit) {
			const {dispatch, selectedReddit } =nextProps
			dispatch(fetchPostsIfNeeded(selectedReddit))
		}
	}
	 
	 //handleChange
	handleChange = nextReddit => {
		console.log('here handleChange: ' + nextReddit )
		this.props.dispatch(selectReddit(nextReddit))
	}
	
	//handleFreshClick  
	handleRefreshClick = e => {
		e.preventDefault()
		
		const { dispatch, selectedReddit } = this.props
		//invalidate 
		dispatch(invalidateReddit(selectedReddit))
		//fetchPostsIfNeeded
		dispatch(fetchPostsIfNeeded(selectedReddit))
	}
	render() {
		
		const { selectedReddit, posts, isFetching, lastUpdated } = this.props
		
		const isEmpty = posts.length === 0 
		
		
		return (
		  <div>
			<select >
					<option value='1' key='1'>
					  1
					</option>
					<option value='2' key='2'>
					 2
					</option>
				</select>
				{
					/* Picker 下拉菜单
					 *value 为设置默认option
					*/
				}
				
				
			  <Picker value={selectedReddit}
								onChange={this.handleChange}
								options = {['reactjs', 'frontend']} />
				<p>
				
					{lastUpdated &&
						<span>
							Last updated at {new Date(lastUpdated).toLocaleTimeString()};
							{' '}
						</span>
						
					}
					
					
					{	!isFetching && 
					<a href = '#'
						 onClick={this.handleRefreshClick}>
						 Refresh
					</a>
				
					}
			</p>
			{/*  if empty ? *(fetching?"loding":"empty") : (display *<Posts/>) 
			*/}
			
			{isEmpty ? (isFetching ? <h2> Loading...</h2> : <h2>Empty</h2>)
			: <div style={{ opacity: isFetching ? 0.5 : 1 }}>
					<Posts posts={posts} />
			  </div>
			}
		</div>	
		)
	}
	
	
	
	
	
}

const mapStateToProps = state => {
	/* state {
				postByReddit:{
					(@param)selectedReddit:{
						 didIvalidate:false or ture
						 isFeting:0 or 1
						 items:[arrays]
						 lastUpdate:number
						 
					} 
				selectedReddit:
				}
		
		
	} */
	
	const {selectedReddit, postsByReddit } =state
	
	const {
		isFetching,
		lastUpdated,
		items
	} = postsByReddit[selectedReddit] || {
		isFetching: true,
		items: []
	}
//这里有个结构赋值 {foo:'bar'} = {foo:'aaa'}
//    foo not undefined
//    bar => 'aaa'
	
	return {
		selectedReddit,
		posts:items,
		isFetching,
		lastUpdated
	}
	}
	
	export default connect(mapStateToProps)(App)