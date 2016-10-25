import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello.jsx';
import Toggle from './toggleComp/toggleMain.jsx';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state={
			checked:true		
		}
	}
	render () {
		console.log('App',this);
		return (
				<Toggle />
		)
	}
}
App.propTypes = {
  status: React.PropTypes.string.isRequired,
};
App.defaultProps ={
	status1:'fi'
}
ReactDOM.render(<App status="main"></App>, document.getElementById('app'));





function isElementFullyVisible(el){
    var pos = el.getBoundingClientRect();
}