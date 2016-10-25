import React,{Component, PropTypes} from 'react';

class HelloWorld extends React.Component{
	 constructor(props){
		 super(props);
	 }


	 render () {
		return (
			<h1 onClick={this.props.onClick}>Hello World</h1>
		);
	}
}
export default HelloWorld;
