import React from 'react';
import ReactDOM from 'react-dom';

export default class Options extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
             <input type='radio' checked/>
            </div>
        )
    }
}