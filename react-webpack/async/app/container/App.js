import React, { Component, PropTypes } from 'react'

import Select from '../components/Select'
import Posts from '../components/Posts'
import { connect } from 'react-redux'

import { selectReddit, requestPosts, receivePosts, invalidatePosts,fetchPostsIfNeeded } from '../actions/actions'


 class App extends Component {
	componentDidMount() {
		const {dispatch,selectedReddit } = this.props
		//console.log(selectedReddit)
		dispatch(fetchPostsIfNeeded(selectedReddit))
	}
	componentWillReceiveProps (nextProps) {
		const {dispatch, selectedReddit } = this.props
		if(nextProps.seletedReddit !== selectedReddit ) {
			dispatch(fetchPostsIfNeeded(nextProps.selectedReddit))
		}
	}
	
	
	handleChange = (e) => {
		const {dispatch} = this.props
		dispatch(selectReddit(e.target.value))
	}
	
	
	handleClick = (e) => {
		const { dispatch,selectedReddit} = this.props
		dispatch(invalidatePosts(selectedReddit))
		dispatch(fetchPostsIfNeeded(selectedReddit))
		e.preventDefault()
	}
	
	render() {
		const { selectedReddit,dispatch, posts, isFetching, lastUpdated} = this.props
		
		const isEmpty = posts.length === 0
		return (
			<div> 
				<Select 
				  value={selectedReddit}
					onChange={this.handleChange}
					options ={['reactjs', 'frontend']}
					
				/>
			  
				{lastUpdated && <p>last Updated At {
						new Date(lastUpdated).toLocaleString()
						}</p>
				}
				{!isFetching && 
					<a 
						href='#'
						onClick={this.handleClick}>
						
						Refresh
						
					</a>
				}
				{}
				{isEmpty
          ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
          : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
              <Posts posts={posts} />
            </div>
        }
			</div>
				
		)
	}
}
const mapStateToProps = (state) => {
	const { selectedReddit, postsByReddit } =state
	const {posts:posts, isFetching, lastUpdated } = postsByReddit[selectedReddit] || {
		isFetching:true,
		posts:[]
	}
	
	console.log(posts)
	return {
		posts,
		isFetching,
		lastUpdated,
		selectedReddit
	}
}


export default connect(mapStateToProps)(App)