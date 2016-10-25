import React,{Component, PropTypes} from 'react';
import ReactDOM  from 'react-dom';

import ProductOffers from './offersModel.jsx';

import OfferWrapper from './OfferWrapper.jsx';
import {groupBy,isElementVisible} from './util.js';


let result=[];
class Offers extends React.Component {
   constructor(props) {
     //console.log('props',props);
    super(props);
    this.state = { 
          productData: [],
          showImage:false
     }
  }

    updateViewport(){
        //console.log('inside scroll',document.body.scrollTop);
        [].forEach.call(document.querySelectorAll('.Btc_container img'), function(img) {
            
            if(isElementVisible(img)){
                var source= img.getAttribute('src');
                if(source.indexOf('.gif') >1){
                  var dataSource= img.getAttribute('data-src');
                 img.setAttribute('src', dataSource);          
                }
                
            }else{
                 img.setAttribute('width', "32px"); 
                 img.setAttribute('heigth', "32px"); 
                
            }
           
            
        });
       
    }
    componentDidMount (){
        window.addEventListener('scroll', this.updateViewport.bind(this));
         this.serverRequest = $.get('/proxy', function (data) {
       result = groupBy(data, function(item){
                return [item.categoryName];
                });
      this.setState({
        productData: result
      },this.updateViewport.bind(this));
    }.bind(this));
    }
    componentWillUnmount () {
    window.removeEventListener('scroll', this.updateViewport);
  }
    render() {
        //console.log('data4',this);
        var self =this;
        var data=this.state.productData;
        if(data.length === 0){
            return false;
        }
               console.log('dataSet',data);
                let wrapper= data.map(function (value,index){
                    return (
                            <OfferWrapper key={index} mainData={value} viewport={self.state.viewport}/>   
                    )
                });       
         return (<div id="mainWrapperX_testX999" className="inHouseDevs_pageWrapper">
                  <div id="mainbg">
                    <div className="Btc_container">
                        <div className="sectionOfferWrapper DODCaption  hideOpacityBGx">
                            <div className="whitebg">
                               {wrapper}
                        </div>
                    </div>
                </div>
           </div>
   </div>
)
    }
}
var mountNode=document.getElementById('offers');
ReactDOM.render(<Offers  sourceData="/jsondata.js" />,mountNode);



