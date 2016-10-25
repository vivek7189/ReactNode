import React, {Component, PropTypes} from 'react';
import RecatDOM from 'react-dom'

import List from './listPage.jsx';
import Filter from '../secondComp/filter.jsx';
import Options from '../secondComp/radioOption.jsx';

const data=["Apples","Broccoli","Chicken","Duck","Eggs","Fish","Granola","Hash Browns"];

export default class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:data
        };
        this.filterdata = this.filterdata.bind(this);
    }

   filterdata(data1){
       console.log("inside filter data");
       if(data1){
         this.setState({
           items:['apple','banana','temp']
       });
       }else{
           console.log('data',data);
           this.setState({
           items:data
        });
       }
   }
    render(){
        console.log('toggle',this);
        return(
            <div>
              <Filter callBack={this.filterdata}/>
              <input type="checkbox" defaultChecked/>
              <List items={this.state.items}/>
              <Options />
            </div>
        )
    }
}