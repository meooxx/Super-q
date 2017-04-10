import React, { Component, PropTypes } from 'react'
import Select from '../components/Select'
import { connect } from 'react-redux'
import { selectReddit, requestPosts, recivePosts,invalidateReddit,fetchPostsIfNeeded } from '../actions/actions'
import Posts from '../components/Posts'




 class App extends Component {
	
	
	
	componentDidMount() {
		const { posts, dispatch,isFetching,selectedReddit, } = this.props
		//console.log('didMout' + selectedReddit)
	
	
	dispatch(fetchPostsIfNeeded(selectedReddit))
	
	
}

componentWillReceiveProps(nextProps) {
	const {dispatch, selectedReddit } = this.props

	if(nextProps.selectedReddit !== selectedReddit) {
		console.log('yes if')
		dispatch(fetchPostsIfNeeded(nextProps.selectedReddit))
	}
}
	
	 handleChange = (nextReddit) => {
		 const { dispatch, selectedReddit } = this.props

		dispatch(selectReddit(nextReddit))
	}
	
	 handleFresh =(e) => {
		 const { dispatch, selectedReddit } = this.props
		 e.preventDefault()
		 dispatch(invalidateReddit(selectedReddit))
		 dispatch(fetchPostsIfNeeded(selectedReddit))
	 }
	
	render () {
		const { posts, dispatch,isFetching,selectedReddit,lastUpdated } = this.props
		//console.log(posts)
		 const isEmpty=posts.length === 0 
	
		return (
		  <div> 
			  <Select onChange={this.handleChange} 
								options ={['reactjs', 'frontend']}
								selectedReddit={selectedReddit} />
				<p>
					{lastUpdated && 
						<span> 
							Last Updated at {new Date(lastUpdated).toLocaleTimeString()}
						</span>
					}
					{!isFetching &&
						<a href='#' 
							 onClick={this.handleFresh} >
							refresh
						</a>
					}
				</p>
				{isEmpty 
					? (isFetching?<h2>Loadding...</h2>
					: <h2>isEmpty</h2>)
					: <div style={{opacity: isFetching ? 0.5 : 1}}>
						  <Posts posts={posts} />
					</div>
				}
			</div>	
		)
	}
	
	
}



const mapStateToProps = (state) => {
	const { postsByReddit, selectedReddit} = state
	const { isFetching, lastUpdated, items} = postsByReddit[selectedReddit] || {
		isFething:true,
		items:[]
	}

	return {
		isFetching,
		posts:items, 
		lastUpdated,
		selectedReddit
		
	}
}

export default connect(mapStateToProps)(App)
