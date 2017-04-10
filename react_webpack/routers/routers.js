import React, { Component, PropTypes } from 'react'

import { BrowRouter as Router, Route, Link } from 'react-router-dom'

const BasicExample = () => (
  <Router>
		<div>
		  <ul>
				<li>
				  <Link to ='/' > Home </Link>
				</li>
				<li>
				  <Link to='./about'>About</Link>
				</li>
				<li>
					<Link to='./topic'>topic</Link>
				</li>
			</ul>
			
			<Route exact path='./' component={Home} />
			<Route  path='./about' component={About} />
			<Route  path='./topic' component={Topic} />
			
			
			
			
			
		</div>
		
		
		
	</Router>

)

const Home = () => (
  <h3>HOme</h3>
)

const About= () => (
  <h3>About</h3>
)

const Topics = ({match}) => (
	<div>
		<h2>Topic</h2>
		<ul>
			<li>
				<Link to={`${match.url}/rendering`}>Rendering with React</Link>
			</li>
			<li>
				<Link to={`${match.url}/component`}>Component</Link>
			</li>
			<li>
				<Link to={`${match.url}/props-v-state`}>Props v .state</Link>
			</li>
		</ul>
		
		<Route path={`${match.url}/:topicId` }component={Topic}/>
		<Route exact path={`${match.url}`} component={() => (<h3>select a topic</h3>)} />
	</div>
)

const Topic = ({match}) => (
  <div>
		<h3>{match.param.topicId}</h3>
	</div>
)


export default BasicExample






