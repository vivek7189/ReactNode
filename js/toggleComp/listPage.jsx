import React,{Component, PropTypes}  from  'react';
import ReactDOM from 'react-dom';

export default class extends React.Component {
    constructor(props){
        super(props)
    }
    getIndex(index,e){
        console.log(e.target);
         console.log(index);
        // this.props.items=['vivek','kapil']
    }
    render(){
        console.log("list",this)
      
       return(
           <div>{
             this.props.items.map((item,index)=>{
              return (<div key={index} onClick={this.getIndex.bind(this,index)}>{item}</div>)
           })
           }
           </div>
       )
    }
}