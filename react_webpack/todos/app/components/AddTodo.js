import React, { Component, PropTypes } from 'react'
 
export default class AddTodo extends Component{
	render(){
		return (
		  <div> 
			  <input type='text' ref={input=>this.input=input} />
			  <button 
				onClick={e => this.handleClick(e)}>
				add
			  </button>
		  </div>	
			)
	}
	
	
	handleClick(e) {
		const value = this.input.value.trim()
		//const value= e.target.value 为什么不行原因可能为 这不是一个form 所以无法从button获得input中的值；应该可以从 form中submit可以获取？最新版的react中ref属性改为一个function ref={input=>this.input=input} insteadof this.refs.input参数input为这个domElement
		
		//console.log(value)
		this.props.onAddClick(value)
		this.input.value=''
		
	}
}

AddTodo.propTypes={
	onAddClick:PropTypes.func.isRequired
}