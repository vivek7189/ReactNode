import React,{Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class extends React.Component{
    constructor(props){
        super(props);
        this.state={
            checked:true
        }
    }
    filterdata(){
        this.setState({
            checked: !this.state.checked
        });
        console.log(this.state.checked)
        this.props.callBack(this.state.checked);
    }
    render(){
        return(<input type='checkbox' onChange={this.filterdata.bind(this)}/>)
    }
}