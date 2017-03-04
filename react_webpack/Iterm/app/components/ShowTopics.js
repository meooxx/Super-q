import React, { Component } from 'react'
import Topic from '../components/Topic'
import { fetchIfNeeded } from '../actions/fetchTopic'
import {connect} from 'react-redux'

//showtopics
class ShowTopics extends Component {
	
	
	componentDidMount() {
		
		const { dispatch } =this.props
		
		let show = 'topics' 
		
		
		dispatch(fetchIfNeeded(show))
	
		}
		
		
	render(){
		
			const  topics  = this.props.topics
			return (
				
				 { /*  * 这里可以加refresh 或许不用  
							 * 还可以加入瀑布流 读取topics cnode有个 api limit tap 等等 可以 设置读取的条数，page数
						*/   }
					
				<ul>
					{topics.map(
						(topic, index)=>
							<Topic key={index} topic={topic} />
						)}
				</ul>
			)}
	}

const mapStateToProps = (state) => {
	
	//一定吧数据初始化搞好 
	
	const { topics } =state.topics
	const data = topics.data || []
	return {
		topics:data
	} 
}

export default connect(mapStateToProps)(ShowTopics)