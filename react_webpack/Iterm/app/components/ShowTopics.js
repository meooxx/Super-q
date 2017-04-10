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
				
				 { /*  * ������Լ�refresh ������  
							 * �����Լ����ٲ��� ��ȡtopics cnode�и� api limit tap �ȵ� ���� ���ö�ȡ��������page��
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
	
	//һ�������ݳ�ʼ����� 
	
	const { topics } =state.topics
	const data = topics.data || []
	return {
		topics:data
	} 
}

export default connect(mapStateToProps)(ShowTopics)